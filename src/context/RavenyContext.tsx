import {
  createContext,
  Dispatch,
  ReactElement,
  Reducer,
  useContext,
  useReducer,
} from 'react'
import { Recipe } from 'types'
import {
  ErrorState,
  InitialState,
  LoadingState,
  RecipesState,
  SingleRecipeState,
} from './interfaces'

type RavenyState =
  | InitialState
  | LoadingState
  | SingleRecipeState
  | RecipesState
  | ErrorState

export type Action =
  | { type: 'loading' }
  | { type: 'singleRecipeResolved'; payload: Recipe }
  | {
      type: 'recipesResolved'
      payload: { results: number; recipes: Recipe[]; more: boolean }
    }
  | {
      type: 'moreRecipesResolved'
      payload: { recipes: Recipe[]; more: boolean }
    }
  | { type: 'loadingMoreRecipes' }
  | { type: 'rejected'; payload: string }

type RavenyContextDispatchType = {
  dispatch: Dispatch<Action>
}

type RavenyContextStateType = {
  state: RavenyState
}

const initialState: RavenyState = {
  status: 'idle',
  stateType: 'initialState',
}

const ravenyReducer = (state: RavenyState, action: Action): RavenyState => {
  switch (action.type) {
    case 'loading':
      return {
        status: 'loading',
        stateType: 'loadingState',
      }
    case 'singleRecipeResolved':
      return {
        status: 'resolved',
        recipe: action.payload,
        stateType: 'singleRecipeState',
      }
    case 'recipesResolved':
      return {
        status: 'resolved',
        results: action.payload.results,
        recipes: action.payload.recipes,
        hasMoreRecipes: action.payload.more,
        stateType: 'recipesState',
      }
    case 'loadingMoreRecipes':
      return {
        ...state,
        status: 'loadingMore',
        stateType: 'recipesState',
      } as RecipesState
    case 'moreRecipesResolved':
      return {
        ...state,
        status: 'resolved',
        recipes: [...action.payload.recipes],
        stateType: 'recipesState',
        hasMoreRecipes: action.payload.more,
      } as RecipesState
    case 'rejected':
      return {
        status: 'rejected',
        error: action.payload,
        stateType: 'errorState',
      }
    default:
      throw new Error('This should not happen :D')
  }
}

const RavenyStateContext = createContext<RavenyContextStateType>({
  state: initialState,
})

const RavenyDispatchContext = createContext<RavenyContextDispatchType>({
  dispatch: () => {},
})

RavenyDispatchContext.displayName = 'RavenyContextDispatch'
RavenyStateContext.displayName = 'RavenyContextState'

const RavenyProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer<Reducer<RavenyState, Action>>(
    ravenyReducer,
    initialState
  )

  return (
    <RavenyStateContext.Provider value={{ state }}>
      <RavenyDispatchContext.Provider value={{ dispatch }}>
        {children}
      </RavenyDispatchContext.Provider>
    </RavenyStateContext.Provider>
  )
}

const useRavenyState = () => {
  const context = useContext(RavenyStateContext)
  if (!context) {
    throw new Error(`No provider for RavenyStateContext given`)
  }
  return context
}

const useRavenyDispatch = () => {
  const context = useContext(RavenyDispatchContext)
  if (!context) {
    throw new Error(`No provider for RavenyDispatchContext given`)
  }
  return context
}

export { RavenyProvider, useRavenyDispatch, useRavenyState }

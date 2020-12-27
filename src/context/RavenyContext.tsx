import {
  createContext,
  Dispatch,
  ReactElement,
  Reducer,
  useContext,
  useReducer,
} from 'react'
import { Recipe } from 'types'

/** Initial State */
interface InitialState {
  status: 'idle'
  stateType: 'initialState'
}

/** Loading State */
interface LoadingState {
  status: 'loading'
  stateType: 'loadingState'
}

/** Single Recipes State */
interface SingleRecipeState {
  recipe: Recipe
  status: 'resolved'
  stateType: 'singleRecipeState'
}

/** Recipes State */
interface RecipesState {
  status: 'resolved'
  recipes: Recipe[]
  stateType: 'recipesState'
}

/** Error State */
interface ErrorState {
  status: 'rejected'
  error: string
  stateType: 'errorState'
}

/** State Type */
type RavenyState =
  | InitialState
  | LoadingState
  | SingleRecipeState
  | RecipesState
  | ErrorState

/** Action Type */
export type Action =
  | { type: 'loading' }
  | { type: 'singleRecipeResolved'; payload: Recipe }
  | { type: 'recipesResolved'; payload: Recipe[] }
  | { type: 'rejected'; payload: string }

const initialState: RavenyState = {
  status: 'idle',
  stateType: 'initialState',
}

/* Reducer */
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
        recipes: action.payload,
        stateType: 'recipesState',
      }
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

/* Context State */
type RavenyContextStateType = {
  state: RavenyState
}

const RavenyStateContext = createContext<RavenyContextStateType>({
  state: initialState,
})

/* Context Dispatch */
type RavenyContextDispatchType = {
  dispatch: Dispatch<Action>
}

const RavenyDispatchContext = createContext<RavenyContextDispatchType>({
  dispatch: () => {},
})

/* Context Names */
RavenyDispatchContext.displayName = 'RavenyContextDispatch'
RavenyStateContext.displayName = 'RavenyContextState'

/* Provider */
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

/* Consumer Hooks */
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

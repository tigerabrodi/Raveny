import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
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

/** Pending State */
interface PendingState {
  status: 'pending'
  stateType: 'pendingState'
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

/** Raveny State */
type RavenyState =
  | InitialState
  | PendingState
  | SingleRecipeState
  | RecipesState
  | ErrorState

/** Raveny action union type for the reducer */
type Action =
  | { type: 'pending' }
  | { type: 'singleRecipeResolved'; payload: Recipe }
  | { type: 'recipesResolved'; payload: Recipe[] }
  | { type: 'rejected'; payload: string }

const initialState: RavenyState = {
  status: 'idle',
  stateType: 'initialState',
}

function ravenyReducer(state: RavenyState, action: Action): RavenyState {
  switch (action.type) {
    case 'pending':
      return {
        status: 'pending',
        stateType: 'pendingState',
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

/** The Raveny context's type */
type RavenyContextType = {
  state: RavenyState
  dispatch: Dispatch<Action>
}

const RavenyContext = createContext<RavenyContextType>({
  state: initialState,
  dispatch: () => {},
})

RavenyContext.displayName = 'RavenyContext'

// eslint-disable-next-line @typescript-eslint/ban-types
function RavenyProvider(props: PropsWithChildren<{}>): ReactElement {
  const [state, dispatch] = useReducer<Reducer<RavenyState, Action>>(
    ravenyReducer,
    initialState
  )
  const value = { state, dispatch }
  return <RavenyContext.Provider value={value} {...props} />
}

function useRavenyContext(): RavenyContextType {
  const context = useContext(RavenyContext)
  if (!context) {
    throw new Error(`No provider for RavenyContext given`)
  }
  return context
}

export { RavenyProvider, useRavenyContext }

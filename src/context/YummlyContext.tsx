import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    ReactElement,
    Reducer,
    useContext,
    useReducer,
} from 'react'

/** The Success response that Spoonacular returns if response.ok is true */
export type SuccessResponse = {
    tag: 'success'
    number: number
    offset: number
    results: Recipe[]
    totalResults: number
}

/** The Failure response that Spoonacular returns if response.ok is false */
export type FailureResponse = {
    tag: 'failure'
    status: 'failure'
    code: number
    message: string
}

/** Recipe Type */
export type Recipe = {
    id: number
    title: string
    image: string
    readyInMinutes: number
    diets: string[]
    pricePerServing: number
    servings: number
}

/** Initial State */
interface InitialState {
    status: 'idle'
}

/** Loading State */
interface LoadingState {
    status: 'pending'
}

/** Single Recipes State */
interface SingleRecipeState {
    recipe: Recipe
    status: 'resolved'
}

/** Recipes State */
interface RecipesState {
    status: 'resolved'
    recipes: Recipe[]
}

/** Error State */
interface ErrorState {
    status: 'rejected'
    error: string
}

/** Yummly State */
type YummlyState =
    | InitialState
    | LoadingState
    | SingleRecipeState
    | RecipesState
    | ErrorState

/** Yummly action union type for the reducer */
type Action =
    | { type: 'pending' }
    | { type: 'singleRecipeResolved'; payload: Recipe }
    | { type: 'recipesResolved'; payload: Recipe[] }
    | { type: 'rejected'; payload: string }

const initialState: YummlyState = {
    status: 'idle',
}

function yummlyReducer(state: YummlyState, action: Action): YummlyState {
    switch (action.type) {
        case 'pending':
            return {
                status: 'pending',
            }
        case 'singleRecipeResolved':
            return {
                status: 'resolved',
                recipe: action.payload,
            }
        case 'recipesResolved':
            return {
                status: 'resolved',
                recipes: action.payload,
            }
        case 'rejected':
            return {
                status: 'rejected',
                error: action.payload,
            }
        default:
            throw new Error('This should not happen :D')
    }
}

/** The Yummly context's type */
type YummlyContextType = {
    state: YummlyState
    dispatch: Dispatch<Action>
}

const YummlyContext = createContext<YummlyContextType>({
    state: initialState,
    dispatch: () => {},
})

YummlyContext.displayName = 'YummlyContext'

// eslint-disable-next-line @typescript-eslint/ban-types
function YummlyProvider(props: PropsWithChildren<{}>): ReactElement {
    const [state, dispatch] = useReducer<Reducer<YummlyState, Action>>(
        yummlyReducer,
        initialState
    )
    const value = { state, dispatch }
    return <YummlyContext.Provider value={value} {...props} />
}

function useYummlyContext(): YummlyContextType {
    const context = useContext(YummlyContext)
    if (!context) {
        throw new Error(`No provider for YummlyContext given`)
    }
    return context
}

export { YummlyProvider, useYummlyContext }

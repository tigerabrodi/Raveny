import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    ReactElement,
    Reducer,
    useContext,
    useReducer,
} from 'react'

//  Recipe
export type Recipe = {
    id: number
    title: string
    image: string
    readyInMinutes: number
    diets: string[]
    pricePerServing: number
    servings: number
}

// Response
export type SpoonacularResponse = {
    number: number
    offset: number
    results: Recipe[]
    totalResults: number
}

// Yummly State
interface InitialState {
    status: 'idle'
}

interface LoadingState {
    status: 'pending'
}

interface SingleRecipeState {
    recipe: Recipe
    status: 'resolved'
}

interface RecipesState {
    status: 'resolved'
    recipes: Recipe[]
}

interface ErrorState {
    status: 'rejected'
    error: unknown
}

type YummlyState =
    | InitialState
    | LoadingState
    | SingleRecipeState
    | RecipesState
    | ErrorState

// Action Union Type for the reducer
type Action =
    | { type: 'pending' }
    | { type: 'singleRecipeResolved'; payload: Recipe }
    | { type: 'recipesResolved'; payload: Recipe[] }
    | { type: 'rejected'; payload: unknown }

// The initial state
const initialState: YummlyState = {
    status: 'idle',
}

//  The Reducer
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

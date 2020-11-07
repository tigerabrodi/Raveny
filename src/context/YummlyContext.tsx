import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    ReactElement,
    Reducer,
    useContext,
    useReducer,
} from 'react'

// Response
export type SpoonacularResponse = {
    number: number
    offset: number
    results: Recipe[]
    totalResults: number
}

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

// Yummly State Type
type YummlyState = {
    recipe: Recipe | null
    recipes: Recipe[] | null
    error: string | null
    status: string
}

// Action Union Type for the reducer
type Action =
    | { type: 'idle' }
    | { type: 'pending' }
    | { type: 'singleRecipeResolved'; payload: Recipe }
    | { type: 'recipesResolved'; payload: Recipe[] }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | { type: 'rejected'; payload: any }

// The initial state
const initialState: YummlyState = {
    error: null,
    recipe: null,
    status: 'idle',
    recipes: null,
}

//  The Reducer
function yummlyReducer(state: YummlyState, action: Action): YummlyState {
    switch (action.type) {
        case 'idle':
            return {
                ...state,
            }
        case 'pending':
            return {
                ...state,
                status: 'pending',
            }
        case 'singleRecipeResolved':
            return {
                ...state,
                status: 'resolved',
                recipe: action.payload,
                recipes: null,
            }
        case 'recipesResolved':
            return {
                ...state,
                status: 'resolved',
                recipe: null,
                recipes: action.payload,
            }
        case 'rejected':
            return {
                ...state,
                status: 'rejected',
                recipe: null,
                recipes: null,
                error: action.payload,
            }
        default:
            throw new Error()
    }
}

type YummlyContextType = {
    state: Partial<YummlyState>
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
        throw new Error(`No provider for AppContext given`)
    }
    return context
}

export { YummlyProvider, useYummlyContext }

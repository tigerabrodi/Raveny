import { Recipe } from 'types'

export interface InitialState {
  status: 'idle'
  stateType: 'initialState'
}

export interface LoadingState {
  status: 'loading'
  stateType: 'loadingState'
}

export interface SingleRecipeState {
  recipe: Recipe
  status: 'resolved'
  stateType: 'singleRecipeState'
}

export interface RecipesState {
  status: 'resolved' | 'loadingMore'
  recipes: Recipe[]
  hasMoreRecipes: boolean
  results: number
  stateType: 'recipesState'
}

export interface ErrorState {
  status: 'rejected'
  error: string
  stateType: 'errorState'
}

export enum DietLabel {
  balanced = 'balanced',
  'high-protein' = 'high-protein',
  'high-fiber' = 'high-fiber',
  'low-fat' = 'low-fat',
  'low-carb' = 'low-carb',
  'low-sodium' = 'low-sodium',
}

export enum HealthLabel {
  vegan = 'vegan',
  vegetarian = 'vegetarian',
  paleo = 'paleo',
  'dairy-free' = 'dairy-free',
  'gluten-free' = 'gluten-free',
  'wheat-free' = 'wheat-free',
  'fat-free' = 'fat-free',
  'low-sugar' = 'low-sugar',
  'egg-free' = 'egg-free',
  'peanut-free' = 'peanut-free',
  'tree-nut-free' = 'tree-nut-free',
  'soy-free' = 'soy-free',
  'fish-free' = 'fish-free',
  'shellfish-free' = 'shellfish-free',
}

export type Recipe = {
  id: string
  uri: string
  label: string
  image: string
  yield: number
  calories: number
  cautions: string[]
  dietLabels: DietLabel[]
  healthLabels: HealthLabel[]
}

type Hit = {
  recipe: Recipe
  bookmarked: boolean
  bought: boolean
}

export type MultipleRecipesResponse = {
  q: string
  from: number
  to: number
  count: number
  more: boolean
  hits: Hit[]
}

export type SingleRecipe = Recipe & {
  ingredientLines: string[]
  ingredients: { image: string; text: string; weight: number }[]
  totalTime: number
  totalWeight: number
  url: string
}

export type SingleRecipeResponse = [SingleRecipe]

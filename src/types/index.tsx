type Measure = {
  uri: string
  label: string
}

type Food = {
  foodId: string
  label: string
}

type NutrientInfo = {
  uri: string
  label: string
  quantity: number
  unit: string
}

type Ingredient = {
  text: string
  foodId: string
  quantity: number
  measure: Measure
  weight: number
  food: Food
}

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
  uri: string
  label: string
  image: string
  source: string
  url: string
  yield: number
  calories: number
  totalWeight: number
  totalTime: number
  cautions: string[]
  ingredients: Ingredient[]
  totalNutrients: NutrientInfo[]
  totalDaily: NutrientInfo[]
  dietLabels: DietLabel[]
  healthLabels: HealthLabel[]
}

type Hit = {
  recipe: Recipe
  bookmarked: boolean
  bought: boolean
}

export type SuccessResponse = {
  q: string
  from: number
  to: number
  count: number
  more: boolean
  hits: Hit[]
}

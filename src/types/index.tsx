/* Types */
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

enum DietLabel {
  'balanced',
  'high-protein',
  'high-fiber',
  'low-fat',
  'low-carb',
  'low-sodium',
}

enum HealthLabel {
  'vegan',
  'vegetarian',
  'paleo',
  'dairy-free',
  'gluten-free',
  'wheat-free',
  'fat-free',
  'low-sugar',
  'egg-free',
  'peanut-free',
  'tree-nut-free',
  'soy-free',
  'fish-free',
  'shellfish-free',
}

/* Recipe Type */
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

/* Response Types */
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

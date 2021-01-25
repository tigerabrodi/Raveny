import { rest } from 'msw'
import meatResponse from './data/meat-recipes.json'
import chickenResponse from './data/chicken-recipes.json'
import lowCaloriesResponse from './data/calories-low-recipes.json'
import highCaloriesResponse from './data/calories-high-recipes.json'
import excludeOneIngredientResponse from './data/exclude-ingredients-1-recipes.json'
import excludeTwoIngredientsResponse from './data/exclude-ingredients-2-recipes.json'
import singleRecipeResponse from './data/single-recipe.json'

export const handlers = [
  rest.get('https://api.edamam.com/search', (req, res, ctx) => {
    const query = req.url.searchParams.get('q')
    const caloriesRange = req.url.searchParams.get('calories')
    const excludedIngredients = req.url.searchParams.getAll('exclude')
    const singleRecipeUri = req.url.searchParams.get('r')

    if (query === 'chicken') {
      return res(ctx.status(200), ctx.json(chickenResponse))
    }

    if (query === 'meat') {
      return res(ctx.status(200), ctx.json(meatResponse))
    }

    if (caloriesRange === '0-1500') {
      return res(ctx.status(200), ctx.json(lowCaloriesResponse))
    }

    if (caloriesRange === '1500-3000') {
      return res(ctx.status(200), ctx.json(highCaloriesResponse))
    }

    if (excludedIngredients.length === 1) {
      return res(ctx.status(200), ctx.json(excludeOneIngredientResponse))
    }

    if (excludedIngredients.length === 2) {
      return res(ctx.status(200), ctx.json(excludeTwoIngredientsResponse))
    }

    if (singleRecipeUri?.startsWith('http://www.edamam.com/ontologies/')) {
      return res(ctx.status(200), ctx.json(singleRecipeResponse))
    }
  }),
]

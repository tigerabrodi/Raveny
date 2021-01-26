import { rest } from 'msw'
import meatResponse from './data/meat-recipes.json'
import chickenResponse from './data/chicken-recipes.json'
import lowCaloriesResponse from './data/calories-low-recipes.json'
import highCaloriesResponse from './data/calories-high-recipes.json'
import excludeOneIngredientResponse from './data/exclude-ingredients-1-recipes.json'
import excludeTwoIngredientsResponse from './data/exclude-ingredients-2-recipes.json'
import singleRecipeResponse from './data/single-recipe.json'
import lowCarbResponse from './data/low-carb-recipes.json'
import veganResponse from './data/vegan-recipes.json'
import highProteinResponse from './data/high-protein-recipes.json'

export const handlers = [
  rest.get('https://api.edamam.com/search', (req, res, ctx) => {
    const queryParam = req.url.searchParams.get('q')
    const caloriesRangeParam = req.url.searchParams.get('calories')
    const excludedIngredientsParam = req.url.searchParams.getAll('exclude')
    const singleRecipeUriParam = req.url.searchParams.get('r')
    const healthParam = req.url.searchParams.get('health')
    const dietParam = req.url.searchParams.get('diet')

    /* Labels */
    if (healthParam === 'vegan') {
      return res(ctx.status(200), ctx.json(veganResponse))
    }

    if (dietParam === 'high-protein') {
      return res(ctx.status(200), ctx.json(highProteinResponse))
    }

    if (dietParam === 'low-carb') {
      return res(ctx.status(200), ctx.json(lowCarbResponse))
    }

    /* Calories */
    if (caloriesRangeParam === '0-1500') {
      return res(ctx.status(200), ctx.json(lowCaloriesResponse))
    }

    if (caloriesRangeParam === '1500-3000') {
      return res(ctx.status(200), ctx.json(highCaloriesResponse))
    }

    /* Ingredients */
    if (excludedIngredientsParam.length === 1) {
      return res(ctx.status(200), ctx.json(excludeOneIngredientResponse))
    }

    if (excludedIngredientsParam.length === 2) {
      return res(ctx.status(200), ctx.json(excludeTwoIngredientsResponse))
    }

    /* Query */
    if (queryParam === 'chicken') {
      return res(ctx.status(200), ctx.json(chickenResponse))
    }

    if (queryParam === 'meat') {
      return res(ctx.status(200), ctx.json(meatResponse))
    }

    if (singleRecipeUriParam?.startsWith('http://www.edamam.com/ontologies/')) {
      return res(ctx.status(200), ctx.json(singleRecipeResponse))
    }
  }),
]

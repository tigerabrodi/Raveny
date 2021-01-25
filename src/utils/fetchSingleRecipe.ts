import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { SingleRecipeResponse } from 'types'

const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID
const apiURL = process.env.REACT_APP_API_URL

export const fetchSingleRecipe = async (
  dispatch = {} as Dispatch<Action>,
  recipeId = ''
) => {
  dispatch({ type: 'loading' })
  try {
    const urlObject = new URL(apiURL!)

    const recipeUri = `http://www.edamam.com/ontologies/edamam.owl#recipe_${recipeId}`

    urlObject.searchParams.append('app_key', apiKEY!)
    urlObject.searchParams.append('app_id', apiID!)
    urlObject.searchParams.append('r', recipeUri)

    const { href: url } = urlObject

    const response = await fetch(url)
    if (response.ok) {
      const [recipe]: SingleRecipeResponse = await response.json()

      dispatch({
        type: 'singleRecipeResolved',
        payload: {
          ...recipe,
          caloriesPerServing: Math.round(recipe.calories / recipe.yield),
        },
      })
    } else {
      const failureData = await response.json()
      dispatch({ type: 'rejected', payload: failureData.message })
      throw new Error(
        `Something went wrong with the request, message: ${failureData.message}`
      )
    }
  } catch (error) {
    throw new Error(`Something went terribly wrong! Message: ${error.message}`)
  }
}

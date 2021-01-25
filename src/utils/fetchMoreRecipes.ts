import { Action } from 'context/RavenyContext'
import { Dispatch } from 'react'
import { MultipleRecipesResponse } from 'types'

const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const fetchMoreRecipes = async ({
  dispatch = {} as Dispatch<Action>,
  href = '',
  moreRecipesFetchedTimes = 1,
} = {}) => {
  dispatch({ type: 'loadingMoreRecipes' })
  try {
    const urlObject = new URL(href)
    const from = 0
    const to = 16

    urlObject.searchParams.append('app_key', apiKEY!)
    urlObject.searchParams.append('app_id', apiID!)
    urlObject.searchParams.append(
      'from',
      String(from * moreRecipesFetchedTimes)
    )
    urlObject.searchParams.append('to', String(to * moreRecipesFetchedTimes))
    const { href: url } = urlObject

    const response = await fetch(url)
    if (response.ok) {
      const { hits, more }: MultipleRecipesResponse = await response.json()
      dispatch({
        type: 'moreRecipesResolved',
        payload: {
          recipes: hits.map(({ recipe }) => ({
            ...recipe,
            id: new URL(recipe.uri).hash.split('_')[1],
          })),
          more,
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

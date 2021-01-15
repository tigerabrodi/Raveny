import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { v4 as uuidv4 } from 'uuid'
import { MultipleRecipesResponse } from 'types'

const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const fetchRecipes = async (
  dispatch = {} as Dispatch<Action>,
  href = ''
) => {
  dispatch({ type: 'loading' })
  try {
    const urlObject = new URL(href)

    urlObject.searchParams.append('app_key', apiKEY!)
    urlObject.searchParams.append('app_id', apiID!)
    urlObject.searchParams.append('from', '0')
    urlObject.searchParams.append('to', '8')

    const { href: url } = urlObject

    const response = await fetch(url)
    if (response.ok) {
      const {
        count,
        hits,
        more,
      }: MultipleRecipesResponse = await response.json()

      dispatch({
        type: 'recipesResolved',
        payload: {
          results: count,
          recipes: hits.map(({ recipe }) => ({ ...recipe, id: uuidv4() })),
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

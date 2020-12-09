import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { SuccessResponse } from 'types'
import { History } from 'history'

export const client = async ({
  dispatch = {} as Dispatch<Action>,
  url = '',
  shouldUseSessionStorage = false,
  shouldRedirect = false,
  shouldFetchMultipleRecipes = false,
  history = {} as History,
  redirectUrl = '',
} = {}) => {
  try {
    dispatch({ type: 'pending' })
    const response = await window.fetch(url)
    if (response.ok) {
      // Successful response
      const successData: SuccessResponse = await response.json()

      if (shouldUseSessionStorage === true) {
        // URL to be persisted in sessionStorage
        const urlToSessionStorage = new URL(url)
        urlToSessionStorage.searchParams.delete('app_key')
        urlToSessionStorage.searchParams.delete('app_id')
        window.sessionStorage.setItem(
          'recipesQueryUrl',
          JSON.stringify(urlToSessionStorage.href)
        )
      }

      //   Fetch multiple recipes
      if (shouldFetchMultipleRecipes === true) {
        dispatch({
          type: 'recipesResolved',
          payload: successData.hits.map((hit) => hit.recipe),
        })
      }

      //   Redirect
      if (
        shouldRedirect === true &&
        history !== undefined &&
        redirectUrl !== undefined
      ) {
        history.push(redirectUrl)
      }
    } else {
      // Failure Response
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

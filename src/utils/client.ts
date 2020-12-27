import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { SuccessResponse } from 'types'
import { History } from 'history'

export const client = async ({
  dispatch = {} as Dispatch<Action>,
  history = {} as History,
  url = '',
  redirectRoute = '',
  shouldUseSessionStorage = false,
  shouldRedirect = false,
  shouldFetchMultipleRecipes = false,
} = {}) => {
  dispatch({ type: 'loading' })

  try {
    const response = await window.fetch(url)
    if (response.ok) {
      const successData: SuccessResponse = await response.json()

      /* Persist URL in Session Storage */
      if (shouldUseSessionStorage === true) {
        const urlToSessionStorage = new URL(url)
        urlToSessionStorage.searchParams.delete('app_key')
        urlToSessionStorage.searchParams.delete('app_id')
        window.sessionStorage.setItem(
          'recipesQueryUrl',
          JSON.stringify(urlToSessionStorage.href)
        )
      }

      /* Multiple Recipes */
      if (shouldFetchMultipleRecipes === true) {
        dispatch({
          type: 'recipesResolved',
          payload: {
            results: successData.count,
            recipes: successData.hits.map((hit) => hit.recipe),
          },
        })
      }

      /* Should Redirect to Route */
      if (shouldRedirect === true && redirectRoute !== undefined) {
        history.push(redirectRoute)
      }
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

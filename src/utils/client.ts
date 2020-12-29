import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { SuccessResponse } from 'types'
import { History } from 'history'

/* KEY & ID */
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const client = async ({
  dispatch = {} as Dispatch<Action>,
  history = {} as History,
  href = '',
  redirectRoute = '',
  shouldUseSessionStorage = false,
  shouldRedirect = false,
  shouldFetchMultipleRecipes = false,
} = {}) => {
  dispatch({ type: 'loading' })

  try {
    const urlObject = new URL(href)
    urlObject.searchParams.append('app_key', apiKEY!)
    urlObject.searchParams.append('app_id', apiID!)
    urlObject.searchParams.append('from', '0')
    urlObject.searchParams.append('to', '8')

    const { href: url } = urlObject

    const response = await window.fetch(url)
    if (response.ok) {
      const successData: SuccessResponse = await response.json()

      /* Persist URL in Session Storage */
      if (shouldUseSessionStorage) {
        const urlToSessionStorage = new URL(href)
        window.sessionStorage.setItem(
          'recipesQueryUrl',
          JSON.stringify(urlToSessionStorage.href)
        )
      }

      /* Multiple Recipes */
      if (shouldFetchMultipleRecipes) {
        dispatch({
          type: 'recipesResolved',
          payload: {
            results: successData.count,
            recipes: successData.hits.map((hit) => hit.recipe),
          },
        })
      }

      /* Should Redirect to Route */
      if (shouldRedirect && redirectRoute !== undefined) {
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

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
  moreRecipesFetchedTimes = 1,
  shouldUseSessionStorage = false,
  shouldRedirect = false,
  shouldFetchMultipleRecipes = false,
  shouldFetchMoreRecipes = false,
} = {}) => {
  if (shouldFetchMultipleRecipes) {
    dispatch({ type: 'loading' })
    try {
      const urlObject = new URL(href)

      /* Query Params */
      urlObject.searchParams.append('app_key', apiKEY!)
      urlObject.searchParams.append('app_id', apiID!)
      urlObject.searchParams.append('from', '0')
      urlObject.searchParams.append('to', '8')

      const { href: url } = urlObject

      /* Fetch */
      const response = await fetch(url)
      if (response.ok) {
        const { count, hits, more }: SuccessResponse = await response.json()

        /* Persist URL in Session Storage */
        if (shouldUseSessionStorage) {
          window.sessionStorage.clear()
          const urlToSessionStorage = new URL(href)
          sessionStorage.setItem(
            'recipesQueryUrl',
            JSON.stringify(urlToSessionStorage.href)
          )
        }
        dispatch({
          type: 'recipesResolved',
          payload: {
            results: count,
            recipes: hits.map((hit) => hit.recipe),
            more,
          },
        })

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
      throw new Error(
        `Something went terribly wrong! Message: ${error.message}`
      )
    }
  } else if (shouldFetchMoreRecipes) {
    dispatch({ type: 'loadingMoreRecipes' })
    try {
      const urlObject = new URL(href)
      const from = 0
      const to = 16

      /* Query Params */
      urlObject.searchParams.append('app_key', apiKEY!)
      urlObject.searchParams.append('app_id', apiID!)
      urlObject.searchParams.append(
        'from',
        String(from * moreRecipesFetchedTimes)
      )
      urlObject.searchParams.append('to', String(to * moreRecipesFetchedTimes))
      const { href: url } = urlObject

      /* Fetch */
      const response = await fetch(url)
      if (response.ok) {
        const { hits, more }: SuccessResponse = await response.json()
        dispatch({
          type: 'moreRecipesResolved',
          payload: { recipes: hits.map((hit) => hit.recipe), more },
        })
      } else {
        const failureData = await response.json()
        dispatch({ type: 'rejected', payload: failureData.message })
        throw new Error(
          `Something went wrong with the request, message: ${failureData.message}`
        )
      }
    } catch (error) {
      throw new Error(
        `Something went terribly wrong! Message: ${error.message}`
      )
    }
  }
}

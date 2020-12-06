import React, { ReactNode, useEffect } from 'react'
import { useRavenyContext } from 'context/RavenyContext'
import { SuccessResponse } from 'types'
import { Spinner } from 'components/Spinner'
import { Recipe } from 'components/Recipe'
import { RecipesWrapper } from './styles'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const HighProtein = (): ReactNode => {
  const { state, dispatch } = useRavenyContext()

  const urlToQuery = new URL(apiURL!)
  // Set query params
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)
  urlToQuery.searchParams.append('q', 'chicken')
  urlToQuery.searchParams.append('diet', 'high-protein')
  urlToQuery.searchParams.append('from', '0')
  urlToQuery.searchParams.append('to', '8')

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch({ type: 'pending' })

      try {
        const response = await window.fetch(urlToQuery.href)
        if (response.ok) {
          // Successful response
          const successData: SuccessResponse = await response.json()
          dispatch({
            type: 'recipesResolved',
            payload: successData.hits.map((hit) => hit.recipe),
          })
        } else {
          // Failed response
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
    fetchRecipes()
  }, [dispatch, urlToQuery.href])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return (
    state.stateType === 'recipesState' &&
    state.recipes.length > 0 && (
      <RecipesWrapper>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.uri} />
        ))}
      </RecipesWrapper>
    )
  )
}

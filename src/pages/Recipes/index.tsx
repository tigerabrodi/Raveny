import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  FailureResponse,
  SuccessResponse,
  useYummlyContext,
} from 'context/YummlyContext'
import { Spinner } from 'components/Spinner'
import { RecipesWrapper, Recipe, NoRecipesWrapper } from './styles'

// Environment variables
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

export const Recipes: FC = () => {
  const { state, dispatch } = useYummlyContext()
  const searchParams = useLocation().search
  const url = new URL(apiURL!)
  const numbersOfMount = JSON.parse(
    window.sessionStorage.getItem('recipesMount') as string
  )

  const completeUrl = `${url.href}${searchParams}&apiKey=${apiKEY}`

  useEffect(() => {
    // 'recipesMount' in sessionStorage will always be one number greater than numbersOfMount
    window.sessionStorage.setItem(
      'recipesMount',
      JSON.stringify(numbersOfMount + 1)
    )

    const fetchRecipes = async () => {
      dispatch({ type: 'pending' })

      // Need to set 'recipesMount' to 1 in order to prevent infinite requests
      window.sessionStorage.setItem('recipesMount', JSON.stringify(1))

      //  request config
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }

      window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
      // fetch recipes
      try {
        const response = await window.fetch(completeUrl, config)
        if (response.ok) {
          // Successful response
          const successData: SuccessResponse = await response.json()
          window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
          dispatch({
            type: 'recipesResolved',
            payload: successData.results,
          })
        } else {
          // Failed response
          const failureData: FailureResponse = await response.json()
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
  }, [completeUrl, dispatch, numbersOfMount])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return (
    <RecipesWrapper>
      {'recipes' in state && state.recipes.length > 0 ? (
        state.recipes.map((recipe) => <Recipe key={recipe.id} />)
      ) : (
        <NoRecipesWrapper />
      )}
    </RecipesWrapper>
  )
}

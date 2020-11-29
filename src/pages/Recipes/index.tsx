import React, { FC, useEffect } from 'react'
import { useRavenyContext } from 'context/RavenyContext'
import { SuccessResponse } from 'types'
import { Spinner } from 'components/Spinner'
import { Recipe } from 'components/Recipe'
import {
  RecipesWrapper,
  NoRecipesWrapper,
  NoRecipesTitle,
  SadFace,
  NoRecipesButton,
} from './styles'

// API Key & ID
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const Recipes: FC = () => {
  const { state, dispatch } = useRavenyContext()

  const numbersOfMount = JSON.parse(
    window.sessionStorage.getItem('recipesMount') as string
  )

  // URL without key and id
  const urlToQuery = new URL(
    JSON.parse(window.sessionStorage.getItem('recipesQueryUrl') as string)
  )

  // We need to append key and id since they are not included in the URL that gets persisted in sessionStorage
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)

  useEffect(() => {
    // 'recipesMount' in sessionStorage will be 2 after the first render, therefore fetchRecipes will not be fired on the first render
    window.sessionStorage.setItem('recipesMount', JSON.stringify(2))

    const fetchRecipes = async () => {
      dispatch({ type: 'pending' })

      // fetch recipes
      try {
        const response = await window.fetch(urlToQuery.href)
        if (response.ok) {
          // Successful response
          const successData: SuccessResponse = await response.json()
          window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
          dispatch({
            type: 'recipesResolved',
            // payload should be an array of recipes
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

    if (numbersOfMount === 2) {
      fetchRecipes()
    }
  }, [dispatch, numbersOfMount, urlToQuery.href])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return 'recipes' in state && state.recipes.length > 0 ? (
    <RecipesWrapper>
      {state.recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesWrapper>
  ) : (
    <NoRecipesWrapper>
      <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
      <SadFace />
      <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
    </NoRecipesWrapper>
  )
}

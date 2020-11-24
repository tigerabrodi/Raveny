import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import {
  FailureResponse,
  SuccessResponse,
  useYummlyContext,
} from 'context/YummlyContext'
import { Spinner } from 'components/Spinner'
import {
  RecipesWrapper,
  Recipe,
  NoRecipesWrapper,
  Title,
  Image,
  Minutes,
  Price,
  Serving,
  DietWrapper,
  DietLabel,
  Check,
  Strong,
} from './styles'

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
    // 'recipesMount' in sessionStorage will be 2 after the first render, therefore fetchRecipes will not be fired on the first render
    window.sessionStorage.setItem('recipesMount', JSON.stringify(2))

    const fetchRecipes = async () => {
      dispatch({ type: 'pending' })

      //  request config
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }

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
    if (numbersOfMount === 2) {
      fetchRecipes()
    }
  }, [completeUrl, dispatch, numbersOfMount])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return (
    <RecipesWrapper>
      {'recipes' in state && state.recipes.length > 0 ? (
        state.recipes.map((recipe) => (
          <Recipe key={recipe.id} to={`/recipe/${recipe.id}`}>
            <Image src={recipe.image} alt={recipe.title} />
            <Title> {recipe.title} </Title>
            <Minutes>
              <Strong>Time:</Strong> {recipe.readyInMinutes} Minutes
            </Minutes>
            <Price>
              <Strong>Cost:</Strong> {Math.round(recipe.pricePerServing)}$
            </Price>
            <Serving>
              <Strong>Servings:</Strong> {recipe.servings}
            </Serving>
            {recipe.diets.length > 0 && (
              <DietWrapper>
                {recipe.diets.map((diet) => (
                  <DietLabel key={uuidv4()}>
                    {diet} <Check />
                  </DietLabel>
                ))}
              </DietWrapper>
            )}
          </Recipe>
        ))
      ) : (
        <NoRecipesWrapper />
      )}
    </RecipesWrapper>
  )
}

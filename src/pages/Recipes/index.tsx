import { useEffect } from 'react'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Recipe } from 'components/Recipe'
import {
  RecipesHeading,
  RecipesMain,
  RecipesSection,
} from 'components/Recipe/styles'
import { Spinner } from 'components/Spinner'
import {
  NoRecipesWrapper,
  NoRecipesTitle,
  SadFace,
  NoRecipesButton,
} from './styles'

/* Environment Variables */
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const Recipes = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()

  const numbersOfMount = JSON.parse(
    window.sessionStorage.getItem('recipesMount') as string
  )

  /* URL */
  const urlToQuery = new URL(
    JSON.parse(window.sessionStorage.getItem('recipesQueryUrl') as string)
  )

  /* Query Params */
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)

  useEffect(() => {
    // 'recipesMount' in sessionStorage will be 2 after the first render, therefore fetchRecipes will not be fired on the first render
    window.sessionStorage.setItem('recipesMount', JSON.stringify(2))

    if (numbersOfMount === 2) {
      client({
        dispatch,
        url: urlToQuery.href,
        shouldFetchMultipleRecipes: true,
      })
    }
  }, [dispatch, numbersOfMount, urlToQuery.href])

  if (state.status === 'loading') {
    return <Spinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain>
      <RecipesHeading>{state.results} Results</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.uri} />
        ))}
      </RecipesSection>
    </RecipesMain>
  ) : (
    <NoRecipesWrapper>
      <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
      <SadFace role="img" title="A sad emoji." />
      <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
    </NoRecipesWrapper>
  )
}

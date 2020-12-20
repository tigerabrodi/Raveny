import { useEffect } from 'react'
import { useRavenyContext } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Spinner } from 'components/Spinner'
import { Recipe } from 'components/Recipe'
import { RecipesWrapper } from 'components/Recipe/styles'
import {
  NoRecipesWrapper,
  NoRecipesTitle,
  SadFace,
  NoRecipesButton,
} from './styles'

// API Key & ID
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const Recipes = () => {
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

    if (numbersOfMount === 2) {
      client({
        dispatch,
        url: urlToQuery.href,
        shouldFetchMultipleRecipes: true,
      })
    }
  }, [dispatch, numbersOfMount, urlToQuery.href])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesWrapper>
      {state.recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesWrapper>
  ) : (
    <NoRecipesWrapper>
      <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
      <SadFace role="img" aria-label="A sad face" />
      <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
    </NoRecipesWrapper>
  )
}

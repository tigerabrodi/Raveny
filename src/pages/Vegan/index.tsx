import { useEffect } from 'react'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Recipe } from 'components/Recipe'
import {
  RecipesHeading,
  RecipesMain,
  RecipesSection,
} from 'components/Recipe/styles'
import { FullPageSpinner } from 'components/Spinner'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const Vegan = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()

  const urlToQuery = new URL(apiURL!)

  // Set query params
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)
  urlToQuery.searchParams.append('q', 'salad')
  urlToQuery.searchParams.append('health', 'vegan')
  urlToQuery.searchParams.append('from', '0')
  urlToQuery.searchParams.append('to', '8')

  useEffect(() => {
    client({
      dispatch,
      url: urlToQuery.href,
      shouldFetchMultipleRecipes: true,
    })
  }, [dispatch, urlToQuery.href])

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain>
      <RecipesHeading>Vegan</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.uri} />
        ))}
      </RecipesSection>
    </RecipesMain>
  ) : null
}

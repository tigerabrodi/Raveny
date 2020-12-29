import { useEffect } from 'react'
import { useRavenyState, useRavenyDispatch } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Recipe } from 'components/Recipe'
import {
  RecipesHeading,
  RecipesMain,
  RecipesSection,
} from 'components/Recipe/styles'
import { FullPageSpinner } from 'components/Spinner'

/* Environment Variables */
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const HighProtein = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()

  const urlToQuery = new URL(apiURL!)

  /* Query Params */
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)
  urlToQuery.searchParams.append('q', 'chicken')
  urlToQuery.searchParams.append('diet', 'high-protein')
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
      <RecipesHeading>High Protein</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.uri} />
        ))}
      </RecipesSection>
    </RecipesMain>
  ) : null
}

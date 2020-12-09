import { useEffect } from 'react'
import { useRavenyContext } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Spinner } from 'components/Spinner'
import { Recipe } from 'components/Recipe'
import { RecipesWrapper } from 'components/Recipe/styles'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

export const LowCarb = () => {
  const { state, dispatch } = useRavenyContext()

  const urlToQuery = new URL(apiURL!)

  // Set query params
  urlToQuery.searchParams.append('app_key', apiKEY!)
  urlToQuery.searchParams.append('app_id', apiID!)
  urlToQuery.searchParams.append('q', 'meat')
  urlToQuery.searchParams.append('diet', 'low-carb')
  urlToQuery.searchParams.append('from', '0')
  urlToQuery.searchParams.append('to', '8')

  useEffect(() => {
    client({
      dispatch,
      url: urlToQuery.href,
      shouldFetchMultipleRecipes: true,
    })
  }, [dispatch, urlToQuery.href])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesWrapper>
      {state.recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesWrapper>
  ) : null
}

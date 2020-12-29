import { useEffect } from 'react'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { client } from 'utils/client'
import { Recipe } from 'components/Recipe'
import {
  RecipesMain,
  RecipesHeading,
  RecipesSection,
} from 'components/Recipe/styles'
import { FullPageSpinner } from 'components/Spinner'

/* URL */
const apiURL = process.env.REACT_APP_API_URL

export const LowCarb = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()

  const urlObject = new URL(apiURL!)

  /* Query Params */
  urlObject.searchParams.append('q', 'meat')
  urlObject.searchParams.append('diet', 'low-carb')

  const { href } = urlObject

  useEffect(() => {
    client({
      dispatch,
      href,
      shouldFetchMultipleRecipes: true,
    })
  }, [dispatch, href])

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain>
      <RecipesHeading>Low Carb</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.uri} />
        ))}
      </RecipesSection>
    </RecipesMain>
  ) : null
}

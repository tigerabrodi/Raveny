import { FullPageSpinner } from 'components/Spinner'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleRecipe } from 'utils/fetchSingleRecipe'
import { RecipeMain } from './styles'

type RouteParams = {
  recipeId: string
}

export const RecipeDetail = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()

  const { recipeId } = useParams<RouteParams>()

  useEffect(() => {
    fetchSingleRecipe(dispatch, recipeId)
  }, [recipeId, dispatch])

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return state.stateType === 'singleRecipeState' && state.recipe ? (
    <RecipeMain />
  ) : null
}

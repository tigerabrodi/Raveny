import { FullPageSpinner } from 'components/Spinner'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { fetchSingleRecipe } from 'utils/fetchSingleRecipe'
import {
  RecipeImage,
  Calories,
  RecipeImageSection,
  RecipeInfoSection,
  RecipeMain,
  RecipeName,
  Servings,
  ServingsHeading,
  ServingsSection,
  TimeHeading,
  TimeSection,
  Time,
  IngredientsList,
  IngredientsHeading,
  IngredientItem,
  IngredientText,
  IngredientImage,
} from './styles'

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
    <RecipeMain>
      <RecipeName> {state.recipe.label} </RecipeName>
      <RecipeInfoSection>
        <TimeSection>
          <TimeHeading>Cooking Time</TimeHeading>
          <Time>{Math.round(state.recipe.totalTime)} mins</Time>
        </TimeSection>

        <ServingsSection>
          <ServingsHeading>Servings</ServingsHeading>
          <Servings>{state.recipe.yield}</Servings>
        </ServingsSection>
      </RecipeInfoSection>
      <RecipeImageSection>
        <RecipeImage src={state.recipe.image} alt={state.recipe.label} />
        <Calories>{Math.round(state.recipe.calories)} Calories</Calories>
      </RecipeImageSection>
      <IngredientsList>
        <IngredientsHeading>Ingredients</IngredientsHeading>
        {state.recipe.ingredients.map(({ image, text }) => (
          <IngredientItem key={uuidv4()}>
            <IngredientImage src={image} alt={text} />
            <IngredientText>{text}</IngredientText>
          </IngredientItem>
        ))}
      </IngredientsList>
    </RecipeMain>
  ) : null
}

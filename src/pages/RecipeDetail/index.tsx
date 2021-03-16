import { FullPageSpinner } from 'components/Spinner'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { fetchSingleRecipe } from 'utils/fetchSingleRecipe'
import {
  RecipeImage,
  Calories,
  RecipeImageContainer,
  RecipeInfoContainer,
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
  IngredientsSection,
} from './styles'

type Params = {
  recipeId: string
}

export const RecipeDetail = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()
  const { recipeId } = useParams<Params>()

  useEffect(() => {
    fetchSingleRecipe(dispatch, recipeId)
  }, [recipeId, dispatch])

  if (state.status === 'loading') {
    return <FullPageSpinner loadingText="Loading recipe" />
  }

  return state.stateType === 'singleRecipeState' && state.recipe ? (
    <RecipeMain>
      <RecipeName> {state.recipe.label} </RecipeName>
      <RecipeInfoContainer>
        <TimeSection>
          <TimeHeading>Cooking Time</TimeHeading>
          <Time>{Math.round(state.recipe.totalTime)} mins</Time>
        </TimeSection>

        <ServingsSection>
          <ServingsHeading>Servings</ServingsHeading>
          <Servings>{state.recipe.yield}</Servings>
        </ServingsSection>
      </RecipeInfoContainer>
      <RecipeImageContainer>
        <RecipeImage src={state.recipe.image} alt="" />
        <Calories>{state.recipe.caloriesPerServing} Calories</Calories>
      </RecipeImageContainer>
      <IngredientsSection>
        <IngredientsHeading>Ingredients</IngredientsHeading>
        <IngredientsList>
          {state.recipe.ingredients.map(({ image, text }) => (
            <IngredientItem key={uuidv4()}>
              <IngredientImage src={image} alt="" />
              <IngredientText>{text}</IngredientText>
            </IngredientItem>
          ))}
        </IngredientsList>
      </IngredientsSection>
    </RecipeMain>
  ) : null
}

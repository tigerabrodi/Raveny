import { singleRecipeData } from 'mocks/data/single-recipe-data'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipeImage,
  RecipeInfoSection,
  RecipeMain,
  RecipeName,
  Servings,
  TotalTime,
  Calories,
  RecipeImageSection,
  IngredientsList,
  TimeSection,
  ServingsSection,
  ServingsHeading,
  TimeHeading,
  IngredientItem,
  IngredientImage,
  IngredientText,
  IngredientsHeading,
} from './styles'
import { RecipeDetail as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'pages/RecipeDetail',
}

const [recipe] = singleRecipeData

export const RecipeDetailPage = () => (
  <RecipeMain>
    <RecipeName> {recipe.label} </RecipeName>
    <RecipeInfoSection>
      <TimeSection>
        <TimeHeading>Cooking Time</TimeHeading>
        <TotalTime>{Math.round(recipe.totalTime)} mins</TotalTime>
      </TimeSection>

      <ServingsSection>
        <ServingsHeading>Servings</ServingsHeading>
        <Servings>{recipe.yield}</Servings>
      </ServingsSection>
    </RecipeInfoSection>
    <RecipeImageSection>
      <RecipeImage src={recipe.image} alt={recipe.label} />
      <Calories>{recipe.calories} Calories</Calories>
    </RecipeImageSection>
    <IngredientsList>
      <IngredientsHeading>Ingredients</IngredientsHeading>
      {recipe.ingredients.map(({ image, text }) => (
        <IngredientItem key={uuidv4()}>
          <IngredientImage src={image} alt={text} />
          <IngredientText>{text}</IngredientText>
        </IngredientItem>
      ))}
    </IngredientsList>
  </RecipeMain>
)

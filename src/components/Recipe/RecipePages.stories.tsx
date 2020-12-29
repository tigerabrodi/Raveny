import { recipesData } from 'data'
import { RecipesMain, RecipesSection, RecipesHeading } from './styles'
import { Recipe as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'pages/Recipes',
}

export const RecipesPage = () => (
  <RecipesMain>
    <RecipesHeading>456 Results</RecipesHeading>
    <RecipesSection>
      {recipesData.map((recipe) => (
        <RecipeComponent recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesSection>
  </RecipesMain>
)

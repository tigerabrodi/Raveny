import { recipesData } from 'data'
import { RecipesWrapper } from './styles'
import { Recipe as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'components/Recipe',
}

export const Recipe = () => (
  <RecipesWrapper>
    {recipesData.map((recipe) => (
      <RecipeComponent recipe={recipe} key={recipe.uri} />
    ))}
  </RecipesWrapper>
)

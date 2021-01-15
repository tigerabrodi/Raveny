import { singleRecipeData } from 'mocks/data/single-recipe-data'
import { RecipeMain } from './styles'
import { RecipeDetail as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'pages/RecipeDetail',
}

const [recipe] = singleRecipeData

export const RecipeDetailPage = () => <RecipeMain />

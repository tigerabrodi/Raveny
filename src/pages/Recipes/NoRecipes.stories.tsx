import { Link, NoRecipesTitle, NoRecipesFoundMain, SadFace } from './styles'
import { Recipes as RecipesPage } from '.'

export default {
  component: RecipesPage,
  title: 'pages/NoRecipesFound',
}

export const NoRecipesFound = () => (
  <NoRecipesFoundMain>
    <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
    <SadFace aria-hidden="true" />
    <Link to="/search">Back To Search</Link>
  </NoRecipesFoundMain>
)

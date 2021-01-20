import {
  NoRecipesButton,
  NoRecipesTitle,
  NoRecipesFoundMain,
  SadFace,
} from './styles'
import { Recipes as RecipesPage } from '.'

export default {
  component: RecipesPage,
  title: 'pages/NoRecipesFound',
}

export const NoRecipesFound = () => (
  <NoRecipesFoundMain>
    <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
    <SadFace role="img" title="A sad emoji." />
    <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
  </NoRecipesFoundMain>
)

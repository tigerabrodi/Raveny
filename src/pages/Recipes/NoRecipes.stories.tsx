import {
  NoRecipesButton,
  NoRecipesTitle,
  NoRecipesWrapper,
  SadFace,
} from './styles'
import { Recipes as RecipesPage } from '.'

export default {
  component: RecipesPage,
  title: 'pages/NoRecipesFound',
}

export const NoRecipesFound = () => (
  <NoRecipesWrapper>
    <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
    <SadFace role="img" aria-label="A sad face" />
    <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
  </NoRecipesWrapper>
)

import {
  InfoContainer,
  HomeMain,
  RecipeBookContainer,
  RecipeBook,
  InfoHeading,
  InfoLink,
  SearchIcon,
} from './styles'

export const Home = () => (
  <HomeMain>
    <InfoContainer>
      <InfoHeading>Find Your Dream Recipes and Enjoy.</InfoHeading>
      <InfoLink to="/search">
        Search
        <SearchIcon aria-hidden="true" />
      </InfoLink>
    </InfoContainer>
    <RecipeBookContainer>
      <RecipeBook role="img" aria-label="Recipe book" />
    </RecipeBookContainer>
  </HomeMain>
)

import {
  InfoSection,
  HomeMain,
  RecipeBookSection,
  RecipeBook,
  InfoHeading,
  InfoLink,
  SearchIcon,
} from './styles'

export const Home = () => {
  return (
    <HomeMain>
      <InfoSection>
        <InfoHeading>Find Your Dream Recipes and Enjoy.</InfoHeading>
        <InfoLink to="/search">
          Search
          <SearchIcon />
        </InfoLink>
      </InfoSection>
      <RecipeBookSection>
        <RecipeBook />
      </RecipeBookSection>
    </HomeMain>
  )
}

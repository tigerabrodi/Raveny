import { useState } from 'react'
import {
  InfoWrapper,
  HomeWrapper,
  ImageWrapper,
  RecipeBook,
  InfoText,
  InfoLink,
  SearchIcon,
} from './styles'

export const Home = () => {
  const [buttonHoverState, setButtonHoverState] = useState(false)
  return (
    <HomeWrapper>
      <InfoWrapper>
        <InfoText>Find Your Dream Recipes and Enjoy.</InfoText>
        <InfoLink
          to="/search"
          onMouseEnter={() => setButtonHoverState(!buttonHoverState)}
          onMouseLeave={() => setButtonHoverState(false)}
        >
          Search
          <SearchIcon isButtonHover={buttonHoverState} />
        </InfoLink>
      </InfoWrapper>
      <ImageWrapper>
        <RecipeBook />
      </ImageWrapper>
    </HomeWrapper>
  )
}

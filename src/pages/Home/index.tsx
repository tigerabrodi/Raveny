import React, { ReactElement, useState } from 'react'
import {
  InfoWrapper,
  HomeWrapper,
  ImageWrapper,
  RecipeBook,
  InfoText,
  InfoButton,
  SearchIcon,
} from './styles'

export const Home = (): ReactElement => {
  const [buttonHoverState, setButtonHoverState] = useState(false)
  return (
    <HomeWrapper>
      <InfoWrapper>
        <InfoText>Find Your Dream Recipes and Enjoy.</InfoText>
        <InfoButton
          to="/search"
          onMouseEnter={() => setButtonHoverState(!buttonHoverState)}
          onMouseLeave={() => setButtonHoverState(false)}
        >
          Search
          <SearchIcon isButtonHover={buttonHoverState} />
        </InfoButton>
      </InfoWrapper>
      <ImageWrapper>
        <RecipeBook />
      </ImageWrapper>
    </HomeWrapper>
  )
}

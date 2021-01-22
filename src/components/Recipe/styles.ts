import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import {
  infoLabelStyles,
  labelStyles,
  labelWrapperStyles,
  wrapperStyles,
} from 'styles'

/* Exported Styles for Pages with Recipes */
export const RecipesMain = styled.main`
  ${wrapperStyles}
  display: grid;
  row-gap: 1rem;
  grid-template-areas:
    'title'
    'recipes'
    'spinner';
  align-items: center;
  justify-items: center;
`

export const RecipesSection = styled.section`
  grid-area: recipes;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
`

export const RecipesHeading = styled.h1`
  grid-area: title;
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.Orange};
  text-shadow: 0.2rem 0.4rem 0.6rem black;
`

export const LoadMoreSpinnerSection = styled.section`
  grid-area: spinner;
  position: relative;
  width: 100%;
  height: 10rem;
`

export const IntersectingElementToLoadMore = styled.div`
  grid-area: spinner;
  background-color: transparent;
  visibility: hidden;
  width: 100%;
  height: 3.5rem;
`

/* Styles for Recipe Component */
export const RecipeWrapperLink = styled(Link)`
  text-decoration: none;
  height: 45rem;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  flex-direction: column;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  border-radius: 0.2rem;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    transform: translateY(-0.5rem) scale(1.01);
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.Orange};
    background-color: rgba(221, 114, 48, 0.1);
  }
  ${media.phone} {
    height: 50rem;
    flex-basis: 50%;
  }
  ${media.tablet} {
    flex-basis: 35%;
  }
  ${media.desktop} {
    flex-basis: 30%;
    max-width: 35%;
    height: 55rem;
  }
`

export const Title = styled.h1`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  text-align: center;
  font-size: 2.2rem;
  text-decoration: underline;
  ${media.phone} {
    font-size: 3rem;
  }
  ${media.tablet} {
    font-size: max(2rem, 1.8vw);
  }
`

export const Image = styled.img`
  box-shadow: 0 0.2rem 0.5rem black;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  border-radius: 0.2rem;
  height: 40%;
  max-width: 100%;
  ${media.phone} {
    max-width: 98%;
    height: 55%;
  }
  ${media.tablet} {
    max-width: 100%;
    height: 45%;
  }
  ${media.desktop} {
    height: 50%;
    max-width: 100%;
  }
`

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 25%;
`

export const Serving = styled.h2`
  ${infoLabelStyles}
`

export const Calories = styled.h2`
  ${infoLabelStyles}
`

export const HealthSection = styled.section`
  ${labelWrapperStyles}
`

export const DietSection = styled.section`
  ${labelWrapperStyles}
`

export const Diet = styled.h3`
  ${labelStyles}
`

export const Health = styled.h3`
  ${labelStyles}
`

export const CautionSection = styled.section`
  ${labelWrapperStyles}
`

export const Caution = styled.h3`
  ${labelStyles}
  color: ${({ theme }) => theme.colors.LightRed};
`

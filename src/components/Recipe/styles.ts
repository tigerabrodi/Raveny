import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import {
  focusStyles,
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

export const LoadMoreSpinnerContainer = styled.div`
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
export const RecipeWrapper = styled.article`
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
  transition: all 0.2s;
  background-color: transparent;
  ${media.phone} {
    height: 70rem;
    flex-basis: 50%;
  }
  ${media.tablet} {
    flex-basis: 35%;
    min-width: 46.5rem;
    height: 60rem;
    &:hover {
      transform: translateY(-0.1rem) scale(1.005);
      box-shadow: 0 0 0.2rem ${({ theme }) => theme.colors.Orange};
      background-color: rgba(221, 114, 48, 0.1);
    }
  }
  ${media.desktop} {
    flex-basis: 30%;
    max-width: 32%;
  }
`

export const Title = styled.h1`
  ${media.phone} {
    margin: 1rem 0;
  }
`

export const TitleLink = styled(Link)`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  text-align: center;
  font-size: clamp(1vw, 5.5vw, 3rem);
  text-decoration: underline;
  ${media.tablet} {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ${focusStyles};
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

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 35%;
  ${media.phone} {
    height: auto;
    min-height: 25%;
  }
`

export const Serving = styled.p`
  ${infoLabelStyles}
`

export const Calories = styled.p`
  ${infoLabelStyles}
`

export const HealthList = styled.ul`
  ${labelWrapperStyles}
  width: 72%;
  overflow: auto;
  ${focusStyles};
`

export const Health = styled.li`
  ${labelStyles}
`

export const CautionList = styled.ul`
  ${labelWrapperStyles}
  word-break: break-all;
  align-items: flex-start;
  width: auto;
  max-width: 25%;
`

export const Caution = styled.li`
  ${labelStyles}
  color: ${({ theme }) => theme.colors.LightRed};
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import {
  infoLabelStyles,
  labelStyles,
  labelWrapperStyles,
  wrapperStyles,
} from 'styles'

// Recipes Wrapper (Exported)
export const RecipesWrapper = styled.main`
  ${wrapperStyles}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
`

export const RecipeWrapper = styled(Link)`
  text-decoration: none;
  height: 45rem;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  border-radius: 2px;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    transform: translateY(-0.5rem) scale(1.01);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.Orange};
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
  filter: drop-shadow(2px 4px 6px black);
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Red};
  text-align: center;
  font-size: 2.2rem;
  ${media.phone} {
    font-size: 3rem;
  }
  ${media.tablet} {
    font-size: max(2rem, 1.8vw);
  }
`

export const Image = styled.img`
  box-shadow: 0 2px 5px black;
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  border-radius: 2px;
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

/* Info */
export const InfoWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 20%;
`

export const Serving = styled.h2`
  ${infoLabelStyles}
`

export const Calories = styled.h2`
  ${infoLabelStyles}
`

/* Labels */
export const LabelWrapper = styled.article`
  ${labelWrapperStyles}
`

export const DietLabel = styled.h3`
  ${labelStyles}
`

export const HealthLabel = styled.h3`
  ${labelStyles}
`

/* Caution */
export const CautionWrapper = styled.article`
  ${labelWrapperStyles}
`

export const CautionLabel = styled.h3`
  ${labelStyles}
  color: ${({ theme }) => theme.colors.Red};
`

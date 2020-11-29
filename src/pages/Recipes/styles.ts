import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { EmojiFrown } from '@styled-icons/bootstrap'
import {
  infoLabelStyles,
  labelStyles,
  labelWrapperStyles,
  wrapperStyles,
} from 'styles'

// Recipes
export const RecipesWrapper = styled.div`
  ${wrapperStyles}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
`

export const Recipe = styled(Link)`
  text-decoration: none;
  height: 40rem;
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
  }
`

export const Title = styled.h1`
  filter: drop-shadow(2px 4px 6px black);
  font-size: 3rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Red};
  text-align: center;
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

// Info labels
export const Serving = styled.span`
  ${infoLabelStyles}
`

export const Calories = styled.span`
  ${infoLabelStyles}
`

// Label Wrapper
export const LabelWrapper = styled.div`
  ${labelWrapperStyles}
`

export const DietLabel = styled.span`
  ${labelStyles}
`

export const HealthLabel = styled.span`
  ${labelStyles}
`

// Caution
export const CautionWrapper = styled.div`
  ${labelWrapperStyles}
`

export const CautionLabel = styled.span`
  ${labelStyles}
  color: ${({ theme }) => theme.colors.Red};
`

/*  No recipes found page */
export const NoRecipesWrapper = styled.div`
  grid-area: children;
  width: 100vw;
  min-height: calc(100vh - 18rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const NoRecipesTitle = styled.h1`
  filter: drop-shadow(2px 4px 6px black);
  text-align: center;
  color: ${({ theme }) => theme.colors.Orange};
  font-weight: bold;
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  ${media.phone} {
    font-size: 8rem;
  }
`

export const SadFace = styled(EmojiFrown)`
  fill: ${({ theme }) => theme.colors.Orange};
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.Brown});
  height: 40%;
`

export const NoRecipesButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  position: relative;
  color: ${({ theme }) => theme.colors.Orange};
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s;
  border: 2px solid ${({ theme }) => theme.colors.Orange};
  height: 5rem;
  width: 13rem;
  z-index: 10;
  ${media.phone} {
    font-size: 2rem;
    height: 8rem;
    width: 20rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.White};
  }
  &:hover::after {
    transform: scaleX(1);
    width: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.Orange};
    height: 100%;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.5s;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
    ${media.tablet} {
      transform: scale(0.9);
    }
  }
`

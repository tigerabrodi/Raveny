import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { Check2Square, EmojiFrown } from '@styled-icons/bootstrap'

// Recipes
export const RecipesWrapper = styled.div`
  min-height: calc(100vh - 18rem);
  width: 100%;
  grid-area: children;
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
    height: 45rem;
    flex-basis: 45%;
  }
  ${media.tablet} {
    flex-basis: 35%;
  }
  ${media.desktop} {
    flex-basis: 30%;
    max-width: 40%;
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
  height: 50%;
  max-width: 100%;
  ${media.phone} {
    height: 50%;
    max-width: 98%;
  }
  ${media.tablet} {
    height: 55%;
    max-width: 100%;
  }
  ${media.desktop} {
    height: 60%;
    max-width: 100%;
  }
`

export const Minutes = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const Serving = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const DietWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const DietLabel = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Green};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  margin-top: 0.5rem;
`

export const Check = styled(Check2Square)`
  color: ${({ theme }) => theme.colors.Green};
  height: 2rem;
`

export const Strong = styled.span`
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
`

// No recipes found page
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

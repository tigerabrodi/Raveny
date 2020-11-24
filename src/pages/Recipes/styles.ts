import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { Check2Square } from '@styled-icons/bootstrap'

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
  font-size: 3rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Red};
  text-align: center;
`

export const Image = styled.img`
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
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const Price = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const Serving = styled.span`
  font-size: 1.5rem;
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
  font-weight: bold;
`

// No Recipes
export const NoRecipesWrapper = styled.div`
  grid-area: children;
  width: 100vw;
  height: max(calc(100vh - 18rem), auto);
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { EmojiFrown } from '@styled-icons/bootstrap'

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

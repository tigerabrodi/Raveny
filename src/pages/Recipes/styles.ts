import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { media } from 'theme/media'
import { ReactComponent as SadIcon } from 'assets/sad.svg'
import { wrapperStyles } from 'styles'

export const NoRecipesFoundMain = styled.main`
  ${wrapperStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 18rem);
`

export const NoRecipesTitle = styled.h1`
  text-shadow: 0.2rem 0.4rem 0.6rem black;
  text-align: center;
  color: ${({ theme }) => theme.colors.Orange};
  font-weight: bold;
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  ${media.phone} {
    font-size: 8rem;
  }
`

export const SadFace = styled(SadIcon)`
  fill: ${({ theme }) => theme.colors.Orange};
  filter: drop-shadow(0 0 1rem ${({ theme }) => theme.colors.Brown});
  height: 45%;
  width: 60%;
  ${media.tablet} {
    height: 60%;
  }
`

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s;
  border: 0.2rem solid ${({ theme }) => theme.colors.Orange};
  height: 5rem;
  width: 13rem;
  ${media.phone} {
    font-size: 2rem;
    height: 8rem;
    width: 20rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    box-shadow: 0 0.3rem 0.5rem black;
    background-color: ${({ theme }) => theme.colors.Orange};
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  &:active {
    ${media.tablet} {
      transform: scale(0.95);
    }
  }
`

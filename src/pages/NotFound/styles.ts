import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { focusStyles } from 'styles'

export const NotFoundMain = styled.main`
  height: calc(100vh - 18rem);
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0 10rem;
  ${media.tablet} {
    padding: 0;
  }
`

export const NotFoundTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: clamp(3.8rem, 9vw, 12rem);
  color: ${({ theme }) => theme.colors.Orange};
  text-shadow: 0.2rem 0.4rem 0.6rem black;
`

export const NotFoundLink = styled(Link)`
  width: 16rem;
  font-size: 3.5rem;
  height: 7rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  border: 0.2rem solid ${({ theme }) => theme.colors.Orange};
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 0.2rem;
  box-shadow: 0 0.2rem 0.2rem black;
  ${media.tablet} {
    box-shadow: none;
    height: 11rem;
    width: 23rem;

    font-size: 5rem;
    border: 0.3rem solid ${({ theme }) => theme.colors.Orange};
    &:hover {
      background-color: ${({ theme }) => theme.colors.Orange};
      box-shadow: 0 0.2rem 0.2rem black;
      color: ${({ theme }) => theme.colors.White};
    }
  }
  ${focusStyles};
`

import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { media } from 'theme/media'

export const ErrorFallbackWrapper = styled.main`
  height: calc(100vh - 18rem);
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

export const Pre = styled.pre`
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.LightRed};
  font-size: 1.3rem;
  ${media.phone} {
    font-size: 2rem;
  }
  ${media.tablet} {
    font-size: 2.5rem;
  }
`

export const Text = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.Lora};
  text-align: center;
  color: ${({ theme }) => theme.colors.Orange};
  ${media.phone} {
    font-size: 4rem;
  }
  ${media.tablet} {
    font-size: 6rem;
  }
`

export const Link = styled(RouterLink)`
  cursor: pointer;
  height: 4.5rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  width: 15rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.Orange};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Orange};
  transition: all 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    background-color: ${({ theme }) => theme.colors.Orange};
    color: ${({ theme }) => theme.colors.White};
    box-shadow: 0 0.3rem 0.3rem black;
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  ${media.phone} {
    font-size: 1.9rem;
    height: 6rem;
    width: 20rem;
  }
`

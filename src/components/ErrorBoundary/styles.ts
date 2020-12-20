import styled from 'styled-components'
import { media } from 'theme/media'

// Wrapper
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

// Error Text
export const Pre = styled.pre`
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Red};
  font-size: 1rem;
  ${media.phone} {
    font-size: 2rem;
  }
  ${media.tablet} {
    font-size: 2.5rem;
  }
`

export const Title = styled.h1`
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

export const Button = styled.button`
  height: 4rem;
  font-size: 1.6rem;
  width: 15rem;
  border: 2px solid ${({ theme }) => theme.colors.Orange};
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Orange};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.Orange};
    color: ${({ theme }) => theme.colors.White};
  }
  ${media.phone} {
    font-size: 1.9rem;
    height: 6rem;
    width: 20rem;
  }
`

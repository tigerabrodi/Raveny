import styled, { keyframes } from 'styled-components'
import { HeartFill } from '@styled-icons/bootstrap'

export const FooterWrapper = styled.footer`
  height: 8rem;
  width: 100%;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.Orange};
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Orange};
  letter-spacing: 0.1rem;
`

const pulse = keyframes`
    from {
        transform: scale(1)
    } 

    to {
        transform: scale(1.2)
    }
`

export const HeartIcon = styled(HeartFill)`
  animation: ${pulse} 1s infinite alternate;
  height: 1.5rem;
  color: red;
`

export const TextLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 1.8rem;
  text-shadow: 0 0 0.5rem black;
  color: ${({ theme }) => theme.colors.Orange};
  text-decoration: none;
`

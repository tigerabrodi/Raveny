import styled from 'styled-components'
import { ReactComponent as HeartIcon } from 'assets/heart.svg'

export const FooterWrapper = styled.footer`
  height: 8rem;
  width: 100%;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.2rem solid ${({ theme }) => theme.colors.Orange};
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Orange};
  letter-spacing: 0.1rem;
`

export const Heart = styled(HeartIcon)`
  height: 2.2rem;
  width: 2.2rem;
  position: relative;
  top: 0.3rem;
`

export const TextLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 1.8rem;
  text-shadow: 0 0 0.5rem black;
  color: ${({ theme }) => theme.colors.LightOrange};
  text-decoration: underline;
`

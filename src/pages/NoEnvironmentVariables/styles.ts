import styled from 'styled-components'
import { media } from 'theme/media'

export const NoEnvVarWrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 18rem);
  position: relative;
`

export const TextWrapper = styled.div`
  height: 50%;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  ${media.tablet} {
    width: 80%;
  }
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.Orange};
  text-align: center;
  ${media.tablet} {
    text-align: left;
  }
`

export const FileSpan = styled.span`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
`

export const DocLink = styled.a`
  word-break: break-all;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.Orange};
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
  ${media.phone} {
    word-break: normal;
  }
  ${media.tablet} {
    font-size: 2.5rem;
  }
`

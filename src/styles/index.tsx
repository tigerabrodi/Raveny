import { Check2Square, ExclamationTriangleFill } from '@styled-icons/bootstrap'
import styled, { css } from 'styled-components'
import { media } from 'theme/media'

/* Common Styles */
export const labelWrapperStyles = css`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const labelStyles = css`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Green};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
  align-items: center;
  ${media.phone} {
    font-size: 1.2rem;
  }
  ${media.tablet} {
    font-size: 1.4rem;
  }
  ${media.desktop} {
    font-size: max(1.2rem, 0.8vw);
  }
`

export const infoLabelStyles = css`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
  ${media.desktop} {
    font-size: max(1.8rem, 1.1vw);
  }
`

export const wrapperStyles = css`
  grid-area: children;
  min-height: calc(100vh - 18rem);
  width: 100%;
`

/* Strong Tag */
export const Strong = styled.strong`
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  white-space: pre-wrap;
`

/* Icons */
export const Check = styled(Check2Square)`
  filter: drop-shadow(0 0.2rem 0.2rem black);
  color: ${({ theme }) => theme.colors.Green};
  height: 2rem;
  margin-left: 0.5rem;
`

export const Warn = styled(ExclamationTriangleFill)`
  filter: drop-shadow(0 0.2rem 0.2rem black);
  height: 2rem;
  color: ${({ theme }) => theme.colors.Red};
  margin-left: 0.5rem;
`

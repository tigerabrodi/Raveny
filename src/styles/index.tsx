import { Check2Square, ExclamationTriangleFill } from '@styled-icons/bootstrap'
import styled, { css } from 'styled-components'
import { media } from 'theme/media'

/* Common Styles */
export const labelWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const labelStyles = css`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Green};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
  ${media.desktop} {
    font-size: max(1.5rem, 0.8vw);
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
export const Strong = styled.span`
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  margin-right: 0.5rem;
`

/* Icons */
export const Check = styled(Check2Square)`
  filter: drop-shadow(0 2px 2px black);
  color: ${({ theme }) => theme.colors.Green};
  height: 2rem;
  margin-left: 0.5rem;
`

export const Warn = styled(ExclamationTriangleFill)`
  filter: drop-shadow(0 2px 2px black);
  height: 2rem;
  color: ${({ theme }) => theme.colors.Red};
  margin-left: 0.5rem;
`

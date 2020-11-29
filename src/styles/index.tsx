import { Check2Square, ExclamationTriangleFill } from '@styled-icons/bootstrap'
import styled, { css } from 'styled-components'

/* Common Styles */
export const labelWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const labelStyles = css`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Green};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
`

export const infoLabelStyles = css`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
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
  color: ${({ theme }) => theme.colors.Green};
  height: 2rem;
  margin-left: 0.5rem;
`

export const Warn = styled(ExclamationTriangleFill)`
  height: 2rem;
  color: ${({ theme }) => theme.colors.Red};
  margin-left: 0.5rem;
`

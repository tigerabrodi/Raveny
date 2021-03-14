import { ReactComponent as CheckIcon } from 'assets/check.svg'
import { ReactComponent as WarnIcon } from 'assets/warn.svg'
import styled, { css } from 'styled-components/macro'
import { media } from 'theme/media'

/* Common Styles */
export const labelWrapperStyles = css`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 89%;
  flex-wrap: wrap;
`

export const labelStyles = css`
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  white-space: pre-wrap;
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
    font-size: 1.2rem;
  }
`

export const infoLabelStyles = css`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  display: flex;
  margin: 0.5rem 0;
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  white-space: pre-wrap;
  ${media.desktop} {
    font-size: max(1.8rem, 1.1vw);
  }
`

export const wrapperStyles = css`
  grid-area: children;
  min-height: calc(100vh - 18rem);
  width: 100%;
`

export const focusStyles = css`
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.3rem solid ${({ theme }) => theme.colors.White};
    outline-offset: 0.3rem;
  }
`

/* Icons */
export const Check = styled(CheckIcon)`
  filter: drop-shadow(0 0.2rem 0.2rem black);
  height: 3rem;
  width: 2rem;
`

export const Warn = styled(WarnIcon)`
  filter: drop-shadow(0 0.2rem 0.2rem black);
  height: 3rem;
  width: 2rem;
  color: ${({ theme }) => theme.colors.LightRed};
  margin-left: 0.4rem;
`

/* Assistive Technology only text */
export const ATOnlyText = styled.span`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: pre-wrap;
`

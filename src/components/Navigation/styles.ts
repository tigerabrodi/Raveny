import styled, { css, keyframes } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { media } from 'theme/media'

/* Navigation Bar */
export const Nav = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: nav;
`
/* Logo */
export const LogoWrapper = styled(RouterLink)`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 60%;
  ${media.tablet} {
    width: 30%;
  }
`
export const LogoText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: max(3rem, 2vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Brown};
  margin: 0 1rem 0 2rem;
  ${media.phone} {
    margin: 0 1rem 0 4rem;
  }
`

/* Navigation Links */
const mobileNavVisible = keyframes`
    to {
            visibility: visible;
            opacity: 1;
            transform: translate(-50%, -50%);
            z-index: 10;
    }
`
export const LinksWrapper = styled.div<{ isToggled: boolean }>`
  position: fixed;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  opacity: 0;
  flex-direction: column;
  display: none;
  transition: all ease-out;
  ${({ isToggled }) =>
    isToggled &&
    css`
      display: flex;
      animation: ${mobileNavVisible} 0.3s forwards;
    `};
  ${media.tablet} {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    transition: none;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    visibility: visible;
    opacity: 1;
    z-index: 0;
  }
`

export const Link = styled(RouterLink)`
  font-size: 3rem;
  margin-top: 5rem;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Gray};
  transition: all 0.2s;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    transform: scale(1.05);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.Orange};
    height: 7px;
    opacity: 0;
    transition: all 0.2s;
  }
  &:hover::after {
    opacity: 1;
  }
  ${media.tablet} {
    font-size: max(1.7rem, 1.5vw);
    margin-top: 0;
    &::after {
      height: 3px;
      bottom: -4px;
    }
  }
`

/* Hamburger Menu */
type HamburgerMenuLineProps = {
  topToggled?: boolean
  hideMiddle?: boolean
  bottomToggled?: boolean
}

export const HamburgerMenuLine = styled.span<HamburgerMenuLineProps>`
  width: 55%;
  ${media.phone} {
    width: 44%;
  }
  background-color: ${({ theme }) => theme.colors.White};
  height: 15%;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.3s;
  ${({ hideMiddle }) =>
    hideMiddle &&
    css`
      display: none;
    `};
  ${({ topToggled }) =>
    topToggled &&
    css`
      transform: rotate(40deg) translateY(1rem);
    `};
  ${({ bottomToggled }) =>
    bottomToggled &&
    css`
      transform: rotate(-40deg) translateY(-1rem);
    `};
`
export const HamburgerMenuWrapper = styled.div<{ isToggled: boolean }>`
  cursor: pointer;
  position: relative;
  z-index: 10;
  width: 20%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-right: 1rem;
  &:hover span {
    ${({ isToggled }) =>
      !isToggled &&
      css`
        transform: translateY(-1px);
      `};
    background-color: ${({ theme }) => theme.colors.Orange};
  }
  ${media.tablet} {
    display: none;
  }
`
export const HamburgerMenuOverlay = styled.div<{ isToggled: boolean }>`
  visibility: hidden;
  background-color: black;
  opacity: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: all 0.3s;
  transform-origin: top;
  transform: scaleY(0);
  z-index: -10;
  ${({ isToggled }) =>
    isToggled &&
    css`
      visibility: visible;
      opacity: 0.95;
      transform: scaleY(1);
      z-index: 7;
    `};
  ${media.tablet} {
    display: none;
  }
`

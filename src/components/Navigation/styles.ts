import styled, { css, keyframes } from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/cooking-pan-food.svg'
import { media } from 'theme/media'

const animTopVisible = keyframes`
    to {
            visibility: visible;
            opacity: 1;
            transform: translate(-50%, -50%);
            z-index: 10;
    }
`

export const IntersectingElement = styled.div`
  height: 0.1rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  visibility: hidden;
  z-index: -1000;
`

export const Nav = styled.nav<{ shouldShowShadow: boolean }>`
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
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.Black};
  ${(props) =>
    props.shouldShowShadow &&
    css`
      box-shadow: 0 0.5rem 0.5rem black;
    `}
`

export const LogoIcon = styled(Logo)`
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 0.5rem;
  position: relative;
  ${media.tablet} {
    top: 0.3rem;
  }
`

export const LogoWrapper = styled.div`
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

export const LogoLink = styled(RouterLink)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: max(3rem, 2vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Orange};
  margin: 0 1rem 0 2rem;
  text-shadow: 0.2rem 0.4rem 0.6rem black;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-0.2rem);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  ${media.phone} {
    margin: 0 1rem 0 4rem;
  }
`

export const LinkSection = styled.div<{ isToggled: boolean }>`
  position: fixed;
  z-index: -10;
  top: 45%;
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
      animation: ${animTopVisible} 0.3s forwards;
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

const activeClassName = 'nav-link-active'
export const Link = styled(RouterLink).attrs({ activeClassName })`
  font-size: 2rem;
  margin-top: 5rem;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Gray};
  transition: all 0.2s;
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  text-align: center;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  &${`.${activeClassName}`}::after {
    color: ${({ theme }) => theme.colors.White};
    opacity: 1;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    transform: scale(1.05);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.Orange};
    opacity: 0;
    transition: all 0.2s;
    height: 0.3rem;
    ${media.tablet} {
      height: 0.7rem;
    }
  }
  &:hover::after {
    opacity: 1;
  }
  ${media.tablet} {
    font-size: max(1.7rem, 1.5vw);
    margin-top: 0;
    &::after {
      height: 0.3rem;
      bottom: -0.4rem;
    }
  }
`

type HamburgerMenuLineProps = {
  topToggled?: boolean
  hideMiddle?: boolean
  bottomToggled?: boolean
}

export const HamburgerMenuLine = styled.span<HamburgerMenuLineProps>`
  width: 55%;
  background-color: ${({ theme }) => theme.colors.White};
  height: 15%;
  margin-left: 0;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.3s;
  ${media.phone} {
    width: 44%;
  }
  ${({ hideMiddle }) =>
    hideMiddle &&
    css`
      display: none;
    `};
  ${({ topToggled }) =>
    topToggled &&
    css`
      transform: rotate(40deg) translateY(1rem);
      margin-left: 1.5rem;
    `};
  ${({ bottomToggled }) =>
    bottomToggled &&
    css`
      transform: rotate(-40deg) translateY(-1rem);
      margin-left: 1.5rem;
    `};
`

export const HamburgerMenuWrapper = styled.button<{ isToggled: boolean }>`
  border: none;
  background-color: transparent;
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
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  ${media.tablet} {
    display: none;
    &:hover span {
      ${({ isToggled }) =>
        !isToggled &&
        css`
          transform: translateY(-0.1rem);
        `};
      background-color: ${({ theme }) => theme.colors.Orange};
    }
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

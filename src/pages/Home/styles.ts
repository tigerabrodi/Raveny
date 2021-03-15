import styled, { keyframes } from 'styled-components/macro'
import { ReactComponent as RecipeBookSVG } from 'assets/recipe.svg'
import { ReactComponent as Search } from 'assets/search.svg'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { focusStyles, wrapperStyles } from 'styles'

export const HomeMain = styled.main`
  ${wrapperStyles}
  display: grid;
  grid-template-areas:
    'info'
    'image';
  align-items: center;
  justify-items: center;
  align-content: space-around;
  grid-template-rows: 1fr 1fr;
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'info image';
    align-content: stretch;
    justify-content: space-around;
    grid-template-rows: none;
    align-items: flex-start;
  }
  ${media.custom(1700)} {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const InfoContainer = styled.div`
  grid-area: info;
  width: 100%;
  height: 24rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.custom(400)} {
    height: 26rem;
  }
  ${media.phone} {
    height: 34rem;
    justify-content: space-between;
  }
  ${media.tablet} {
    height: 80%;
    justify-content: space-evenly;
  }
`

export const InfoHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-weight: 600;
  font-size: clamp(4rem, 11vw, 6.2rem);
  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  letter-spacing: 0.1rem;
  text-shadow: 0.2rem 0.4rem 0.6rem black;
  max-width: 13ch;
  ${media.phone} {
    max-width: 12ch;
    font-size: clamp(5.5rem, 11vw, 6.2rem);
  }
  ${media.tablet} {
    font-size: 7rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
  ${media.custom(1700)} {
    font-size: 12rem;
  }
`
export const InfoLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-weight: 600;
  font-size: 2.7rem;
  color: ${({ theme }) => theme.colors.Orange};
  border: 0.2rem solid ${({ theme }) => theme.colors.Orange};
  width: 15rem;
  height: 6rem;
  text-decoration: none;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  transition: all 0.4s;
  z-index: 5;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    box-shadow: 0 0.2rem 1rem black;
  }
  ${media.phone} {
    padding: 0;
    height: 7rem;
    width: 20rem;
    font-size: 3.5rem;
  }
  ${media.tablet} {
    width: 22rem;
    height: 8rem;
    font-size: 3.5rem;
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      transform-origin: left;
      transform: scaleX(0);
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.Orange};
      transition: all 0.4s;
    }
    &:hover::after {
      transform: scaleX(1);
    }
    &:hover svg {
      fill: ${({ theme }) => theme.colors.White};
    }
  }
  ${media.desktop} {
    width: 25rem;
    height: 9rem;
    font-size: 4.3rem;
  }
  ${media.custom(1700)} {
    width: 28rem;
    height: 11rem;
    font-size: 5rem;
  }
  ${focusStyles};
`

export const SearchIcon = styled(Search)`
  margin-left: 0.5rem;
  position: relative;
  top: 2%;
  transition: all 0.4s;
  fill: ${({ theme }) => theme.colors.Orange};
  height: 2.4rem;
  width: 2.4rem;
  ${media.phone} {
    height: 2.8rem;
    width: 2.8rem;
  }
  ${media.tablet} {
    margin-left: 1rem;
  }
  ${media.desktop} {
    height: 3.3rem;
    width: 3.3rem;
  }
  ${media.custom(1700)} {
    height: 4rem;
    width: 4rem;
  }
`

export const RecipeBookContainer = styled.div`
  grid-area: image;
  position: relative;
  height: 100%;
  width: 100%;
  ${media.tablet} {
    height: 85%;
    width: 95%;
  }
`

const pulse = keyframes`
    from {
    transform: translate(-50%, -50%);
    }
    to {
    transform: translate(-50%, -52%);
    }
`

export const RecipeBook = styled(RecipeBookSVG)`
  animation: ${pulse} 1s alternate infinite;
  filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.colors.Brown});
  position: absolute;
  transform: translate(-50%, -50%);
  height: 70%;
  top: 50%;
  left: 52%;
  ${media.phone} {
    left: 50%;
    height: 90%;
  }
  ${media.tablet} {
    width: 100%;
    top: 45%;
  }
  ${media.desktop} {
    width: min(90%, 90rem);
    top: 50%;
  }
`

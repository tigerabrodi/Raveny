import styled, { keyframes } from 'styled-components'
import { ReactComponent as RecipeBookSVG } from 'assets/recipe.svg'
import { ReactComponent as Search } from 'assets/search.svg'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { wrapperStyles } from 'styles'

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
`

export const InfoSection = styled.section`
  grid-area: info;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const InfoHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Lora};
  text-align: center;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
  font-size: clamp(4rem, 10vw, 6rem);
  text-shadow: 0.2rem 0.4rem 0.6rem black;
  ${media.custom(360)} {
    padding: 0 2rem;
  }
  ${media.custom(375)} {
    padding: 0 3rem;
  }
  ${media.custom(400)} {
    padding: 0 4rem;
  }
  ${media.tablet} {
    padding: 0;
    font-size: 7rem;
  }
  ${media.desktop} {
    font-size: min(5.5vw, 11rem);
  }
`
export const InfoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Orange};
  letter-spacing: 0.2rem;
  width: 17rem;
  height: 5rem;
  font-size: 2.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-weight: 600;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  transition: all 0.4s;
  z-index: 5;
  padding: 1rem 0;
  margin: 2rem 0;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    box-shadow: 0 0.2rem 1rem black;
  }
  ${media.phone} {
    margin: 1rem 0;
    width: 19rem;
    height: 6rem;
    font-size: 3rem;
    padding: 0;
  }
  ${media.tablet} {
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
    width: max(19rem, 15vw);
    height: max(6rem, 5vw);
    font-size: max(3rem, 2.3vw);
  }
`

export const SearchIcon = styled(Search)`
  margin-left: 0.5rem;
  position: relative;
  top: 2%;
  transition: all 0.4s;
  fill: ${({ theme }) => theme.colors.Orange};
  width: 2.5rem;
  height: 2.5rem;
  ${media.phone} {
    width: 2.8rem;
    height: 2.8rem;
  }
  ${media.desktop} {
    margin-left: 1rem;
    width: min(2.4vw, 3.5rem);
    height: min(2.4vw, 3.5rem);
  }
`

export const RecipeBookSection = styled.section`
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
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 70%;
  ${media.phone} {
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

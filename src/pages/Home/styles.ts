import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as RecipeBookSVG } from 'assets/recipe.svg'
import { Search } from '@styled-icons/bootstrap'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'

/* Home Header Wrapper */
export const HomeWrapper = styled.div`
    grid-area: children;
    display: grid;
    grid-template-areas:
        'info'
        'image';
    align-items: center;
    justify-items: center;
    align-content: space-around;
    height: calc(100vh - 18rem);
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

/* Text Area */
export const InfoWrapper = styled.div`
    grid-area: info;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const InfoText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.Lora};
    text-align: center;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.White};
    font-weight: 600;
    font-size: clamp(4rem, 10vw, 6rem);
    ${media.tablet} {
        font-size: 7rem;
    }
    ${media.desktop} {
        font-size: min(5.5vw, 11rem);
    }
`
export const InfoButton = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Orange};
    letter-spacing: 2px;
    width: 17rem;
    height: 5rem;
    font-size: 2.5rem;
    border: 2px solid ${({ theme }) => theme.colors.Orange};
    font-family: ${({ theme }) => theme.fonts.Lora};
    font-weight: 600;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    transition: all 0.2s;
    z-index: 5;
    padding: 1rem 0;
    margin: 1rem 0;
    &:active {
        transform: scale(0.95);
    }
    &:hover {
        color: ${({ theme }) => theme.colors.White};
        box-shadow: 0 5px 10px black;
    }
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
        transition: all 0.2s ease-out;
    }
    &:hover::after {
        transform: scaleX(1);
    }
    ${media.phone} {
        width: 19rem;
        height: 6rem;
        font-size: 3rem;
        padding: 0;
    }
    ${media.desktop} {
        width: max(19rem, 15vw);
        height: max(6rem, 5vw);
        font-size: max(3rem, 2.3vw);
    }
`

export const SearchIcon = styled(Search)<{ isButtonHover: boolean }>`
    height: 2.1rem;
    margin-left: 0.5rem;
    position: relative;
    top: 2%;
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.Orange};
    ${(props) =>
        props.isButtonHover &&
        css`
            color: ${({ theme }) => theme.colors.White};
        `};
    ${media.phone} {
        height: 2.5rem;
    }
    ${media.desktop} {
        height: max(2.5rem, 1.7vw);
    }
`

/* Image Area */
export const ImageWrapper = styled.div`
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
    filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.Brown});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 40%;
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

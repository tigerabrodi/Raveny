import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as PanSVG } from 'assets/fried.svg'
import { Search } from '@styled-icons/bootstrap'
import { media } from 'theme/media'

/* Wrappers */
export const SearchWrapper = styled.div`
    grid-area: children;
    height: calc(100vh - 18rem);
    width: 100vw;
`

export const SearchInnerWrapper = styled.div`
    display: grid;
    grid-template-areas:
        'title'
        'search';
    justify-items: center;
    align-items: center;
    position: relative;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 98%;
`

/* Title */
export const Title = styled.label`
    font-size: min(6rem, 9vw);
    font-family: ${({ theme }) => theme.fonts.Lora};
    color: ${({ theme }) => theme.colors.Orange};
    font-weight: 700;
    letter-spacing: 1px;
    ${media.tablet} {
        font-size: max(3.5rem, 4vw);
    }
`

export const TitleWrapper = styled.div`
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    ${media.tablet} {
        border-bottom: 3px solid ${({ theme }) => theme.colors.Orange};
    }
    ${media.desktop} {
        width: 90%;
    }
`

const cook = keyframes`
    from {
    transform: translateY(-3px) translateX(-2px) rotate(8deg) scale(-1, 1);
    }

    to {
    transform: translate(0) scale(-1, 1);
    }
`

export const Pan = styled(PanSVG)`
    display: none;
    ${media.tablet} {
        position: relative;
        width: 8rem;
        height: 10rem;
        transform: scale(-1, 1);
        animation: ${cook} 1s infinite alternate;
        display: block;
        margin-right: 2rem;
        width: max(7rem, 7.5vw);
        height: max(9rem, 9.5vw);
    }
`

/* Search */
export const SearchInputWrapper = styled.div`
    height: 32%;
    bottom: 0;
    width: 95%;

    grid-area: search;
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${media.tablet} {
        height: 25%;
        width: 98%;
        bottom: 10%;
    }
    ${media.desktop} {
        width: 80%;
    }
`

export const SearchInput = styled.input`
    font-size: 1.7rem;
    position: relative;
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.Montserrat};
    color: ${({ theme }) => theme.colors.Gray};
    background-color: ${({ theme }) => theme.colors.Black};
    border: 2px solid ${({ theme }) => theme.colors.Brown};
    transition: all 0.3s;
    padding-left: 1rem;
    ${media.phone} {
        padding-left: 2rem;
        font-size: 2rem;
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.Gray};
    }
    &:focus {
        outline: none;
        box-shadow: 0 5px 5px black;
    }
    ${media.tablet} {
        width: 100%;
    }
`

export const SearchButton = styled.button<{ isFocus: boolean }>`
    left: 85%;
    width: 30%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none;
    margin-left: 0;
    border-left: 2px solid #854d27;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.8s;
    height: 100%;
    ${media.phone} {
        left: 90%;
        width: 20%;
    }
    ${media.tablet} {
        width: 10%;
        border: 2px solid ${({ theme }) => theme.colors.Brown};
        margin-left: 3px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0, 0);
    }
    &:hover {
        box-shadow: 0 5px 5px black;
    }
    &:hover svg {
        color: ${({ theme }) => theme.colors.White};
        transform: scale(1.1);
    }
    &:hover::after {
        transform: scaleY(1);
    }
    &::after {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.colors.Orange};
        height: 100%;
        width: 100%;
        transform-origin: top;
        transform: scaleY(0);
        transition: all 0.5s;
    }
    &:focus {
        outline: none;
    }
    &:active {
        box-shadow: none;
        transform: scale(0.9);
    }
    ${(props) =>
        props.isFocus &&
        css`
            box-shadow: 0 5px 5px black;
            transition: all 0.3s;
        `};
`

export const SearchIcon = styled(Search)`
    height: 3rem;
    position: relative;
    z-index: 5;
    color: ${({ theme }) => theme.colors.Orange};
    transition: all 0.5s;
`

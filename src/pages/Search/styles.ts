import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as PanSVG } from 'assets/fried.svg'
import { Search } from '@styled-icons/bootstrap'

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
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.Lora};
    color: ${({ theme }) => theme.colors.Orange};
    font-weight: 700;
    letter-spacing: 1px;
`

export const TitleWrapper = styled.div`
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.Orange};
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
    position: relative;
    width: 8rem;
    height: 10rem;
    margin-left: 2rem;
    transform: scale(-1, 1);
    animation: ${cook} 1s infinite alternate;
`

/* Search */
export const SearchInputWrapper = styled.div`
    grid-area: search;
    position: relative;
    bottom: 10%;
    width: 98%;
    align-self: flex-start;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const SearchInput = styled.input`
    position: relative;
    height: 100%;
    width: 90%;
    padding-left: 2rem;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.Montserrat};
    color: ${({ theme }) => theme.colors.Gray};
    background-color: ${({ theme }) => theme.colors.Black};
    border: 2px solid ${({ theme }) => theme.colors.Brown};
    transition: all 0.3s;
    &::placeholder {
        color: ${({ theme }) => theme.colors.Gray};
    }
    &:focus {
        outline: none;
        box-shadow: 0 5px 5px black;
    }
`

export const SearchButton = styled.button<{ isFocus: boolean }>`
    cursor: pointer;
    width: 10%;
    border: 2px solid ${({ theme }) => theme.colors.Brown};
    height: 100%;
    margin-left: 3px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    transition: all 0.8s;
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

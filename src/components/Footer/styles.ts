import styled, { keyframes } from 'styled-components'
import { HeartFill } from '@styled-icons/bootstrap'

export const Wrapper = styled.div`
    height: 8rem;
    width: 100vw;
    background-color: transparent;
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid ${({ theme }) => theme.colors.Orange};
`

export const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.Montserrat};
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.Brown};
    letter-spacing: 1px;
`

const pulse = keyframes`
    from {
        transform: scale(1)
    } 

    to {
        transform: scale(1.2)
    }
`

export const HeartIcon = styled(HeartFill)`
    animation: ${pulse} 1s infinite alternate;
    height: 1.5rem;
    color: red;
`

export const TextLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.Lora};
    font-size: 1.8rem;
    text-shadow: 0 0 5px black;
    color: ${({ theme }) => theme.colors.Orange};
    text-decoration: none;
`

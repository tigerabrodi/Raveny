import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.Black};
    #root {
      display: grid;
      grid-template-areas:
        'nav'
        'children'
        'footer';
      width: 100vw;
      max-width: 100%;
    }
    &::-webkit-scrollbar {
      width: 1.2rem;
      background-color: ${({ theme }) => theme.colors.Black};
    }
    &::-webkit-scrollbar-track {
      border-radius: 0.3rem;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.Orange};
      border: 0.1rem solid ${({ theme }) => theme.colors.Brown};
    }
  }
`

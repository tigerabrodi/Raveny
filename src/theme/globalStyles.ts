import * as styled from 'styled-components'

export const GlobalStyle = styled.createGlobalStyle`
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
      /**
         * PROBLEM: This is needed because on some browsers, when a vertical scroll appears, a horizontal scroll also appears, which was the "bug" I initially had.
         * SEE resource: https://caniuse.com/viewport-units In tab known issues, point three, it is talked about the scroll issue for browsers.
         * SEE solution: https://stackoverflow.com/a/23367686/11627166
         * CONVENTION Because of this, in order for the width to be 100 viewport width, I use 100% on the wrapper, aka the children of the #root's grid.
         */
      width: 100vw;
      max-width: 100%;
    }
  }
`

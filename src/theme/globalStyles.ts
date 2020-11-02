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
        }
    }
`

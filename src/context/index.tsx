import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'theme/globalStyles'
import { theme } from 'theme/theme'

type AppProviderProps = {
    children: ReactNode
}

export const AppProviders: FunctionComponent<AppProviderProps> = ({
    children,
}: AppProviderProps): ReactElement => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>{children}</Router>
    </ThemeProvider>
)

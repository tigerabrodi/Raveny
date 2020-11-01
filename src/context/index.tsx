import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'theme/globalStyles'
import { theme } from 'theme/theme'
import { Navigation } from 'components/Navigation'

export const AppProviders: FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
            <Navigation />
            {children}
        </Router>
    </ThemeProvider>
)

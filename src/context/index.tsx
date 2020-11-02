import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'theme/globalStyles'
import { theme } from 'theme/theme'

export const AppProviders: FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>{children}</Router>
    </ThemeProvider>
)

import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'theme/globalStyles'
import { theme } from 'theme/theme'
import { ErrorBoundaryProvider } from 'components/ErrorBoundary'
import { YummlyProvider } from './YummlyContext'

export const AppProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundaryProvider>
      <Router>
        <YummlyProvider>{children}</YummlyProvider>
      </Router>
    </ErrorBoundaryProvider>
  </ThemeProvider>
)

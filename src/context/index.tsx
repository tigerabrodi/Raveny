import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'theme/globalStyles'
import { theme } from 'theme/theme'
import { ErrorBoundaryProvider } from 'components/ErrorBoundary'
import { RavenyProvider } from './RavenyContext'

export const AppProviders = ({
  children,
}: {
  children: ReactNode
}): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundaryProvider>
      <Router>
        <RavenyProvider>{children}</RavenyProvider>
      </Router>
    </ErrorBoundaryProvider>
  </ThemeProvider>
)

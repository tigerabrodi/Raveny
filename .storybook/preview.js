import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/theme/globalStyles'
import { theme } from '../src/theme/theme'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Navigation />
                <Story />
                <Footer />
            </Router>
        </ThemeProvider>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
}

if (typeof global.process === 'undefined') {
    const { worker } = require('../src/mocks/browser')
    worker.start()
}

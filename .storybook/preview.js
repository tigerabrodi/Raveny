import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/theme/globalStyles'
import { theme } from '../src/theme/theme'

if (typeof global.process === 'undefined') {
    const { worker } = require('../src/mocks/browser')
    worker.start()
}

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        </>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
}

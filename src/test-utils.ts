import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppProviders } from 'context'
import { FunctionComponent, ReactElement } from 'react'

const render = (ui: ReactElement, { route = '/', ...renderOptions } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...rtlRender(ui, {
      wrapper: AppProviders as FunctionComponent,
      ...renderOptions,
    }),
  }
}

export * from '@testing-library/react'
export { render, userEvent }

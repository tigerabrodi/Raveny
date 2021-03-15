import '@testing-library/jest-dom/extend-expect'
import { setupIntersectionObserverMock } from 'test/intersectionObserverMock'
import { configure } from '@testing-library/react'
import { integrationServer } from 'mocks/server'

configure({ defaultHidden: true })

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

setupIntersectionObserverMock()

beforeAll(() => integrationServer.listen({ onUnhandledRequest: 'error' }))
afterAll(() => integrationServer.close())
afterEach(() => integrationServer.resetHandlers())

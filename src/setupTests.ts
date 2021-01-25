import '@testing-library/jest-dom/extend-expect'
import { setupIntersectionObserverMock } from 'test/intersectionObserverMock'
import { configure } from '@testing-library/react'
import { server } from 'mocks/server'

configure({ defaultHidden: true })

setupIntersectionObserverMock()

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

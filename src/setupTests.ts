import '@testing-library/jest-dom/extend-expect'
import { setupIntersectionObserverMock } from 'test/intersectionObserverMock'
import { configure } from '@testing-library/react'
import { integrationServer } from 'mocks/server'

configure({ defaultHidden: true })

setupIntersectionObserverMock()

beforeAll(() => integrationServer.listen({ onUnhandledRequest: 'error' }))
afterAll(() => integrationServer.close())
afterEach(() => integrationServer.resetHandlers())

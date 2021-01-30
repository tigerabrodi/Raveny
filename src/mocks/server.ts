import { setupServer } from 'msw/node'
import { integrationHandlers } from './handlers'
// This configures a Service Worker with the given request handlers.
export const integrationServer = setupServer(...integrationHandlers)

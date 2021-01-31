import { render, screen, userEvent } from 'test-utils'
import App from 'App'
import { waitForElementToBeRemoved } from '@testing-library/react'
import { getWithinElementRoleInDocument } from 'utils/functions'

describe('searching recipes', () => {
  describe('calories', () => {
    test('should show low calories response', async () => {
      render(<App />, { route: '/search' })
      userEvent.clear(screen.getByLabelText(/max calories/i))
      userEvent.type(screen.getByLabelText(/max calories/i), '1500')
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')

      userEvent.click(
        screen.getByRole('button', { name: /search for recipes/i })
      )

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      const recipe = screen.getByRole('link', { name: /low calories/i })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /low calories/i,
        level: 1,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /calories: 77/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /servings: 4/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /FODMAP/i,
        level: 3,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Vegetarian/i,
        level: 3,
      })
    })
  })
})

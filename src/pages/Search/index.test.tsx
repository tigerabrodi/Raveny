import { render, screen, userEvent } from 'test-utils'
import {
  getByRoleInDocument,
  getWithinElementRoleInDocument,
  queryByRoleNotInDocument,
} from 'utils/functions'
import App from 'App'

describe('search', () => {
  test('should validate query input', () => {
    render(<App />, { route: '/search' })

    queryByRoleNotInDocument('alert', {
      name: /Please enter at least three characters./i,
    })

    userEvent.click(screen.getByRole('button', { name: /search for recipes/i }))

    getByRoleInDocument('alert', {
      name: /Please enter at least three characters./i,
    })
  })

  test('should validate calories', () => {
    render(<App />, { route: '/search' })

    getByRoleInDocument('alert', { name: /Length of search value is invalid/i })

    userEvent.type(screen.getByLabelText(/Search recipes/i), 'chicken')

    getByRoleInDocument('alert', { name: /Length of search value is valid/i })

    userEvent.clear(screen.getByLabelText(/Min Calories/i))

    userEvent.type(screen.getByLabelText(/Min Calories/i), '10000')

    queryByRoleNotInDocument('alert', {
      name: /Minimum Calories must be less than Maximum Calories./i,
    })

    userEvent.click(screen.getByRole('button', { name: /Search for recipes/i }))

    getByRoleInDocument('alert', {
      name: /Minimum Calories must be less than Maximum Calories./i,
    })
  })

  describe('exclude', () => {
    test('should validate characters', () => {
      render(<App />, { route: '/search' })

      queryByRoleNotInDocument('alert', {
        name: /Please enter at least 3 characters for the ingredient to be excluded./i,
      })

      userEvent.click(
        screen.getByRole('button', { name: /Add ingredient to be excluded/i })
      )

      getByRoleInDocument('alert', {
        name: /Please enter at least 3 characters for the ingredient to be excluded./i,
      })

      userEvent.type(screen.getByLabelText(/Exclude ingredients/i), 'chicken')

      userEvent.click(
        screen.getByRole('button', { name: /Add ingredient to be excluded/i })
      )

      getWithinElementRoleInDocument(screen.getByRole('listitem'), 'heading', {
        name: /chicken/i,
        level: 2,
      })

      userEvent.click(
        screen.getByRole('button', {
          name: /Remove ingredient from being excluded/i,
        })
      )

      queryByRoleNotInDocument('listitem')
    })

    test('should validate existing ingredients', () => {
      render(<App />, { route: '/search' })

      userEvent.type(screen.getByLabelText(/Exclude ingredients/i), 'chicken')

      userEvent.type(screen.getByLabelText(/Exclude ingredients/i), '{enter}')

      getWithinElementRoleInDocument(screen.getByRole('listitem'), 'heading', {
        name: /chicken/i,
        level: 2,
      })

      queryByRoleNotInDocument('alert', {
        name: /Please enter at least 3 characters for the ingredient to be excluded./i,
      })

      userEvent.type(screen.getByLabelText(/Exclude ingredients/i), 'chicken')

      userEvent.type(screen.getByLabelText(/Exclude ingredients/i), '{enter}')

      getByRoleInDocument('alert', {
        name: 'Ingredient "Chicken" is already being included.',
      })
    })
  })
})

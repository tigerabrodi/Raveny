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

    test('should show high calories response', async () => {
      render(<App />, { route: '/search' })
      userEvent.clear(screen.getByLabelText(/min calories/i))
      userEvent.type(screen.getByLabelText(/min calories/i), '1500')
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')

      userEvent.click(
        screen.getByRole('button', { name: /search for recipes/i })
      )

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      const recipe = screen.getByRole('link', { name: /high calories/i })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /high calories/i,
        level: 1,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /calories: 2331/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /servings: 1/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /fat-heavy/i,
        level: 3,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Vegetarian/i,
        level: 3,
      })
    })
  })
  describe('exclude', () => {
    test('should show response for one ingredient', async () => {
      render(<App />, { route: '/search' })
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')
      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'chicken')

      userEvent.click(
        screen.getByRole('button', { name: /Add ingredient to be excluded/i })
      )

      userEvent.click(
        screen.getByRole('button', { name: /search for recipes/i })
      )

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      const recipe = screen.getByRole('link', {
        name: /exclude one ingredient/i,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /exclude one ingredient/i,
        level: 1,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /calories: 271/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /servings: 6/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Low-Fat/i,
        level: 3,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Sugar-Conscious/i,
        level: 3,
      })
    })

    test('should show response for two ingredients', async () => {
      render(<App />, { route: '/search' })
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')
      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'chicken')

      userEvent.click(
        screen.getByRole('button', { name: /Add ingredient to be excluded/i })
      )

      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'meat')

      userEvent.click(
        screen.getByRole('button', { name: /Add ingredient to be excluded/i })
      )

      userEvent.click(
        screen.getByRole('button', { name: /search for recipes/i })
      )

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      const recipe = screen.getByRole('link', {
        name: /exclude two ingredients/i,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /exclude two ingredients/i,
        level: 1,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /calories: 149/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /servings: 6/i,
        level: 2,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Low-Carb/i,
        level: 3,
      })

      getWithinElementRoleInDocument(recipe, 'heading', {
        name: /Vegetarian/i,
        level: 3,
      })
    })
  })
})

import { render, screen, userEvent } from 'test-utils'
import App from 'App'
import { waitForElementToBeRemoved } from '@testing-library/react'
import { getByRoleInDocument } from 'utils/functions'

describe('searching recipes', () => {
  describe('calories', () => {
    test('should return low calories response', async () => {
      render(<App />, { route: '/search' })
      userEvent.clear(screen.getByLabelText(/max calories/i))
      userEvent.type(screen.getByLabelText(/max calories/i), '1500')
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')

      userEvent.click(screen.getByRole('button', { name: /search/i }))

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      getByRoleInDocument('link', {
        name: /low calories/i,
      })

      expect(screen.getByText(/77 calories/i)).toBeInTheDocument()

      expect(screen.getByText(/4 servings/i)).toBeInTheDocument()

      getByRoleInDocument('listitem', {
        name: /FODMAP/i,
      })

      getByRoleInDocument('listitem', {
        name: /Vegetarian/i,
      })
    })

    test('should return high calories response', async () => {
      render(<App />, { route: '/search' })
      userEvent.clear(screen.getByLabelText(/min calories/i))
      userEvent.type(screen.getByLabelText(/min calories/i), '1500')
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')

      userEvent.click(screen.getByRole('button', { name: /search/i }))

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      getByRoleInDocument('link', {
        name: /high calories/i,
      })

      expect(screen.getByText(/2331 calories/i)).toBeInTheDocument()

      expect(screen.getByText(/1 servings/i)).toBeInTheDocument()

      getByRoleInDocument('listitem', {
        name: /fat-heavy/i,
      })

      getByRoleInDocument('listitem', {
        name: /Vegetarian/i,
      })
    })
  })

  describe('exclude', () => {
    test('should return response for one ingredient', async () => {
      render(<App />, { route: '/search' })
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')
      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'chicken')

      userEvent.click(
        screen.getByRole('button', { name: /Exclude ingredient/i })
      )

      userEvent.click(screen.getByRole('button', { name: /search/i }))

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      getByRoleInDocument('link', {
        name: /exclude one ingredient/i,
      })

      expect(screen.getByText(/271 calories/i)).toBeInTheDocument()

      expect(screen.getByText(/6 servings/i)).toBeInTheDocument()

      getByRoleInDocument('listitem', {
        name: /Low-Fat/i,
      })

      getByRoleInDocument('listitem', {
        name: /Sugar-Conscious/i,
      })
    })

    test('should return response for two ingredients', async () => {
      render(<App />, { route: '/search' })
      userEvent.type(screen.getByLabelText(/search recipes/i), 'blah')
      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'chicken')

      userEvent.click(
        screen.getByRole('button', { name: /Exclude ingredient/i })
      )

      userEvent.type(screen.getByLabelText(/exclude ingredients/i), 'meat')

      userEvent.click(
        screen.getByRole('button', { name: /Exclude ingredient/i })
      )

      userEvent.click(screen.getByRole('button', { name: /search/i }))

      await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

      getByRoleInDocument('link', {
        name: /exclude two ingredients/i,
      })

      expect(screen.getByText(/149 calories/i)).toBeInTheDocument()

      expect(screen.getByText(/6 servings/i)).toBeInTheDocument()

      getByRoleInDocument('listitem', {
        name: /Low-Carb/i,
      })

      getByRoleInDocument('listitem', {
        name: /Vegetarian/i,
      })
    })
  })

  test('should return meat response', async () => {
    render(<App />, { route: '/search' })

    userEvent.type(screen.getByLabelText(/search recipes/i), 'meat')

    userEvent.click(screen.getByRole('button', { name: /Search/i }))

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

    getByRoleInDocument('link', {
      name: /meat/i,
    })

    expect(screen.getByText(/618 calories/i)).toBeInTheDocument()

    expect(screen.getByText(/6 servings/i)).toBeInTheDocument()

    getByRoleInDocument('listitem', {
      name: /sulfites/i,
    })

    getByRoleInDocument('listitem', {
      name: /low-carb/i,
    })

    getByRoleInDocument('listitem', {
      name: /Sugar-Conscious/i,
    })
  })

  test('should return vegan response', async () => {
    render(<App />)

    userEvent.click(screen.getByRole('link', { name: 'Vegan' }))

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

    getByRoleInDocument('heading', { name: 'Vegan' })

    getByRoleInDocument('link', {
      name: /veganrecipe/i,
    })

    expect(screen.getByText(/11 calories/i)).toBeInTheDocument()

    expect(screen.getByText(/2 servings/i)).toBeInTheDocument()

    getByRoleInDocument('listitem', {
      name: /sulfites/i,
    })

    getByRoleInDocument('listitem', {
      name: /peanut-free/i,
    })
  })

  test('should return low carb response', async () => {
    render(<App />)

    userEvent.click(screen.getByRole('link', { name: 'Low Carb' }))

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

    getByRoleInDocument('heading', { name: 'Low Carb' })

    getByRoleInDocument('link', {
      name: /low carb recipe/i,
    })

    expect(screen.getByText(/572 calories/i)).toBeInTheDocument()

    expect(screen.getByText(/4 servings/i)).toBeInTheDocument()

    getByRoleInDocument('listitem', {
      name: /fodmap/i,
    })

    getByRoleInDocument('listitem', {
      name: /low-carb/i,
    })

    getByRoleInDocument('listitem', {
      name: /Sugar-Conscious/i,
    })
  })

  test('should return high protein response', async () => {
    render(<App />)

    userEvent.click(screen.getByRole('link', { name: 'High Protein' }))

    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

    getByRoleInDocument('heading', { name: 'High Protein' })

    getByRoleInDocument('link', {
      name: /high protein recipe/i,
    })

    expect(screen.getByText(/436 calories/i)).toBeInTheDocument()

    expect(screen.getByText(/4 servings/i)).toBeInTheDocument()

    getByRoleInDocument('listitem', {
      name: /sulfites/i,
    })

    getByRoleInDocument('listitem', {
      name: /low-carb/i,
    })

    getByRoleInDocument('listitem', {
      name: /Tree-Nut-Free/i,
    })
  })
})

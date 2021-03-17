import App from 'App'
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'test/utils'
import { getByRoleInDocument } from 'utils/functions'

test('should allow simple user search flow', async () => {
  render(<App />)

  getByRoleInDocument('link', { name: /raveny/i })
  getByRoleInDocument('link', { name: /vegan/i })
  getByRoleInDocument('link', { name: /high protein/i })
  getByRoleInDocument('link', { name: /low carb/i })

  getByRoleInDocument('heading', {
    name: /Find Your Dream Recipes and Enjoy./i,
    level: 1,
  })

  getByRoleInDocument('link', { name: /tiger abrodi/i })

  userEvent.click(screen.getAllByRole('link', { name: /search/i })[1])

  expect(window.location.pathname).toBe('/search')

  getByRoleInDocument('heading', { name: /Start Cooking Today!/i, level: 1 })

  userEvent.type(screen.getByLabelText(/Search recipes/i), 'chicken')

  userEvent.click(screen.getByRole('button', { name: /Search/i }))

  await waitForElementToBeRemoved(() => screen.queryByText(/loading recipes/i))

  expect(window.location.pathname).toBe('/recipes')

  getByRoleInDocument('heading', { name: /120230 Results/i, level: 1 })

  const firstRecipeLink = screen.getByRole('link', { name: /Chicken Vesuvio/i })

  expect(screen.getByText(/1057 calories/i)).toBeInTheDocument()

  expect(screen.getByText(/4 servings/i)).toBeInTheDocument()

  getByRoleInDocument('listitem', {
    name: /low-carb/i,
  })

  getByRoleInDocument('listitem', {
    name: /sulfites/i,
  })

  getByRoleInDocument('listitem', {
    name: /peanut-free/i,
  })

  getByRoleInDocument('listitem', {
    name: /Tree-Nut-Free/i,
  })

  userEvent.click(firstRecipeLink)

  await waitForElementToBeRemoved(() => screen.queryByText(/loading recipe/i))

  expect(window.location.pathname).toBe(
    '/recipe/b79327d05b8e5b838ad6cfd9576b30b6'
  )

  getByRoleInDocument('heading', { name: /Chicken Vesuvio/i, level: 1 })

  getByRoleInDocument('heading', { name: /cooking Time 60 mins/i, level: 2 })

  getByRoleInDocument('heading', { name: /Servings 4/i, level: 2 })

  expect(screen.getByText(/1057 calories/i)).toBeInTheDocument()

  getByRoleInDocument('heading', { name: /ingredients/i, level: 2 })

  const firstListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[0]

  expect(within(firstListItem).getByText(/salt/i)).toBeInTheDocument()

  const secondListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[1]

  expect(within(secondListItem).getByText(/frozen peas/i)).toBeInTheDocument()
})

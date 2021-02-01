import App from 'App'
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'test/utils'
import {
  getByRoleInDocument,
  getWithinElementRoleInDocument,
} from 'utils/functions'

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

  userEvent.click(screen.getByRole('button', { name: /Search for recipes/i }))

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))

  expect(window.location.pathname).toBe('/recipes')

  getByRoleInDocument('heading', { name: /120230 Results/i, level: 1 })

  const firstRecipe = screen.getByRole('link', { name: /Chicken Vesuvio/i })

  getWithinElementRoleInDocument(firstRecipe, 'img', {
    name: /Chicken Vesuvio/i,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /Calories: 1057/i,
    level: 2,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /Servings: 4/i,
    level: 2,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /sulfites/i,
    level: 3,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /low-carb/i,
    level: 3,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /peanut-free/i,
    level: 3,
  })

  getWithinElementRoleInDocument(firstRecipe, 'heading', {
    name: /Tree-Nut-Free/i,
    level: 3,
  })

  const secondRecipe = screen.getByRole('link', { name: /Chicken Paprikash/i })

  getWithinElementRoleInDocument(secondRecipe, 'img', {
    name: /Chicken Paprikash/i,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /Calories: 1011/i,
    level: 2,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /Servings: 3/i,
    level: 2,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /sulfites/i,
    level: 3,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /FODMAP/i,
    level: 3,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /high-protein/i,
    level: 3,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /peanut-free/i,
    level: 3,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /Tree-Nut-Free/i,
    level: 3,
  })

  getWithinElementRoleInDocument(secondRecipe, 'heading', {
    name: /Alcohol-Free/i,
    level: 3,
  })

  userEvent.click(firstRecipe)

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))

  expect(window.location.pathname).toBe(
    '/recipe/b79327d05b8e5b838ad6cfd9576b30b6'
  )

  getByRoleInDocument('heading', { name: /Chicken Vesuvio/i, level: 1 })

  getByRoleInDocument('heading', { name: /cooking Time 60 mins/i, level: 2 })

  getByRoleInDocument('heading', { name: /Servings 4/i, level: 2 })

  getByRoleInDocument('img', { name: /Chicken Vesuvio/i })

  getByRoleInDocument('heading', { name: /1057 calories/i, level: 1 })

  getByRoleInDocument('heading', { name: /ingredients/i, level: 2 })

  const firstListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[0]

  getWithinElementRoleInDocument(firstListItem, 'img')

  getWithinElementRoleInDocument(firstListItem, 'heading', {
    name: /salt/i,
    level: 3,
  })

  const secondListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[1]

  getWithinElementRoleInDocument(secondListItem, 'img')

  getWithinElementRoleInDocument(secondListItem, 'heading', {
    name: /frozen peas/i,
    level: 3,
  })
})

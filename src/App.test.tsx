import App from 'App'
import {
  logRoles,
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from 'test/utils'

test('should allow simple user search flow', async () => {
  render(<App />)
  expect(screen.getByRole('link', { name: /raveny/i })).toBeInTheDocument()

  expect(screen.getByRole('link', { name: /vegan/i })).toBeInTheDocument()

  expect(
    screen.getByRole('link', { name: /high protein/i })
  ).toBeInTheDocument()

  expect(screen.getByRole('link', { name: /low carb/i })).toBeInTheDocument()

  expect(
    screen.getByRole('heading', {
      name: /Find Your Dream Recipes and Enjoy./i,
      level: 1,
    })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('link', { name: /tiger abrodi/i })
  ).toBeInTheDocument()

  userEvent.click(screen.getAllByRole('link', { name: /search/i })[1])

  expect(window.location.pathname).toBe('/search')

  expect(
    screen.getByRole('heading', { name: /Start Cooking Today!/i, level: 1 })
  ).toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/Search recipes/i), 'chicken')

  userEvent.click(screen.getByRole('button', { name: /Search for recipes/i }))

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))

  expect(window.location.pathname).toBe('/recipes')

  expect(
    screen.getByRole('heading', { name: /120230 Results/i, level: 1 })
  ).toBeInTheDocument()

  const firstRecipe = screen.getByRole('link', { name: /Chicken Vesuvio/i })

  expect(
    within(firstRecipe).getByRole('img', { name: /Chicken Vesuvio/i })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', {
      name: /Calories: 1057/i,
      level: 2,
    })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', { name: /Servings: 4/i, level: 2 })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', { name: /sulfites/i, level: 3 })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', { name: /low-carb/i, level: 3 })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', { name: /peanut-free/i, level: 3 })
  ).toBeInTheDocument()

  expect(
    within(firstRecipe).getByRole('heading', {
      name: /Tree-Nut-Free/i,
      level: 3,
    })
  ).toBeInTheDocument()

  const secondRecipe = screen.getByRole('link', { name: /Chicken Paprikash/i })

  expect(
    within(secondRecipe).getByRole('img', { name: /Chicken Paprikash/i })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /Calories: 1011/i,
      level: 2,
    })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /Servings: 3/i,
      level: 2,
    })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', { name: /sulfites/i, level: 3 })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', { name: /FODMAP/i, level: 3 })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /high-protein/i,
      level: 3,
    })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /peanut-free/i,
      level: 3,
    })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /Tree-Nut-Free/i,
      level: 3,
    })
  ).toBeInTheDocument()

  expect(
    within(secondRecipe).getByRole('heading', {
      name: /Alcohol-Free/i,
      level: 3,
    })
  ).toBeInTheDocument()

  userEvent.click(firstRecipe)

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))

  expect(window.location.pathname).toBe(
    '/recipe/b79327d05b8e5b838ad6cfd9576b30b6'
  )

  expect(
    screen.getByRole('heading', { name: /Chicken Vesuvio/i, level: 1 })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('heading', { name: /cooking Time 60 mins/i, level: 2 })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('heading', { name: /Servings 4/i, level: 2 })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('img', { name: /Chicken Vesuvio/i })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('heading', { name: /1057 calories/i, level: 1 })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('heading', { name: /ingredients/i, level: 2 })
  ).toBeInTheDocument()

  const firstListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[0]

  /*   expect(
    within(firstListItem).getByRole('img', { name: 'Salt and pepper' })
  ).toBeInTheDocument() */

  expect(
    within(firstListItem).getByRole('heading', {
      name: /salt and pepper/i,
      level: 3,
    })
  ).toBeInTheDocument()

  const secondListItem = within(screen.getByRole('list')).getAllByRole(
    'listitem'
  )[1]

  /*   expect(
    within(secondListItem).getByRole('img', {
      name: /1 cup frozen peas, thawed/i,
    })
  ).toBeInTheDocument() */

  expect(
    within(secondListItem).getByRole('heading', {
      name: /1 cup frozen peas, thawed/i,
      level: 3,
    })
  ).toBeInTheDocument()
})

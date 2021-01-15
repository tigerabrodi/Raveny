import faker from 'faker'
import {
  DietLabel,
  SingleRecipe,
  HealthLabel,
  SingleRecipeResponse,
} from 'types'
import { getRandomLabel } from 'utils/functions'

export const singleRecipeData: SingleRecipeResponse = [
  {
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    healthLabels: [
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [
      getRandomLabel(DietLabel),
      getRandomLabel(DietLabel),
      getRandomLabel(DietLabel),
    ],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
    totalTime: faker.random.number({
      min: 30,
      max: 120,
    }),
    totalWeight: faker.random.number({
      min: 500,
      max: 2000,
    }),
    ingredientLines: [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ],
    ingredients: [
      {
        image: faker.random.image(),
        text: faker.lorem.sentence(),
        weight: faker.random.number({
          min: 100,
          max: 500,
        }),
      },
      {
        image: faker.random.image(),
        text: faker.lorem.sentence(),
        weight: faker.random.number({
          min: 100,
          max: 500,
        }),
      },
      {
        image: faker.random.image(),
        text: faker.lorem.sentence(),
        weight: faker.random.number({
          min: 100,
          max: 500,
        }),
      },
      {
        image: faker.random.image(),
        text: faker.lorem.sentence(),
        weight: faker.random.number({
          min: 100,
          max: 500,
        }),
      },
      {
        image: faker.random.image(),
        text: faker.lorem.sentence(),
        weight: faker.random.number({
          min: 100,
          max: 500,
        }),
      },
    ],
    url: faker.internet.url(),
  } as SingleRecipe,
]

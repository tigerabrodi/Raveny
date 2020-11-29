import faker from 'faker'
import { Recipe as TRecipe } from 'types'
import { getRandomDietLabel, getRandomHealthLabel } from 'utils/functions'

export const recipesData: TRecipe[] = [
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
  {
    uri: faker.random.uuid(),
    label: faker.commerce.productName(),
    image: faker.image.food(),
    calories: faker.random.number({
      min: 500,
      max: 5000,
    }),
    cautions: [faker.random.word(), faker.random.word()],
    healthLabels: [
      getRandomHealthLabel(),
      getRandomHealthLabel(),
      getRandomHealthLabel(),
    ],
    dietLabels: [getRandomDietLabel(), getRandomDietLabel()],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
] as TRecipe[]

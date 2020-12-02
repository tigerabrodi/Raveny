import faker from 'faker'
import { Recipe as TRecipe, DietLabel, HealthLabel } from 'types'
import { getRandomLabel } from 'utils/functions'

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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
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
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
      getRandomLabel(HealthLabel),
    ],
    dietLabels: [getRandomLabel(DietLabel), getRandomLabel(DietLabel)],
    yield: faker.random.number({
      min: 3,
      max: 15,
    }),
  },
] as TRecipe[]

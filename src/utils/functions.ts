import faker from 'faker'
import { DietLabel, HealthLabel } from 'types'

/**
 * Returns a random health label
 * @return {HealthLabel}
 */
export const getRandomHealthLabel = (): HealthLabel =>
  faker.random.arrayElement(Object.values(HealthLabel)) as HealthLabel

/**
 * Returns a random diet label
 * @return {DietLabel}
 */
export const getRandomDietLabel = (): DietLabel =>
  faker.random.arrayElement(Object.values(DietLabel)) as DietLabel

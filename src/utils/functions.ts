import faker from 'faker'
import { DietLabel, HealthLabel } from 'types'

/**
 * Returns either a random Health or Diet Label
 * @param {HealthLabel | DietLabel}
 * @return {string}
 */
export const getRandomLabel = <T extends typeof DietLabel | typeof HealthLabel>(
  enumLabel: T
): T[keyof T] => faker.random.arrayElement(Object.values(enumLabel))

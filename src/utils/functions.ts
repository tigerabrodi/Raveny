import {
  ByRoleMatcher,
  screen,
  within,
  ByRoleOptions,
} from '@testing-library/react'
import faker from 'faker'
import { DietLabel, HealthLabel } from 'types'

export const getRandomLabel = <
  Label extends typeof DietLabel | typeof HealthLabel
>(
  enumLabel: Label
): Label[keyof Label] => faker.random.arrayElement(Object.values(enumLabel))

export const capitalizeName = (name: string) => {
  return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
}

export const getByRoleInDocument = (
  role: ByRoleMatcher,
  { name, level }: { name?: string | RegExp; level?: number } = {}
) => {
  expect(screen.getByRole(role, { name, level })).toBeInTheDocument()
}

export const getWithinElementRoleInDocument = (
  element: HTMLElement,
  role: ByRoleMatcher,
  { name, level }: ByRoleOptions = {}
) => {
  expect(within(element).getByRole(role, { name, level })).toBeInTheDocument()
}

export const queryByRoleNotInDocument = (
  role: ByRoleMatcher,
  { name, level }: ByRoleOptions = {}
) => {
  expect(
    screen.queryByRole(role, {
      name,
      level,
    })
  ).not.toBeInTheDocument()
}

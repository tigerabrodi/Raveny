import faker from 'faker'
import { DietLabel, HealthLabel } from 'types'

export const getRandomLabel = <
  Label extends typeof DietLabel | typeof HealthLabel
>(
  enumLabel: Label
): Label[keyof Label] => faker.random.arrayElement(Object.values(enumLabel))

export const persistUrlInSessionStorage = (url: string) => {
  window.sessionStorage.clear()
  const urlToSessionStorage = new URL(url)
  sessionStorage.setItem(
    'recipesQueryUrl',
    JSON.stringify(urlToSessionStorage.href)
  )
}

export const capitalizeName = (name: string) => {
  return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
}

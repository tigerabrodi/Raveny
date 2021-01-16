import { Dispatch } from 'react'
import { Action } from 'context/RavenyContext'
import { History } from 'history'
import { fetchRecipes } from './fetchRecipes'
import { persistUrlInSessionStorage } from './functions'

export const searchRecipes = async ({
  dispatch = {} as Dispatch<Action>,
  href = '',
  history = {} as History,
}) => {
  const { href: url } = await fetchRecipes(dispatch, href)
  persistUrlInSessionStorage(url)
  history.push('/recipes')
}

import React, { ReactElement } from 'react'
import { RecipesWrapper } from 'pages/Recipes/styles'
import { recipesData } from 'data'
import { Recipe as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'components/Recipe',
}

export const Recipe = (): ReactElement => {
  return (
    <RecipesWrapper>
      {recipesData.map((recipe) => (
        <RecipeComponent recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesWrapper>
  )
}

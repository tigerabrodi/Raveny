import React, { FC, useEffect } from 'react'
import { useYummlyContext } from 'context/YummlyContext'
import { useLocation } from 'react-router-dom'
import { RecipesWrapper, SingleRecipeWrapper } from './styles'

export const Recipes: FC = () => {
    const { state, dispatch } = useYummlyContext()
    const locationSearch = useLocation().search

    useEffect(() => {}, [dispatch, locationSearch])

    return (
        <RecipesWrapper>
            {'recipes' in state &&
                state.recipes.map((recipe) => (
                    <SingleRecipeWrapper key={recipe.id} />
                ))}
        </RecipesWrapper>
    )
}

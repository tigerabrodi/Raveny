import { SpoonacularResponse, useYummlyContext } from 'context/YummlyContext'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RecipesWrapper, SingleRecipeWrapper } from './styles'

const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

export const Recipes: FC = () => {
    const { state, dispatch } = useYummlyContext()
    const { recipes } = state
    const locationSearch = useLocation().search
    const [didMount, setDidMount] = useState(false)
    const url = new URL(apiURL + locationSearch)
    url.searchParams.append('apiKey', apiKEY!)

    useEffect(() => {
        const fetchRecipes = async () => {
            //  request config
            const config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
            // fetch recipes
            const response = await window.fetch(url.href, config)
            const data: SpoonacularResponse = await response.json()
            try {
                if (response.ok) {
                    dispatch({
                        type: 'recipesResolved',
                        payload: data.results,
                    })
                } else {
                    dispatch({
                        type: 'rejected',
                        payload: Promise.reject(data),
                    })
                }
            } catch (error) {
                throw new Error('Something went terribly wrong! :D')
            }
        }
        if (!didMount) {
            console.log(didMount)
            setDidMount(true)
        } else {
            fetchRecipes()
        }
    }, [didMount, dispatch, locationSearch, url.href])

    return (
        <RecipesWrapper>
            {recipes?.map((recipe) => (
                <SingleRecipeWrapper key={recipe.id} />
            ))}
        </RecipesWrapper>
    )
}

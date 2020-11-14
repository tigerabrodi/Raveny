import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
    FailureResponse,
    SuccessResponse,
    useYummlyContext,
} from 'context/YummlyContext'
import { Spinner } from 'components/Spinner'
import { RecipesWrapper, SingleRecipeWrapper } from './styles'

const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

export const Recipes: FC = () => {
    const { state, dispatch } = useYummlyContext()
    const searchParams = useLocation().search
    const url = new URL(apiURL!)
    const numbersOfMount = JSON.parse(
        window.sessionStorage.getItem('recipesMount') as string
    )
    console.log(numbersOfMount)

    const completeUrl = `${url.href}${searchParams}&apiKey=${apiKEY}`

    useEffect(() => {
        // 'recipesMount' in sessionStorage will always be one number greater than numbersOfMount
        window.sessionStorage.setItem(
            'recipesMount',
            JSON.stringify(numbersOfMount + 1)
        )
        //  request config
        const fetchRecipes = async () => {
            dispatch({ type: 'pending' })
            window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
            const config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
            // fetch recipes
            const response = await window.fetch(completeUrl, config)
            try {
                if (response.ok) {
                    const successData: SuccessResponse = await response.json()
                    window.sessionStorage.setItem(
                        'recipesMount',
                        JSON.stringify(1)
                    )
                    dispatch({
                        type: 'recipesResolved',
                        payload: successData.results,
                    })
                } else {
                    const failureData: FailureResponse = await response.json()
                    dispatch({ type: 'rejected', payload: failureData.message })
                    throw new Error(
                        `Something went wrong with the request, message: ${failureData.message}`
                    )
                }
            } catch (error) {
                throw new Error(
                    `Something went terribly wrong! Message: ${error.message}`
                )
            }
        }
    }, [completeUrl, dispatch, numbersOfMount])

    if (state.status === 'pending') {
        return <Spinner />
    }

    return (
        <RecipesWrapper>
            {'recipes' in state &&
                state.recipes.map((recipe) => (
                    <SingleRecipeWrapper key={recipe.id} />
                ))}
        </RecipesWrapper>
    )
}

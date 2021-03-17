import { useRavenyDispatch } from 'context/RavenyContext'
import { useEffect, useRef } from 'react'
import { fetchMoreRecipes } from 'utils/fetchMoreRecipes'
import { fetchRecipes } from 'utils/fetchRecipes'

export const useOnInfinite = (href: string, isVisible: boolean) => {
  const { dispatch } = useRavenyDispatch()
  const moreRecipesFetchedTimesRef = useRef(1)
  const shouldFocusOnRecipe = useRef(0)

  useEffect(() => {
    fetchRecipes(dispatch, href)
  }, [dispatch, href])

  useEffect(() => {
    if (isVisible) {
      fetchMoreRecipes({
        dispatch,
        href,
        moreRecipesFetchedTimes: moreRecipesFetchedTimesRef.current,
      })
      moreRecipesFetchedTimesRef.current++
      shouldFocusOnRecipe.current++
    }
  }, [isVisible, dispatch, href])

  const shouldFocusOnRecipeTitle = (index: number) =>
    shouldFocusOnRecipe.current * 8 !== 0 &&
    shouldFocusOnRecipe.current * 8 > 7 &&
    shouldFocusOnRecipe.current * 8 === index

  return { shouldFocusOnRecipeTitle }
}

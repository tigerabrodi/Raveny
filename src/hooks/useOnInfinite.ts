import { useRavenyDispatch } from 'context/RavenyContext'
import { useEffect, useRef } from 'react'
import { client } from 'utils/client'

export const useOnInfinite = (href: string, isVisible: boolean) => {
  const { dispatch } = useRavenyDispatch()
  const moreRecipesFetchedTimesRef = useRef(1)
  useEffect(() => {
    client({
      dispatch,
      href,
      shouldFetchMultipleRecipes: true,
    })
  }, [dispatch, href])

  useEffect(() => {
    if (isVisible) {
      client({
        dispatch,
        href,
        shouldFetchMoreRecipes: true,
        moreRecipesFetchedTimes: moreRecipesFetchedTimesRef.current,
      })
      moreRecipesFetchedTimesRef.current++
    }
  }, [isVisible, dispatch, href])
}

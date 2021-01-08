import { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { fetchRecipes } from 'utils/fetchRecipes'
import { fetchMoreRecipes } from 'utils/fetchMoreRecipes'
import { Recipe } from 'components/Recipe'
import {
  IntersectingElementToLoadMore,
  LoadMoreSpinnerSection,
  RecipesHeading,
  RecipesMain,
  RecipesSection,
} from 'components/Recipe/styles'
import { FullPageSpinner, LoadMoreSpinner } from 'components/Spinner'
import { useOnScreen } from 'hooks/useOnScreen'
import {
  NoRecipesWrapper,
  NoRecipesTitle,
  SadFace,
  NoRecipesButton,
} from './styles'

export const Recipes = () => {
  const { state } = useRavenyState()
  const { dispatch } = useRavenyDispatch()
  const moreRecipesFetchedTimesRef = useRef(1)
  const mountRef = useRef(1)

  const isNotFirstRender = JSON.parse(
    window.sessionStorage.getItem('recipesMount') as string
  )

  const urlObject = new URL(
    JSON.parse(window.sessionStorage.getItem('recipesQueryUrl') as string)
  )

  const { href } = urlObject

  const { isVisible, setIntersectingElement } = useOnScreen({
    threshold: 1,
  })

  useEffect(() => {
    if (isNotFirstRender === 2 && mountRef.current === 1) {
      fetchRecipes(dispatch, href)
    } else {
      mountRef.current++
      window.sessionStorage.setItem('recipesMount', JSON.stringify(2))
    }
  }, [href, dispatch, isNotFirstRender])

  useEffect(() => {
    if (isVisible) {
      fetchMoreRecipes({
        dispatch,
        href,
        moreRecipesFetchedTimes: moreRecipesFetchedTimesRef.current,
      })
      moreRecipesFetchedTimesRef.current++
    }
  }, [dispatch, href, isVisible])

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain>
      <RecipesHeading>{state.results} Results</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={uuidv4()} />
        ))}
      </RecipesSection>
      {state.status === 'loadingMore' ? (
        <LoadMoreSpinnerSection>
          <LoadMoreSpinner />
        </LoadMoreSpinnerSection>
      ) : state.hasMoreRecipes ? (
        <IntersectingElementToLoadMore ref={setIntersectingElement} />
      ) : null}
    </RecipesMain>
  ) : (
    <NoRecipesWrapper>
      <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
      <SadFace role="img" title="A sad emoji." />
      <NoRecipesButton to="/search">Back To Search</NoRecipesButton>
    </NoRecipesWrapper>
  )
}

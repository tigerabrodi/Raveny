import { v4 as uuidv4 } from 'uuid'
import { useRavenyState } from 'context/RavenyContext'
import { Recipe } from 'components/Recipe'
import {
  RecipesMain,
  RecipesHeading,
  RecipesSection,
  LoadMoreSpinnerSection,
  IntersectingElementToLoadMore,
} from 'components/Recipe/styles'
import { FullPageSpinner, LoadMoreSpinner } from 'components/Spinner'
import { useOnScreen } from 'hooks/useOnScreen'
import { useOnInfinite } from 'hooks/useOnInfinite'

const apiURL = process.env.REACT_APP_API_URL

export const LowCarb = () => {
  const { state } = useRavenyState()

  const urlObject = new URL(apiURL!)

  urlObject.searchParams.append('q', 'meat')
  urlObject.searchParams.append('diet', 'low-carb')

  const { href } = urlObject

  const { isVisible, setIntersectingElement } = useOnScreen({
    threshold: 1,
  })

  useOnInfinite(href, isVisible)

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain>
      <RecipesHeading>Vegan</RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
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
  ) : null
}

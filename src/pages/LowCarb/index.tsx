import { useRavenyState } from 'context/RavenyContext'
import { Recipe } from 'components/Recipe'
import {
  RecipesMain,
  RecipesHeading,
  RecipesSection,
  IntersectingElementToLoadMore,
} from 'components/Recipe/styles'
import { FullPageSpinner, LoadMoreSpinner } from 'components/Spinner'
import { useOnScreen } from 'hooks/useOnScreen'
import { useOnInfinite } from 'hooks/useOnInfinite'
import { SkipToNavLink } from 'components/SkipToNavLink'
import { useHeadingFocus } from 'hooks/useHeadingFocus'

const apiURL = process.env.REACT_APP_API_URL

export const LowCarb = () => {
  const { state } = useRavenyState()
  const headingToBeFocusedRef = useHeadingFocus()

  const urlObject = new URL(apiURL!)

  urlObject.searchParams.append('q', 'meat')
  urlObject.searchParams.append('diet', 'low-carb')

  const { href } = urlObject

  const { isVisible, setIntersectingElement } = useOnScreen({
    threshold: 1,
  })

  const { shouldFocusOnRecipeTitle } = useOnInfinite(href, isVisible)

  if (state.status === 'loading') {
    return <FullPageSpinner loadingText="Loading recipes" />
  }

  if (state.status === 'resolved') {
    if (headingToBeFocusedRef.current) {
      headingToBeFocusedRef.current.focus()
    }
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain id="maincontent">
      <RecipesHeading
        ref={headingToBeFocusedRef}
        tabIndex={-1}
        aria-label="Low Carb"
      >
        <SkipToNavLink />
        Low Carb
      </RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe, index) => (
          <Recipe
            recipe={recipe}
            key={recipe.id}
            shouldFocusOnTitle={shouldFocusOnRecipeTitle(index)}
          />
        ))}
      </RecipesSection>
      {state.status === 'loadingMore' ? (
        <LoadMoreSpinner />
      ) : state.hasMoreRecipes ? (
        <IntersectingElementToLoadMore ref={setIntersectingElement} />
      ) : null}
    </RecipesMain>
  ) : null
}

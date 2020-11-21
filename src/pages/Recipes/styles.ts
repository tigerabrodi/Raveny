import styled from 'styled-components'

// Recipes
export const RecipesWrapper = styled.div`
  grid-area: children;
  width: 100vw;
  height: max(calc(100vh - 18rem), auto);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
  gap: 4rem;
  justify-items: center;
  align-items: center;
`

export const Recipe = styled.div`
  height: 30rem;
`

// No Recipes
export const NoRecipesWrapper = styled.div`
  grid-area: children;
  width: 100vw;
  height: max(calc(100vh - 18rem), auto);
`

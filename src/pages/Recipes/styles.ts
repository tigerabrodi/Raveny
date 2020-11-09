import styled from 'styled-components'

export const RecipesWrapper = styled.div`
    width: 100vw;
    height: max(calc(100vh - 18rem), auto);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
    gap: 4rem;
    justify-items: center;
    align-items: center;
`

export const SingleRecipeWrapper = styled.div`
    height: 30rem;
`

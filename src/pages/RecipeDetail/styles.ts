import styled from 'styled-components'
import { wrapperStyles } from 'styles'

export const RecipeMain = styled.main`
  ${wrapperStyles}
  display: grid;
  row-gap: 5rem;
  grid-template-areas:
    'title title'
    'subtitle subtitle'
    'image list';
  align-items: center;
  justify-items: center;
`

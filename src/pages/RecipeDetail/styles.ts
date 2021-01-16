import styled from 'styled-components'
import { wrapperStyles } from 'styles'

export const RecipeMain = styled.main`
  ${wrapperStyles}
  display: grid;
  grid-template-rows: 0fr 0.5fr 3fr 2fr;
  grid-template-areas:
    'title'
    'info'
    'imageSection'
    'ingredients';
  align-items: center;
  justify-items: center;
  row-gap: 1rem;
`

export const RecipeName = styled.h1`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 6rem;
  grid-area: title;
  color: ${({ theme }) => theme.colors.Orange};
`

export const RecipeInfoSection = styled.section`
  grid-area: info;
  display: grid;
  grid-template-areas: 'time servings';
  justify-content: space-evenly;
  align-items: center;
  height: 85%;
  width: 80%;
  border-radius: 0.2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  box-shadow: 0 0.2rem 0.5rem black;
`

export const TimeSection = styled.section`
  grid-area: time;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ServingsSection = styled.section`
  grid-area: servings;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const TimeHeading = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const ServingsHeading = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`

export const TotalTime = styled.h3`
  text-shadow: 0 0.2rem 0.5rem black;
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.Orange};
`

export const Servings = styled.h3`
  text-shadow: 0 0.2rem 0.5rem black;
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.Orange};
`

export const RecipeImageSection = styled.section`
  height: 100%;
  width: 80%;
  grid-area: imageSection;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const RecipeImage = styled.img`
  height: 80%;
  box-shadow: 0 0.2rem 0.5rem black;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  border-radius: 0.2rem;
`

export const Calories = styled.h1`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 4.5rem;
`

export const IngredientsList = styled.ul`
  grid-area: ingredients;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 1rem;
  padding-bottom: 1rem;
`

export const IngredientsHeading = styled.h2`
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 5rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-weight: 400;
  text-shadow: 0 0.2rem 0.5rem black;
  text-decoration: underline;
`

export const IngredientItem = styled.li`
  display: grid;
  grid-template-areas: 'image text';
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 7rem;
`

export const IngredientImage = styled.img`
  grid-area: image;
  height: 100%;
  box-shadow: 0 0.2rem 0.5rem black;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  border-radius: 0.2rem;
`

export const IngredientText = styled.h3`
  grid-area: text;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 400;
  width: 40ch;
`

import styled from 'styled-components'
import { wrapperStyles } from 'styles'
import { media } from 'theme/media'

export const RecipeMain = styled.main`
  ${wrapperStyles}
  display: grid;
  grid-template-areas:
    'title'
    'info'
    'imageSection'
    'ingredients';
  row-gap: 1rem;
  align-items: center;
  justify-items: center;
  padding-bottom: 3rem;
  ${media.phone} {
    padding-bottom: 1rem;
  }
`

export const RecipeName = styled.h1`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  grid-area: title;
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 2.5rem;
  text-align: center;
  ${media.phone} {
    font-size: 5rem;
  }
  ${media.desktop} {
    font-size: 6rem;
  }
`

export const RecipeInfoSection = styled.section`
  grid-area: info;
  display: grid;
  grid-template-areas: 'time servings';
  justify-content: space-evenly;
  align-items: center;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  box-shadow: 0 0.2rem 0.5rem black;
  width: 90%;
  height: 6rem;
  ${media.custom(360)} {
    width: 80%;
  }
  ${media.custom(410)} {
    width: 75%;
  }
  ${media.phone} {
    width: 85%;
    height: 8rem;
  }
  ${media.desktop} {
    width: 60%;
  }
  ${media.custom(1600)} {
    width: 40%;
  }
`

export const TimeSection = styled.section`
  grid-area: time;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  ${media.phone} {
    height: 99%;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.Brown};
    border-right: 0.2rem solid ${({ theme }) => theme.colors.Brown};
    padding: 0 0.5rem;
  }
`

export const ServingsSection = styled.section`
  grid-area: servings;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  ${media.phone} {
    height: 99%;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.Brown};
    border-right: 0.2rem solid ${({ theme }) => theme.colors.Brown};
    padding: 0 0.5rem;
  }
`

export const TimeHeading = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1.5rem;
  ${media.phone} {
    font-size: 1.8rem;
  }
`

export const ServingsHeading = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1.5rem;
  ${media.phone} {
    font-size: 1.8rem;
  }
`

export const Time = styled.h3`
  text-shadow: 0 0.2rem 0.5rem black;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 2rem;
  ${media.phone} {
    font-size: 2.5rem;
  }
`

export const Servings = styled.h3`
  text-shadow: 0 0.2rem 0.5rem black;
  font-family: ${({ theme }) => theme.fonts.Lora};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 2rem;
  ${media.phone} {
    font-size: 2.5rem;
  }
`

export const RecipeImageSection = styled.section`
  grid-area: imageSection;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 26rem;
  width: 90%;
  ${media.phone} {
    height: 55rem;
    width: 80%;
  }
  ${media.desktop} {
    height: 60rem;
  }
`

export const RecipeImage = styled.img`
  box-shadow: 0 0.2rem 0.5rem black;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  height: 80%;
`

export const Calories = styled.h1`
  text-shadow: 0 0.2rem 0.5rem black;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 2.5rem;
  ${media.phone} {
    font-size: 5.5rem;
  }
`

export const IngredientsList = styled.ul`
  grid-area: ingredients;
  min-height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 1rem;
`

export const IngredientsHeading = styled.h2`
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-weight: 400;
  text-shadow: 0 0.2rem 0.5rem black;
  text-decoration: underline;
  font-size: 4rem;
  ${media.phone} {
    font-size: 5rem;
  }
`

export const IngredientItem = styled.li`
  display: grid;
  align-items: center;
  width: 100%;
  justify-items: center;
  grid-template-areas: 'text';
  grid-template-columns: 1fr;
  min-height: 4rem;
  ${media.phone} {
    min-height: 9rem;
  }
  ${media.desktop} {
    justify-items: center;
    width: 90%;
    min-height: 10rem;
    grid-template-areas: 'image text';
    grid-template-columns: 50% 50%;
  }
  ${media.custom(1600)} {
    width: 75%;
  }
`

export const IngredientImage = styled.img`
  display: none;
  ${media.desktop} {
    display: block;
    grid-area: image;
    height: 90%;
    box-shadow: 0 0.2rem 0.5rem black;
    border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  }
`

export const IngredientText = styled.h3`
  grid-area: text;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.White};
  font-weight: 400;
  text-align: center;
  font-size: 2rem;
  ${media.phone} {
    font-size: 2.5rem;
  }
  ${media.tablet} {
    text-align: left;
  }
  ${media.desktop} {
    width: 40ch;
  }
`

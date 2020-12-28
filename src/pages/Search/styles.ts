import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as PanSVG } from 'assets/fried.svg'
import { Plus, Search } from '@styled-icons/bootstrap'
import { media } from 'theme/media'
import { wrapperStyles } from 'styles'

/* Common Styles */
const caloriesInputStyles = css`
  font-size: 1.7rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.Gray};
  background-color: ${({ theme }) => theme.colors.Black};
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  transition: 0.3s;
  height: 100%;
  width: 40%;
  ${media.phone} {
    width: 25%;
    height: 80%;
  }
  ${media.tablet} {
    width: 20%;
  }
  ${media.desktop} {
    max-width: 11rem;
    font-size: 2.3rem;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0.3rem 0.5rem black;
  }
`

const buttonStyles = css`
  top: 50%;
  left: 89.5%;
  height: 98%;
  width: 21%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.3s;
  position: absolute;
  cursor: pointer;
  ${media.phone} {
    left: 92.5%;
    width: 15%;
  }
  ${media.tablet} {
    left: 93.5%;
    width: 13%;
  }
  ${media.desktop} {
    left: 95.5%;
    height: 98%;
    width: 9%;
  }
  ${media.custom(1600)} {
    left: 96.5%;
    width: 7%;
  }
  &:hover svg {
    ${media.tablet} {
      color: ${({ theme }) => theme.colors.White};
      transform: scale(1.1);
    }
  }
  &:hover::after {
    ${media.tablet} {
      transform: scaleY(1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.Orange};
    height: 100%;
    width: 100%;
    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.5s;
    top: 0;
    left: 0;
  }
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:active svg {
    transform: scale(0.9);
  }
  &:active {
    box-shadow: none;
    ${media.tablet} {
      transform: translate(-50%, -50%) scale(0.95);
    }
  }
`

const inputStyles = css`
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Gray};
  background-color: ${({ theme }) => theme.colors.Black};
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  transition: all 0.3s;
  padding-left: 1rem;
  ${media.phone} {
    padding-left: 2rem;
    font-size: 2rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray};
  }
  &:focus {
    outline: none;
  }
`

const inputSectionStyles = css`
  transition: 0.3s;
  width: 100%;
  position: relative;
  ${media.tablet} {
    width: 100%;
  }
  ${media.desktop} {
    width: 90%;
  }
  ${media.custom(1600)} {
    width: 80%;
  }
  &:focus-within {
    box-shadow: 0 0.3rem 0.5rem black;
  }
`

/* Main */
export const SearchMain = styled.main`
  ${wrapperStyles}
  display: grid;
  grid-template-areas:
    'title'
    'search';
  grid-template-rows: 1fr 6fr;
  justify-items: center;
  align-items: center;
  width: 98%;
  justify-self: center;
  ${media.phone} {
    grid-template-rows: 1fr 3fr;
  }
`

/* Title Area */
export const Title = styled.label`
  font-size: min(6rem, 9vw);
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-weight: 700;
  text-shadow: 0.2rem 0.4rem 0.6rem black;
  letter-spacing: 0.1rem;
  ${media.tablet} {
    font-size: max(3.5rem, 4vw);
  }
`

export const TitleSection = styled.section`
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  ${media.tablet} {
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.Orange};
  }
  ${media.desktop} {
    width: 90%;
  }
`

/* Search Query */
export const SearchForm = styled.form`
  height: 100%;
  width: 100%;
  grid-area: search;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const QuerySection = styled.section`
  display: grid;
  grid-template-areas:
    'query'
    'characterErrorMessage';
  grid-template-rows: 4fr 1fr;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-items: center;
  align-content: space-around;
  row-gap: 0.5rem;
  ${media.phone} {
    row-gap: 0;
  }
`

export const QueryInputSection = styled.section`
  ${inputSectionStyles}
  grid-area: query;
  height: 100%;
  ${media.phone} {
    height: 65%;
  }
`

export const QueryInputValidLength = styled.span<{
  searchNumberLength: number
}>`
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  position: absolute;
  transform: translate(-50%, -50%);
  color: ${({ searchNumberLength, theme }) => {
    return searchNumberLength < 3 ? theme.colors.Red : theme.colors.Green
  }};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  top: 82%;
  left: 73.5%;
  ${media.phone} {
    font-size: 1.5rem;
    left: 82%;
  }
  ${media.tablet} {
    top: 80%;
    left: 85%;
  }
  ${media.desktop} {
    left: 89%;
    font-size: 1.6rem;
  }
  ${media.custom(1500)} {
    left: 89.5%;
  }
  ${media.custom(1600)} {
    left: 91.5%;
  }
`

export const QueryInput = styled.input`
  ${inputStyles}
`

export const QueryButton = styled.button`
  ${buttonStyles}
`

/* Calories */
export const CaloriesSection = styled.section`
  display: grid;
  grid-template-areas:
    'minCaloriesLabel maxCaloriesLabel'
    'minCaloriesInput maxCaloriesInput'
    'caloriesErrorMessage caloriesErrorMessage';
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-content: space-between;
  height: 25%;
  row-gap: 0.5rem;
  ${media.custom(360)} {
    height: 30%;
  }
  ${media.custom(400)} {
    height: 35%;
  }
  ${media.phone} {
    height: 25%;
    row-gap: 0;
  }
  ${media.tablet} {
    height: 23%;
  }
  ${media.desktop} {
    height: 25%;
  }
`

export const MinCaloriesInput = styled.input`
  ${caloriesInputStyles}
  grid-area: minCaloriesInput;
`

export const MaxCaloriesInput = styled.input`
  ${caloriesInputStyles}
  grid-area: maxCaloriesInput;
`

export const caloriesLabelStyles = css`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Lora};
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  ${media.phone} {
    font-size: 2.2rem;
  }
  ${media.desktop} {
    font-size: 2.5rem;
  }
`

export const MinCaloriesLabel = styled.label`
  ${caloriesLabelStyles}
  grid-area: minCaloriesLabel;
`

export const MaxCaloriesLabel = styled.label`
  grid-area: maxCaloriesLabel;
  ${caloriesLabelStyles}
`

/* Exclude */
export const ExcludeSection = styled.section`
  display: grid;
  grid-template-areas:
    'excludeLabel'
    'excludeInput'
    'excludeError'
    'excludeIngredients';
  grid-template-rows: 1fr 2fr 1fr 2fr;
  justify-items: center;
  align-items: center;
  height: 47%;
  width: 100%;
  row-gap: 0.5rem;
  ${media.phone} {
    row-gap: 0;
  }
`

export const ExcludeLabel = styled.label`
  grid-area: excludeLabel;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Lora};
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  font-size: 2.5rem;
  ${media.phone} {
    font-size: 4rem;
  }
`

export const ExcludeInputSection = styled.section`
  grid-area: excludeInput;
  height: 75%;
  ${media.custom(360)} {
    height: 100%;
  }
  ${media.custom(400)} {
    height: 90%;
  }
  ${media.phone} {
    height: 60%;
  }
  ${media.tablet} {
    width: 100%;
  }
  ${inputSectionStyles}
`

export const ExcludeInput = styled.input`
  ${inputStyles}
`

export const IngredientAddButton = styled.button`
  ${buttonStyles}
`

export const ExcludeIngredientsList = styled.ul`
  height: 100%;
  width: 100%;
  grid-area: excludeIngredients;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`

export const IngredientWrapper = styled.li`
  height: 55%;
  min-width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  box-shadow: 0 0.3rem 0.4rem black;
  ${media.phone} {
    height: 40%;
  }
  ${media.desktop} {
    min-width: 8%;
  }
  ${media.custom(1600)} {
    min-width: 5%;
  }
`

export const IngredientName = styled.h2`
  margin: 0 0.2rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.5rem;
  ${media.tablet} {
    font-size: 1.8rem;
  }
`

export const IngredientRemoveButton = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.colors.White};
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`

/*  Error Messages */
const ErrorMessage = styled.span<{ shouldShowErrorMessage: boolean }>`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.LightRed};
  text-shadow: 0 0.2rem 0.2rem black;
  font-weight: bold;
  letter-spacing: 0.2rem;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: 0.3s;
  ${media.custom(400)} {
    font-size: 1.5rem;
  }
  ${media.phone} {
    font-size: 1.7rem;
  }
  ${media.tablet} {
    font-size: 2rem;
  }
  ${media.desktop} {
    font-size: 2.2rem;
  }
  ${media.custom(1600)} {
    font-size: 2.5rem;
  }
  ${(props) =>
    props.shouldShowErrorMessage &&
    css`
      visibility: visible;
      transform: translateY(0);
    `};
`

export const CharacterErrorMessage = styled(ErrorMessage)`
  grid-area: characterErrorMessage;
`

export const CaloriesErrorMessage = styled(ErrorMessage)`
  grid-area: caloriesErrorMessage;
`

export const ExcludeErrorMessage = styled(ErrorMessage)`
  grid-area: excludeError;
`

/* Animations */
const cook = keyframes`
    from {
    transform: translateY(-.3rem) translateX(-.2rem) rotate(8deg) scale(-1, 1);
    }

    to {
    transform: translate(0) scale(-1, 1);
    }
`

/* Icons */
export const Pan = styled(PanSVG)`
  display: none;
  ${media.tablet} {
    position: relative;
    width: 8rem;
    height: 10rem;
    transform: scale(-1, 1);
    animation: ${cook} 1s infinite alternate;
    display: block;
    margin-right: 2rem;
    width: max(7rem, 7.5vw);
    height: max(9rem, 9.5vw);
  }
`

export const SearchIcon = styled(Search)`
  height: 3rem;
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.colors.Orange};
  transition: all 0.5s;
`

export const AddIcon = styled(Plus)`
  height: 5rem;
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.colors.Orange};
  transition: all 0.5s;
`

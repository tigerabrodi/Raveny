import { ChangeEvent, FormEvent, useState, KeyboardEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { capitalizeName } from 'utils/functions'
import { v4 as uuidv4 } from 'uuid'
import {
  Pan,
  QueryInput,
  QueryButton,
  SearchForm,
  SearchMain,
  SearchIcon,
  TitleContainer,
  InputValidLengthText,
  Title,
  QueryContainer,
  QueryInputContainer,
  CharacterErrorMessage,
  CaloriesContainer,
  CaloriesErrorMessage,
  MaxCaloriesInput,
  MaxCaloriesLabel,
  MinCaloriesInput,
  MinCaloriesLabel,
  IngredientAddButton,
  ExcludeIngredientsList,
  ExcludeInput,
  ExcludeInputContainer,
  ExcludeContainer,
  IngredientName,
  IngredientRemoveButton,
  IngredientItem,
  ExcludeErrorMessage,
  ExcludeLabel,
  AddIcon,
  QueryLabel,
} from './styles'

type SearchState = {
  searchValue: string
  minCalories: number
  maxCalories: number
  excludeValue: string
  excludedIngredients: Array<{ id: string; name: string }>
}

export const Search = () => {
  const [showErrorCharacters, setShowErrorCharacters] = useState(false)
  const [showErrorCalories, setShowErrorCalories] = useState(false)
  const [
    showErrorExcludedIngredients,
    setShowErrorExcludedIngredients,
  ] = useState(false)
  const [
    showErrorCharacterIngredients,
    setShowErrorCharacterIngredients,
  ] = useState(false)
  const [
    isIngredientAlreadyExcluded,
    setIsIngredientAlreadyExcluded,
  ] = useState('')

  const [searchState, setSearchState] = useState<SearchState>({
    searchValue: '',
    minCalories: 0,
    maxCalories: 3000,
    excludedIngredients: [],
    excludeValue: '',
  })

  const history = useHistory()

  const {
    searchValue,
    minCalories,
    maxCalories,
    excludeValue,
    excludedIngredients,
  } = searchState

  const searchLengthValidation =
    searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    })
  }

  const onRemoveIngredient = (id: string) => {
    setSearchState({
      ...searchState,
      excludedIngredients: excludedIngredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    })
  }

  const onAddIngredient = (name: string, event?: KeyboardEvent) => {
    const alreadyExcludedIngredient = excludedIngredients.find(
      (ingredient) => ingredient.name.toLowerCase() === name.toLowerCase()
    )

    if (event && event.key === 'Enter') {
      event.preventDefault()
    }

    const validateAddIngredientInput = () => {
      if (name.length < 3) {
        setShowErrorCharacterIngredients(true)
        return setTimeout(() => setShowErrorCharacterIngredients(false), 2500)
      } else if (alreadyExcludedIngredient) {
        setIsIngredientAlreadyExcluded(
          capitalizeName(alreadyExcludedIngredient.name)
        )
        setShowErrorExcludedIngredients(true)
        return setTimeout(() => setShowErrorExcludedIngredients(false), 2500)
      } else {
        return true
      }
    }

    if (validateAddIngredientInput() === true) {
      setSearchState({
        ...searchState,
        excludedIngredients: [{ id: uuidv4(), name }, ...excludedIngredients],
        excludeValue: '',
      })
    }
  }

  const validateOnSubmitInput = () => {
    if (searchValue.length < 3) {
      setShowErrorCharacters(true)
      return window.setTimeout(() => setShowErrorCharacters(false), 2500)
    } else if (Number(minCalories) >= Number(maxCalories)) {
      setShowErrorCalories(true)
      return window.setTimeout(() => setShowErrorCalories(false), 2500)
    } else {
      return true
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (validateOnSubmitInput() === true) {
      let redirectRoute = `/recipes?q=${searchValue.toLowerCase()}&calories=${minCalories}-${maxCalories}`

      excludedIngredients.forEach(({ name }) => {
        redirectRoute = `${redirectRoute}&exclude=${name.toLowerCase()}`
      })

      history.push(redirectRoute)
    }
  }

  return (
    <SearchMain>
      <TitleContainer>
        <Title>Start Cooking Today!</Title>
        <Pan aria-hidden="true" />
      </TitleContainer>

      <SearchForm onSubmit={(event) => onSubmit(event)} autoComplete="off">
        <QueryContainer>
          <QueryLabel htmlFor="search">Search recipes</QueryLabel>
          <QueryInputContainer>
            <QueryInput
              value={searchValue}
              type="text"
              placeholder="Chicken"
              id="search"
              name="searchValue"
              onChange={(event) => handleChange(event)}
            />

            <InputValidLengthText
              searchNumberLength={searchValue.length}
              role="alert"
              aria-label={
                searchValue.length > 2
                  ? 'Length of search value is valid'
                  : 'Length of search value is invalid'
              }
            >
              {searchLengthValidation}
            </InputValidLengthText>

            <QueryButton type="submit" aria-label="Search">
              <SearchIcon aria-hidden="true" />
            </QueryButton>
          </QueryInputContainer>

          {showErrorCharacters && (
            <CharacterErrorMessage
              role="alert"
              aria-label="Please enter at least 3 characters to search for recipes"
            >
              Please enter at least 3 characters to search for recipes.
            </CharacterErrorMessage>
          )}
        </QueryContainer>

        <CaloriesContainer>
          <MinCaloriesLabel htmlFor="minCalories">
            Min Calories
          </MinCaloriesLabel>

          <MinCaloriesInput
            type="text"
            id="minCalories"
            pattern="[0-9]*"
            name="minCalories"
            min="0"
            value={minCalories}
            onChange={(event) =>
              event.target.validity.valid && handleChange(event)
            }
          />

          <MaxCaloriesLabel htmlFor="maxCalories">
            Max Calories
          </MaxCaloriesLabel>

          <MaxCaloriesInput
            type="text"
            pattern="[0-9]*"
            id="maxCalories"
            name="maxCalories"
            min="0"
            value={maxCalories}
            onChange={(event) =>
              event.target.validity.valid && handleChange(event)
            }
          />

          {showErrorCalories && (
            <CaloriesErrorMessage
              role="alert"
              aria-label="Minimum Calories must be less than Maximum Calories"
            >
              Minimum Calories must be less than Maximum Calories.
            </CaloriesErrorMessage>
          )}
        </CaloriesContainer>

        <ExcludeContainer>
          <ExcludeLabel htmlFor="excludeIngredients">
            Exclude ingredients
          </ExcludeLabel>

          <ExcludeInputContainer>
            <ExcludeInput
              id="excludeIngredients"
              placeholder="Milk"
              name="excludeValue"
              value={excludeValue}
              onKeyDown={(event) =>
                event.key === 'Enter' && onAddIngredient(excludeValue, event)
              }
              onChange={(event) => handleChange(event)}
              type="text"
            />
            <IngredientAddButton
              aria-label="Exclude ingredient"
              type="button"
              onClick={() => onAddIngredient(excludeValue)}
            >
              <AddIcon title="Add Icon" />
            </IngredientAddButton>
          </ExcludeInputContainer>

          {(showErrorExcludedIngredients || showErrorCharacterIngredients) && (
            <ExcludeErrorMessage
              role="alert"
              aria-label={
                showErrorCharacterIngredients
                  ? 'Please enter at least 3 characters for the ingredient to be excluded'
                  : showErrorExcludedIngredients
                  ? `Ingredient ${isIngredientAlreadyExcluded} is already being included`
                  : undefined
              }
            >
              {showErrorCharacterIngredients
                ? 'Please enter at least 3 characters for the ingredient to be excluded.'
                : showErrorExcludedIngredients
                ? `Ingredient ${isIngredientAlreadyExcluded} is already being included.`
                : null}
            </ExcludeErrorMessage>
          )}
          {excludedIngredients.length > 0 && (
            <ExcludeIngredientsList>
              {excludedIngredients.map(({ name, id }) => (
                <IngredientItem key={id}>
                  <IngredientName>{name}</IngredientName>
                  <IngredientRemoveButton
                    aria-label={`Remove ${name} ingredient from being exclude`}
                    type="button"
                    onClick={() => onRemoveIngredient(id)}
                  >
                    x
                  </IngredientRemoveButton>
                </IngredientItem>
              ))}
            </ExcludeIngredientsList>
          )}
        </ExcludeContainer>
      </SearchForm>
    </SearchMain>
  )
}

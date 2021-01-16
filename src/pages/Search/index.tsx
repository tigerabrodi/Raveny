import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { useHistory } from 'react-router-dom'
import { searchRecipes } from 'utils/searchRecipes'
import { capitalizeName } from 'utils/functions'
import { v4 as uuidv4 } from 'uuid'
import { FullPageSpinner } from 'components/Spinner'
import {
  Pan,
  QueryInput,
  QueryButton,
  SearchForm,
  SearchMain,
  SearchIcon,
  TitleSection,
  QueryInputValidLength,
  Title,
  QuerySection,
  QueryInputSection,
  CharacterErrorMessage,
  CaloriesSection,
  CaloriesErrorMessage,
  MaxCaloriesInput,
  MaxCaloriesLabel,
  MinCaloriesInput,
  MinCaloriesLabel,
  IngredientAddButton,
  ExcludeIngredientsList,
  ExcludeInput,
  ExcludeInputSection,
  ExcludeSection,
  IngredientName,
  IngredientRemoveButton,
  IngredientWrapper,
  ExcludeErrorMessage,
  ExcludeLabel,
  AddIcon,
} from './styles'

const apiURL = process.env.REACT_APP_API_URL

type SearchState = {
  searchValue: string
  minCalories: number
  maxCalories: number
  excludeValue: string
  excludedIngredients: Array<{ id: string; name: string }>
}

export const Search = () => {
  const [isMobile, setIsMobile] = useState(false)
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

  const {
    searchValue,
    minCalories,
    maxCalories,
    excludeValue,
    excludedIngredients,
  } = searchState

  const searchLengthValidation =
    searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

  const urlToQuery = new URL(apiURL!)

  const { dispatch } = useRavenyDispatch()
  const { state } = useRavenyState()
  const history = useHistory()

  const handleCaloriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid) {
      setSearchState({
        ...searchState,
        [event.target.name]: event.target.value,
      })
    }
  }

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

    const validateInputAddIngredient = () => {
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

    if (validateInputAddIngredient() === true) {
      setSearchState({
        ...searchState,
        excludedIngredients: [{ id: uuidv4(), name }, ...excludedIngredients],
        excludeValue: '',
      })
    }
  }

  const validateInputOnSubmit = () => {
    if (searchValue.length < 3) {
      setShowErrorCharacters(true)
      return window.setTimeout(() => setShowErrorCharacters(false), 2500)
    } else if (Number(minCalories) > Number(maxCalories)) {
      setShowErrorCalories(true)
      return window.setTimeout(() => setShowErrorCalories(false), 2500)
    } else {
      return true
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (validateInputOnSubmit() === true) {
      urlToQuery.searchParams.append('q', searchValue.toLowerCase())
      urlToQuery.searchParams.append(
        'calories',
        `${minCalories}-${maxCalories}`
      )

      excludedIngredients.forEach(({ name }) => {
        urlToQuery.searchParams.append('exclude', name.toLowerCase())
      })

      const { href } = urlToQuery

      searchRecipes({
        dispatch,
        history,
        href,
      })
    }
  }

  useEffect(() => {
    const setIsMobileView = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }

    setIsMobileView()
    window.addEventListener('resize', setIsMobileView)
    return () => window.removeEventListener('resize', setIsMobileView)
  }, [])

  if (state.status === 'loading') {
    return <FullPageSpinner />
  }

  return (
    <SearchMain>
      <TitleSection>
        <Title htmlFor="search">
          {isMobile
            ? 'Start Cooking Today!'
            : 'Search Now and Start Cooking Today!'}
        </Title>
        <Pan role="img" title="A cooking pan." />
      </TitleSection>

      <SearchForm onSubmit={(event) => onSubmit(event)} autoComplete="off">
        <QuerySection>
          <QueryInputSection>
            <QueryInput
              value={searchValue}
              type="text"
              placeholder="Search For Recipes..."
              id="search"
              name="searchValue"
              onChange={(event) => handleChange(event)}
              aria-describedby="searchInputError"
            />

            <QueryInputValidLength searchNumberLength={searchValue.length}>
              {searchLengthValidation}
            </QueryInputValidLength>

            <QueryButton type="submit" aria-label="Search for recipes">
              <SearchIcon title="Search Icon" />
            </QueryButton>
          </QueryInputSection>

          <CharacterErrorMessage
            role="alert"
            id="searchInputError"
            shouldShowErrorMessage={showErrorCharacters}
          >
            Please enter at least three characters.
          </CharacterErrorMessage>
        </QuerySection>

        <CaloriesSection>
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
            onChange={(event) => handleCaloriesChange(event)}
            aria-describedby="caloriesError"
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
            onChange={(event) => handleCaloriesChange(event)}
            aria-describedby="caloriesError"
          />

          <CaloriesErrorMessage
            id="caloriesError"
            role="alert"
            shouldShowErrorMessage={showErrorCalories}
          >
            Minimum Calories must be less than Maximum Calories.
          </CaloriesErrorMessage>
        </CaloriesSection>

        <ExcludeSection>
          <ExcludeLabel htmlFor="Exclude Ingredients">
            Exclude Ingredients
          </ExcludeLabel>

          <ExcludeInputSection>
            <ExcludeInput
              id="Exclude Ingredients"
              aria-describedby="excludeError"
              placeholder="Exclude calories..."
              name="excludeValue"
              value={excludeValue}
              onKeyDown={(event) =>
                event.key === 'Enter' && onAddIngredient(excludeValue, event)
              }
              onChange={(event) => handleChange(event)}
              type="text"
            />
            <IngredientAddButton
              aria-label="Add ingredient to be excluded"
              type="button"
              onClick={() => onAddIngredient(excludeValue)}
            >
              <AddIcon title="Add Icon" />
            </IngredientAddButton>
          </ExcludeInputSection>

          <ExcludeErrorMessage
            role="alert"
            id="excludeError"
            shouldShowErrorMessage={
              showErrorExcludedIngredients || showErrorCharacterIngredients
            }
          >
            {showErrorCharacterIngredients
              ? 'Please enter at least 3 characters for the ingredient to be excluded.'
              : showErrorExcludedIngredients
              ? `Ingredient "${isIngredientAlreadyExcluded}" is already being included.`
              : null}
          </ExcludeErrorMessage>

          <ExcludeIngredientsList>
            {excludedIngredients.length > 0 &&
              excludedIngredients.map(({ name, id }) => (
                <IngredientWrapper key={id}>
                  <IngredientName>{name}</IngredientName>
                  <IngredientRemoveButton
                    aria-label="Remove ingredient from being excluded"
                    type="button"
                    onClick={() => onRemoveIngredient(id)}
                  >
                    x
                  </IngredientRemoveButton>
                </IngredientWrapper>
              ))}
          </ExcludeIngredientsList>
        </ExcludeSection>
      </SearchForm>
    </SearchMain>
  )
}

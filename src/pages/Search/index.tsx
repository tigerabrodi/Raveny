import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react'
import { useRavenyDispatch, useRavenyState } from 'context/RavenyContext'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { FullPageSpinner } from 'components/Spinner'
import { client } from 'utils/client'
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

/* URL */
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
  /* Error States */
  const [shouldShowErrorCharacters, setShouldShowErrorCharacters] = useState(
    false
  )
  const [shouldShowErrorCalories, setShouldShowErrorCalories] = useState(false)
  const [
    shouldShowErrorExcludedIngredients,
    setShouldShowErrorExcludedIngredients,
  ] = useState(false)
  const [
    shouldShowErrorCharacterIngredients,
    setShouldShowErrorCharacterIngredients,
  ] = useState(false)
  const [
    alreadyExcludedIngredientName,
    setAlreadyExcludedIngredientName,
  ] = useState('')

  /* Search State */
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

  const urlToQuery = new URL(apiURL!)

  const searchLengthValidation =
    searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

  const { dispatch } = useRavenyDispatch()
  const { state } = useRavenyState()
  const history = useHistory()

  /* Change Events */
  const handleCaloriesChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.validity.valid) {
      setSearchState({
        ...searchState,
        [event.target.name]: event.target.value,
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    })
  }

  /* Capitalize */
  const capitalizeName = (name: string) => {
    return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
  }

  /* Ingredient Operations */
  const removeIngredient = (id: string) => {
    setSearchState({
      ...searchState,
      excludedIngredients: excludedIngredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    })
  }

  const addIngredient = (name: string, event?: KeyboardEvent) => {
    const alreadyExcludedIngredient = excludedIngredients.find(
      (ingredient) => ingredient.name.toLowerCase() === name.toLowerCase()
    )

    if (event && event.key === 'Enter') {
      event.preventDefault()
    }

    if (name.length < 3) {
      setShouldShowErrorCharacterIngredients(true)
      return setTimeout(
        () => setShouldShowErrorCharacterIngredients(false),
        2500
      )
    } else if (alreadyExcludedIngredient) {
      setAlreadyExcludedIngredientName(
        capitalizeName(alreadyExcludedIngredient.name)
      )
      setShouldShowErrorExcludedIngredients(true)
      return setTimeout(
        () => setShouldShowErrorExcludedIngredients(false),
        2500
      )
    } else {
      setSearchState({
        ...searchState,
        excludedIngredients: [{ id: uuidv4(), name }, ...excludedIngredients],
        excludeValue: '',
      })
    }
  }

  const onSubmit = (event: FormEvent): void | number => {
    event.preventDefault()
    /* Input Validation */
    if (searchValue.length < 3) {
      setShouldShowErrorCharacters(true)
      return window.setTimeout(() => setShouldShowErrorCharacters(false), 2500)
    } else if (Number(minCalories) > Number(maxCalories)) {
      setShouldShowErrorCalories(true)
      return window.setTimeout(() => setShouldShowErrorCalories(false), 2500)
    } else {
      /* Query Params */
      urlToQuery.searchParams.append('q', searchValue.toLowerCase())
      urlToQuery.searchParams.append(
        'calories',
        `${minCalories}-${maxCalories}`
      )
      excludedIngredients.forEach(({ name }) => {
        urlToQuery.searchParams.append('exclude', name.toLowerCase())
      })

      const { href } = urlToQuery

      /* Fetch Recipes */
      client({
        dispatch,
        history,
        href,
        redirectRoute: '/recipes',
        shouldUseSessionStorage: true,
        shouldFetchMultipleRecipes: true,
        shouldRedirect: true,
      })
    }
  }

  useEffect(() => {
    window.sessionStorage.clear()
    /* Short Title in Mobile View */
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
            shouldShowErrorMessage={shouldShowErrorCharacters}
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
            shouldShowErrorMessage={shouldShowErrorCalories}
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
              onKeyPress={(event) =>
                event.key === 'Enter' && addIngredient(excludeValue, event)
              }
              onChange={(event) => handleChange(event)}
              type="text"
            />
            <IngredientAddButton
              aria-label="Add ingredient to be excluded"
              type="button"
              onClick={() => addIngredient(excludeValue)}
            >
              <AddIcon title="Add Icon" />
            </IngredientAddButton>
          </ExcludeInputSection>

          <ExcludeErrorMessage
            role="alert"
            id="excludeError"
            shouldShowErrorMessage={
              shouldShowErrorExcludedIngredients ||
              shouldShowErrorCharacterIngredients
            }
          >
            {shouldShowErrorCharacterIngredients
              ? 'Please enter at least 3 characters for the ingredient to be excluded.'
              : shouldShowErrorExcludedIngredients
              ? `Ingredient "${alreadyExcludedIngredientName}" is already being included.`
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
                    onClick={() => removeIngredient(id)}
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

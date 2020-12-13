import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRavenyContext } from 'context/RavenyContext'
import { Spinner } from 'components/Spinner'
import { client } from 'utils/client'
import {
  Pan,
  SearchInnerWrapper,
  SearchInput,
  SearchButton,
  SearchForm,
  SearchWrapper,
  SearchIcon,
  TitleWrapper,
  SearchInputValidLength,
  SearchLabel,
  QueryWrapper,
  ErrorCharacterMessage,
  CaloriesWrapper,
  CaloriesErrorMessage,
  MaxCaloriesInput,
  MaxCaloriesLabel,
  MinCaloriesInput,
  MinCaloriesLabel,
} from './styles'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

type SearchState = {
  searchValue: string
  minCalories: number
  maxCalories: number
}

export const Search = () => {
  const [focusState, setFocusState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [shouldShowErrorCharacters, setShouldShowErrorCharacters] = useState(
    false
  )
  const [shouldShowErrorCalories, setShouldShowErrorCalories] = useState(false)
  const [searchState, setSearchState] = useState<SearchState>({
    searchValue: '',
    minCalories: 0,
    maxCalories: 3000,
  })

  const { searchValue, minCalories, maxCalories } = searchState

  const history = useHistory()

  const { state, dispatch } = useRavenyContext()

  // Non-null assertion because environment variables could be undefined
  const urlToQuery = new URL(apiURL!)

  // Number of input length (validation)
  const searchLengthValidation =
    searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

  /* Change Events */
  const handleCaloriesChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.validity.valid) {
      setSearchState({
        ...searchState,
        [event.target.name]: event.target.value,
      })
    }
  }

  const handleSearchValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchState({
      ...searchState,
      searchValue: event.target.value,
    })
  }

  const onSubmit = (event: FormEvent): void | number => {
    event.preventDefault()

    // Input validation
    if (searchValue.length < 3) {
      setShouldShowErrorCharacters(true)
      return setTimeout(() => setShouldShowErrorCharacters(false), 3000)
    } else if (minCalories > maxCalories) {
      setShouldShowErrorCalories(true)
      return setTimeout(() => setShouldShowErrorCalories(false), 3000)
    } else {
      // Set query params
      urlToQuery.searchParams.append('app_key', apiKEY!)
      urlToQuery.searchParams.append('app_id', apiID!)
      urlToQuery.searchParams.append('q', searchValue.toLowerCase())
      urlToQuery.searchParams.append('from', '0')
      urlToQuery.searchParams.append('to', '8')
      urlToQuery.searchParams.append(
        'calories',
        `${minCalories}-${maxCalories}`
      )

      // Fetch Recipes
      client({
        dispatch,
        url: urlToQuery.href,
        shouldUseSessionStorage: true,
        shouldFetchMultipleRecipes: true,
        shouldRedirect: true,
        history,
        redirectUrl: '/recipes',
      })
    }
  }

  useEffect(() => {
    window.sessionStorage.clear()
    // Mobile view to show shorter title
    const setIsMobileView = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    setIsMobileView()
    window.addEventListener('resize', setIsMobileView)
    return () => window.removeEventListener('resize', setIsMobileView)
  }, [])

  if (state.status === 'pending') {
    return <Spinner />
  }

  return (
    <SearchWrapper>
      <SearchInnerWrapper>
        <TitleWrapper>
          <SearchLabel htmlFor="search">
            {isMobile
              ? 'Start Cooking Today!'
              : 'Search Now and Start Cooking Today!'}
          </SearchLabel>
          <Pan />
        </TitleWrapper>
        <SearchForm onSubmit={(e) => onSubmit(e)} autoComplete="off">
          <QueryWrapper>
            <SearchInput
              value={searchValue}
              type="text"
              placeholder="Search For Recipes..."
              id="search"
              name="searchValue"
              onChange={(event) => handleSearchValueChange(event)}
              onFocus={() => setFocusState(!focusState)}
              onBlur={() => setFocusState(!focusState)}
              aria-describedby="searchInputError"
            />
            <SearchInputValidLength searchNumberLength={searchValue.length}>
              {searchLengthValidation}
            </SearchInputValidLength>
            <SearchButton isFocus={focusState} type="submit">
              <SearchIcon />
            </SearchButton>
            <ErrorCharacterMessage
              role="alert"
              id="searchInputError"
              shouldShowErrorCharacters={shouldShowErrorCharacters}
            >
              Please enter at least three characters.
            </ErrorCharacterMessage>
          </QueryWrapper>
          <CaloriesWrapper>
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
              shouldShowCaloriesError={shouldShowErrorCalories}
            >
              Minimum Calories must be less than Maximum Calories.
            </CaloriesErrorMessage>
          </CaloriesWrapper>
        </SearchForm>
      </SearchInnerWrapper>
    </SearchWrapper>
  )
}

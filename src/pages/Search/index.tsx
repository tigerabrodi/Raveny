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
  ErrorToast,
  ErrorText,
  Title,
  SearchFormWrapper,
} from './styles'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

type SearchState = {
  searchValue: string
}

export const Search = () => {
  const [focusState, setFocusState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isErrorCharacters, setIsErrorCharacters] = useState(false)
  const [searchState, setSearchState] = useState<SearchState>({
    searchValue: '',
  })

  const { searchValue } = searchState

  const history = useHistory()

  const { state, dispatch } = useRavenyContext()

  // Non-null assertion because environment variables could be undefined
  const urlToQuery = new URL(apiURL!)

  // Number of input length (validation)
  const searchLengthValidation =
    searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchState({
      ...searchState,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (event: FormEvent): Promise<number | void> => {
    event.preventDefault()

    // Input validation
    if (searchValue.length < 3) {
      setIsErrorCharacters(true)
      return setTimeout(() => setIsErrorCharacters(false), 3000)
    }

    // Set query params
    urlToQuery.searchParams.append('app_key', apiKEY!)
    urlToQuery.searchParams.append('app_id', apiID!)
    urlToQuery.searchParams.append('q', searchValue.toLowerCase())
    urlToQuery.searchParams.append('from', '0')
    urlToQuery.searchParams.append('to', '8')

    // Fetch Recipes
    client(
      dispatch,
      urlToQuery.href,
      {
        shouldUseSessionStorage: true,
        shouldFetchMultipleRecipes: true,
        shouldRedirect: true,
      },
      history,
      '/recipes'
    )
  }

  useEffect(() => {
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
          <Title htmlFor="search">
            {isMobile
              ? 'Start Cooking Today!'
              : 'Search Now and Start Cooking Today!'}
          </Title>
          <Pan />
        </TitleWrapper>
        <SearchForm onSubmit={(e) => onSubmit(e)} autoComplete="off">
          <SearchFormWrapper>
            <SearchInput
              value={searchValue}
              type="text"
              placeholder="Search For Recipes..."
              id="search"
              name="searchValue"
              onChange={(event) => onChange(event)}
              onFocus={() => setFocusState(!focusState)}
              onBlur={() => setFocusState(!focusState)}
            />
            <SearchInputValidLength searchNumberLength={searchValue.length}>
              {searchLengthValidation}
            </SearchInputValidLength>
            <SearchButton isFocus={focusState} type="submit">
              <SearchIcon />
            </SearchButton>
            {isErrorCharacters && (
              <ErrorToast isError={isErrorCharacters}>
                <ErrorText>Please enter at least 3 characters.</ErrorText>
              </ErrorToast>
            )}
          </SearchFormWrapper>
        </SearchForm>
      </SearchInnerWrapper>
    </SearchWrapper>
  )
}

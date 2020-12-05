import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRavenyContext } from 'context/RavenyContext'
import { Spinner } from 'components/Spinner'
import { SuccessResponse } from 'types'
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
} from './styles'

// API Key, ID and URL
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY
const apiID = process.env.REACT_APP_API_ID

type SearchState = {
  searchValue: string
}

export const Search: FC = () => {
  const [focusState, setFocusState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isErrorCharacters, setIsErrorCharacters] = useState(false)
  const [searchState, setSearchState] = useState<SearchState>({
    searchValue: '',
  })

  const { searchValue } = searchState

  const history = useHistory()

  const { state, dispatch } = useRavenyContext()

  // Non-null assertion because TypeScript thinks this could be undefined
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
      return setTimeout(() => {
        return setIsErrorCharacters(false)
      }, 3000)
    }

    dispatch({ type: 'pending' })

    // Set query params
    urlToQuery.searchParams.append('app_key', apiKEY!)
    urlToQuery.searchParams.append('app_id', apiID!)
    urlToQuery.searchParams.append('q', searchValue.toLowerCase())
    urlToQuery.searchParams.append('from', '0')
    urlToQuery.searchParams.append('to', '8')

    // URL to be persisted in sessionStorage
    const urlToSessionStorage = new URL(urlToQuery.href)
    urlToSessionStorage.searchParams.delete('app_key')
    urlToSessionStorage.searchParams.delete('app_id')

    // fetch recipes
    try {
      const response = await window.fetch(urlToQuery.href)
      if (response.ok) {
        // Successful response
        const successData: SuccessResponse = await response.json()
        window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
        window.sessionStorage.setItem(
          'recipesQueryUrl',
          JSON.stringify(urlToSessionStorage.href)
        )

        dispatch({
          type: 'recipesResolved',
          // payload should be an array of recipes
          payload: successData.hits.map((hit) => hit.recipe),
        })

        history.push(`/recipes`)
      } else {
        // Failure Response
        const failureData = await response.json()

        dispatch({ type: 'rejected', payload: failureData.message })

        throw new Error(
          `Something went wrong with the request, message: ${failureData.message}`
        )
      }
    } catch (error) {
      throw new Error(
        `Something went terribly wrong! Message: ${error.message}`
      )
    }
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
        </SearchForm>
      </SearchInnerWrapper>
    </SearchWrapper>
  )
}

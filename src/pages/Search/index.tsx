import { Spinner } from 'components/Spinner'
import { SpoonacularResponse, useYummlyContext } from 'context/YummlyContext'
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Pan,
    SearchInnerWrapper,
    SearchInput,
    SearchButton,
    SearchForm,
    SearchWrapper,
    Title,
    SearchIcon,
    TitleWrapper,
    SearchInputValidLength,
    ErrorToast,
    ErrorText,
} from './styles'

// Api key and spoonacular url
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

type SearchState = {
    searchValue: string
}

export const Search: FC = () => {
    // Focus state for input
    const [focusState, setFocusState] = useState(false)

    const [isMobile, setIsMobile] = useState(false)
    const [isErrorCharacters, setIsErrorCharacters] = useState(false)
    const [searchState, setSearchState] = useState<SearchState>({
        searchValue: '',
    })

    const { searchValue } = searchState

    const history = useHistory()

    const { state, dispatch } = useYummlyContext()

    // So we can append query params to the URL and also access them
    // Here we are using non null assertion, because typescript do not know if this env var could be undefined
    const url = new URL(apiURL!)

    const searchLengthValidation =
        searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchState({
            ...searchState,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async (event: FormEvent): Promise<void | number> => {
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
        url.searchParams.append('apiKey', apiKEY!)
        url.searchParams.append('query', searchValue)
        url.searchParams.append('number', '10')
        url.searchParams.append('addRecipeInformation', 'true')
        // url endpoint
        const urlEndpoint = url.origin + url.pathname + url.search
        //  request config
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        // fetch recipes
        return window.fetch(urlEndpoint, config).then(async (response) => {
            const data: SpoonacularResponse = await response.json()
            if (response.ok) {
                dispatch({ type: 'recipesResolved', payload: data.results })
                history.push('/recipes')
            } else {
                dispatch({ type: 'rejected', payload: data })
                history.push('/recipes')
            }
        })
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
                    <SearchInputValidLength
                        searchNumberLength={searchValue.length}
                    >
                        {searchLengthValidation}
                    </SearchInputValidLength>
                    <SearchButton isFocus={focusState} type="submit">
                        <SearchIcon />
                    </SearchButton>
                    {isErrorCharacters && (
                        <ErrorToast isError={isErrorCharacters}>
                            <ErrorText>
                                Please enter at least 3 characters.
                            </ErrorText>
                        </ErrorToast>
                    )}
                </SearchForm>
            </SearchInnerWrapper>
        </SearchWrapper>
    )
}

import React, { FC, useState } from 'react'
import {
    Pan,
    SearchInnerWrapper,
    SearchInput,
    SearchButton,
    SearchInputWrapper,
    SearchWrapper,
    Title,
    SearchIcon,
    TitleWrapper,
} from './styles'

export const Search: FC = () => {
    const [focusState, setFocusState] = useState(false)
    return (
        <SearchWrapper>
            <SearchInnerWrapper>
                <TitleWrapper>
                    <Title htmlFor="search">
                        Search Now and Start Cooking Today!
                    </Title>
                    <Pan />
                </TitleWrapper>
                <SearchInputWrapper>
                    <SearchInput
                        type="text"
                        placeholder="Search For Recipes....."
                        id="search"
                        onFocus={() => setFocusState(!focusState)}
                        onBlur={() => setFocusState(!focusState)}
                    />
                    <SearchButton isFocus={focusState}>
                        <SearchIcon />
                    </SearchButton>
                </SearchInputWrapper>
            </SearchInnerWrapper>
        </SearchWrapper>
    )
}

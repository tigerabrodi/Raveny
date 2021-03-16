import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as LoadingSpinner } from 'assets/spinner.svg'
import { ATOnlyText } from 'styles'

const Main = styled.main`
  position: relative;
  height: calc(100vh - 18rem);
`

const spin = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`

const spinnerStyles = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: ${({ theme }) => theme.colors.Orange};
  height: 20%;
  animation: ${spin} 0.5s linear infinite;
`

export const FullPage = styled(LoadingSpinner)`
  ${spinnerStyles}
  top: 30%;
`

export const LoadMore = styled(LoadingSpinner)`
  ${spinnerStyles}
  top: 50%;
  height: 70%;
`

export const LoadMoreSpinnerContainer = styled.div`
  grid-area: spinner;
  position: relative;
  width: 100%;
  height: 10rem;
`

export const FullPageSpinner = ({ loadingText }: { loadingText: string }) => (
  <Main>
    <ATOnlyText aria-live="assertive" role="alert">
      {loadingText}
    </ATOnlyText>
    <FullPage aria-hidden="true" />
  </Main>
)

export const LoadMoreSpinner = () => (
  <LoadMoreSpinnerContainer>
    <ATOnlyText aria-live="assertive" role="alert">
      Loading more recipes
    </ATOnlyText>
    <LoadMore aria-hidden="true" />
  </LoadMoreSpinnerContainer>
)

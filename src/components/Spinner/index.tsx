import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as LoadingSpinner } from 'assets/spinner.svg'

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

export const FullPageSpinner = () => (
  <Main>
    <FullPage aria-label="loading" />
  </Main>
)

export const LoadMoreSpinner = () => <LoadMore aria-label="loading" />

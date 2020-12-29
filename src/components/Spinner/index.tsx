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

export const Spinner = styled(LoadingSpinner)<{ isLoadMoreSpinner?: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  fill: ${({ theme }) => theme.colors.Orange};
  height: 20%;
  animation: ${spin} 0.5s linear infinite;
  ${(props) =>
    props.isLoadMoreSpinner &&
    css`
      top: 50%;
      height: 50%;
    `}
`

export const FullPageSpinner = () => (
  <Main>
    <Spinner aria-label="loading" />
  </Main>
)

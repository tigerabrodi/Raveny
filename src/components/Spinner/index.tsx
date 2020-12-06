import styled, { keyframes } from 'styled-components'
import { ReactComponent as LoadingSpinner } from 'assets/spinner.svg'

const Div = styled.div`
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

const StyledSpinner = styled(LoadingSpinner)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  fill: ${({ theme }) => theme.colors.Orange};
  height: 20%;
  animation: ${spin} 0.5s linear infinite;
`

export const Spinner = () => (
  <Div>
    <StyledSpinner />
  </Div>
)

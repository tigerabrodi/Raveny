import { ReactElement } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useHistory } from 'react-router-dom'
import { Button, ErrorFallbackWrapper, Title, Pre } from './styles'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <ErrorFallbackWrapper role="alert">
    <Title>Something went wrong:</Title>
    <Pre>{error?.message}</Pre>
    <Button onClick={resetErrorBoundary}>Go To Home</Button>
  </ErrorFallbackWrapper>
)

export const ErrorBoundaryProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const history = useHistory()
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        history.push('/')
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

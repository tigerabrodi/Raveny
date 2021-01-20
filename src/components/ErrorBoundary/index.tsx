import { ReactElement } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { Link, ErrorFallbackWrapper, Text, Pre } from './styles'

const ErrorFallback = ({ error }: FallbackProps) => (
  <ErrorFallbackWrapper role="alert">
    <Text>Something went wrong:</Text>
    <Pre>{error?.message}</Pre>
    <Link to="/">Go To Home</Link>
  </ErrorFallbackWrapper>
)

export const ErrorBoundaryProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}

import { ErrorBoundaryProvider } from '.'

const DummyError = () => {
  throw new Error(
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  )
}

export const ErrorBoundaryWithComponent = () => (
  <ErrorBoundaryProvider>
    <DummyError />
  </ErrorBoundaryProvider>
)

export default {
  component: ErrorBoundaryWithComponent,
  title: 'components/ErrorBoundaryComponent',
}

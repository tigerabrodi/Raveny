import { NotFoundLink, NotFoundMain, NotFoundTitle } from './styles'

export const NotFound = () => (
  <NotFoundMain>
    <NotFoundTitle>Page not found</NotFoundTitle>
    <NotFoundLink to="/">Home</NotFoundLink>
  </NotFoundMain>
)

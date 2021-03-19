import styled from 'styled-components/macro'

export const SkipLink = styled.a`
  position: absolute;
  top: -7rem;
  left: -1rem;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 3rem;
  text-decoration: none;
  text-shadow: none;
  color: black;
  background-color: ${({ theme }) => theme.colors.Orange};
  border: 0.2rem solid black;
  opacity: 0;
  &:focus {
    opacity: 1;
  }
`

type SkipToNavLinkProps = {
  targetId: string
  children: string
}

export const SkipToNavLink = ({ targetId, children }: SkipToNavLinkProps) => (
  <SkipLink href={`#${targetId}`}>{children}</SkipLink>
)

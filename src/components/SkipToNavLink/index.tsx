import styled from 'styled-components/macro'

export const SkipLink = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  targetId?: string
  children?: string
}

export const SkipToNavLink = ({
  targetId = 'navigation',
  children = 'Skip',
}: SkipToNavLinkProps) => (
  <SkipLink href={`#${targetId}`} aria-label="Skip to navigation">
    {children}
  </SkipLink>
)

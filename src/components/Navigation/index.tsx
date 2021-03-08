import { useRef, useState, useEffect } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import {
  HamburgerMenuLine,
  HamburgerMenuOverlay,
  HamburgerMenuWrapper,
  IntersectingElement,
  Link,
  LinkSection,
  LogoIcon,
  LogoLink,
  LogoWrapper,
  Nav,
} from './styles'

export const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false)
  const focusRef = useRef<HTMLAnchorElement | null>(null)

  const { isVisible, setIntersectingElement } = useOnScreen()

  useEffect(() => {
    /* Focus when toggled, relates to Keyboard Accessibility */
    if (focusRef.current !== null && isToggled) {
      focusRef.current.focus()
    }
  }, [isToggled])

  const toggleHamburgerMenu = () => setIsToggled(!isToggled)

  return (
    <>
      <IntersectingElement ref={setIntersectingElement} aria-hidden="true" />
      <Nav shouldShowShadow={!isVisible}>
        <LogoWrapper>
          <LogoLink to="/" onClick={() => setIsToggled(false)} ref={focusRef}>
            Raveny
          </LogoLink>
          <LogoIcon role="img" aria-label="Cooking pan." />
        </LogoWrapper>
        <LinkSection isToggled={isToggled}>
          <Link to="/search" onClick={() => setIsToggled(false)}>
            Search
          </Link>
          <Link to="/recipes/vegan" onClick={() => setIsToggled(false)}>
            Vegan
          </Link>
          <Link to="/recipes/high-protein" onClick={() => setIsToggled(false)}>
            High Protein
          </Link>
          <Link to="/recipes/low-carb" onClick={() => setIsToggled(false)}>
            Low Carb
          </Link>
        </LinkSection>
        <HamburgerMenuWrapper
          isToggled={isToggled}
          onClick={toggleHamburgerMenu}
          type="button"
          aria-label={
            isToggled ? 'Close Hamburger Menu' : 'Open Hamburger Menu'
          }
          aria-expanded={isToggled ? 'true' : 'false'}
        >
          <HamburgerMenuLine topToggled={isToggled} />
          <HamburgerMenuLine hideMiddle={isToggled} />
          <HamburgerMenuLine bottomToggled={isToggled} />
        </HamburgerMenuWrapper>
      </Nav>
      <HamburgerMenuOverlay isToggled={isToggled} />
    </>
  )
}

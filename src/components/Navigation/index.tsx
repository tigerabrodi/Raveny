import { useRef, useState, useEffect } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import { CookingSVG } from 'components/SVG/CookingSVG'
import {
  HamburgerMenuLine,
  HamburgerMenuOverlay,
  HamburgerMenuWrapper,
  IntersectingElement,
  Link,
  LinkSection,
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

  return (
    <>
      <IntersectingElement ref={setIntersectingElement} />
      <Nav shouldShowShadow={!isVisible}>
        <LogoWrapper>
          <LogoLink to="/" onClick={() => setIsToggled(false)} ref={focusRef}>
            Raveny
          </LogoLink>
          <CookingSVG height="60" width="60" />
        </LogoWrapper>
        <LinkSection isToggled={isToggled} role="group">
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
          onClick={() => setIsToggled(!isToggled)}
          type="button"
          aria-label={
            isToggled ? 'Close Hamburger Menu' : 'Open Hamburger Menu'
          }
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

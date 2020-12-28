import { useState } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import { CookingSVG } from 'components/SVG/CookingSVG'
import {
  HamburgerMenuLine,
  HamburgerMenuOverlay,
  HamburgerMenuWrapper,
  IntersectingDiv,
  Link,
  LinksWrapper,
  LogoLink,
  LogoWrapper,
  Nav,
} from './styles'

export const Navigation = () => {
  const [toggleState, setToggleState] = useState(false)

  const { isVisible, setIntersectingElement } = useOnScreen()

  return (
    <>
      <IntersectingDiv ref={setIntersectingElement} />
      <Nav shouldShowShadow={!isVisible}>
        <LogoWrapper>
          <LogoLink to="/" onClick={() => setToggleState(false)}>
            Raveny
          </LogoLink>
          <CookingSVG height="60" width="60" />
        </LogoWrapper>
        <LinksWrapper isToggled={toggleState} role="group">
          <Link to="/search" onClick={() => setToggleState(false)}>
            Search
          </Link>
          <Link to="/recipes/vegan" onClick={() => setToggleState(false)}>
            Vegan
          </Link>
          <Link
            to="/recipes/high-protein"
            onClick={() => setToggleState(false)}
          >
            High Protein
          </Link>
          <Link to="/recipes/low-carb" onClick={() => setToggleState(false)}>
            Low Carb
          </Link>
        </LinksWrapper>
        <HamburgerMenuWrapper
          isToggled={toggleState}
          onClick={() => setToggleState(!toggleState)}
          type="button"
          aria-label={
            toggleState ? 'Close Hamburger Menu' : 'Open Hamburger Menu'
          }
        >
          <HamburgerMenuLine topToggled={toggleState} />
          <HamburgerMenuLine hideMiddle={toggleState} />
          <HamburgerMenuLine bottomToggled={toggleState} />
        </HamburgerMenuWrapper>
      </Nav>
      <HamburgerMenuOverlay isToggled={toggleState} />
    </>
  )
}

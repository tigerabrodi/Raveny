import React, { FC, useState } from 'react'
import { CookingSVG } from 'components/SVG/CookingSVG'
import {
  HamburgerMenuLine,
  HamburgerMenuOverlay,
  HamburgerMenuWrapper,
  Link,
  LinksWrapper,
  LogoLink,
  LogoText,
  LogoWrapper,
  Nav,
} from './styles'

export const Navigation: FC = () => {
  const [toggleState, setToggleState] = useState(false)
  return (
    <>
      <Nav>
        <LogoWrapper>
          <LogoLink to="/" onClick={() => setToggleState(false)}>
            <LogoText>Raveny</LogoText>
          </LogoLink>
          <CookingSVG height="60" width="60" />
        </LogoWrapper>
        <LinksWrapper isToggled={toggleState}>
          <Link to="/search" onClick={() => setToggleState(false)}>
            Search
          </Link>
          <Link to="/recipes/keto" onClick={() => setToggleState(false)}>
            Ketogenic
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

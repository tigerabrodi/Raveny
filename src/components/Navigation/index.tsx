import { useRef, useState } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import { useTrapTabKey } from 'hooks/useTrapTabKey'
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

  const linkSectionRef = useRef<HTMLDivElement>(null)

  const { isVisible, setIntersectingElement } = useOnScreen()

  const { firstButtonElementRef } = useTrapTabKey({
    ref: linkSectionRef,
    setOpen: setIsToggled,
    pause: !isToggled,
  })

  const toggleHamburgerMenu = () => setIsToggled(!isToggled)

  return (
    <>
      <IntersectingElement ref={setIntersectingElement} aria-hidden="true" />
      <Nav shouldShowShadow={!isVisible}>
        <LogoWrapper>
          <LogoLink to="/" onClick={() => setIsToggled(false)}>
            Raveny
          </LogoLink>
          <LogoIcon role="img" aria-label="Cooking pan." />
        </LogoWrapper>
        <LinkSection isToggled={isToggled} ref={linkSectionRef}>
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
          ref={firstButtonElementRef}
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

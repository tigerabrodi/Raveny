import React, { FC, useState } from 'react'
import { CookingSVG } from 'components/CookingSVG'
import {
    HamburgerMenuLine,
    HamburgerMenuOverlay,
    HamburgerMenuWrapper,
    Link,
    LinksWrapper,
    LogoText,
    LogoWrapper,
    Nav,
} from './styles'

export const Navigation: FC = () => {
    const [toggleState, setToggleState] = useState(false)
    return (
        <>
            <Nav>
                <LogoWrapper to="/">
                    <LogoText>Yummly</LogoText>
                    <CookingSVG height="60" width="60" />
                </LogoWrapper>
                <LinksWrapper isToggled={toggleState}>
                    <Link to="/search">Search</Link>
                    <Link to="/keto">Ketogenic</Link>
                    <Link to="/vegan">Vegan</Link>
                    <Link to="/desserts">Desserts</Link>
                    <Link to="/wine">Wine</Link>
                </LinksWrapper>
                <HamburgerMenuWrapper
                    isToggled={toggleState}
                    onClick={() => setToggleState(!toggleState)}
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

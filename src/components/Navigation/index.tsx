import React, { FC, useState } from 'react'
import { CookingSVG } from 'components/SVG/CookingSVG'
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
                <LogoWrapper to="/" onClick={() => setToggleState(false)}>
                    <LogoText>Yummly</LogoText>
                    <CookingSVG height="60" width="60" />
                </LogoWrapper>
                <LinksWrapper isToggled={toggleState}>
                    <Link to="/search" onClick={() => setToggleState(false)}>
                        Search
                    </Link>
                    <Link to="/keto" onClick={() => setToggleState(false)}>
                        Ketogenic
                    </Link>
                    <Link to="/vegan" onClick={() => setToggleState(false)}>
                        Vegan
                    </Link>
                    <Link to="/desserts" onClick={() => setToggleState(false)}>
                        Desserts
                    </Link>
                    <Link to="/wine" onClick={() => setToggleState(false)}>
                        Wine
                    </Link>
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

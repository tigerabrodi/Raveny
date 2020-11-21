import styled from 'styled-components'
import { ReactComponent as NotFoundSVG404 } from 'assets/404.svg'
import { media } from 'theme/media'

export const NotFoundWrapper = styled.div`
  height: calc(100vh - 18rem);
  width: 100vw;
  position: relative;
`

export const NotFoundSVG = styled(NotFoundSVG404)`
  height: 100%;
  width: 95%;
  grid-area: svg;
  filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.Orange});
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet} {
    top: 40%;
    height: 80%;
    width: 80%;
  }
`

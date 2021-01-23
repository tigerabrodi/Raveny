import styled from 'styled-components'
import { ReactComponent as SadIcon } from 'assets/sad.svg'
import { media } from 'theme/media'

export const NotFoundMain = styled.main`
  height: calc(100vh - 18rem);
  width: 100vw;
  position: relative;
`

export const NotFoundSVG = styled(SadIcon)`
  height: 70%;
  width: 60%;
  filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.colors.Orange});
  fill: ${({ theme }) => theme.colors.Orange};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet} {
    top: 40%;
    height: 70%;
    width: 80%;
  }
`

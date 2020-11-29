import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme/media'
import { infoLabelStyles, labelStyles, labelWrapperStyles } from 'styles'

export const RecipeWrapper = styled(Link)`
  text-decoration: none;
  height: 40rem;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  border-radius: 2px;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    transform: translateY(-0.5rem) scale(1.01);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.Orange};
    background-color: rgba(221, 114, 48, 0.1);
  }
  ${media.phone} {
    height: 50rem;
    flex-basis: 50%;
  }
  ${media.tablet} {
    flex-basis: 35%;
  }
  ${media.desktop} {
    flex-basis: 30%;
    max-width: 35%;
  }
`

export const Title = styled.h1`
  filter: drop-shadow(2px 4px 6px black);
  font-size: 3rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Red};
  text-align: center;
`

export const Image = styled.img`
  box-shadow: 0 2px 5px black;
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  border-radius: 2px;
  height: 40%;
  max-width: 100%;
  ${media.phone} {
    max-width: 98%;
    height: 55%;
  }
  ${media.tablet} {
    max-width: 100%;
    height: 45%;
  }
  ${media.desktop} {
    height: 50%;
    max-width: 100%;
  }
`

// Info labels
export const Serving = styled.span`
  ${infoLabelStyles}
`

export const Calories = styled.span`
  ${infoLabelStyles}
`

// Label Wrapper
export const LabelWrapper = styled.div`
  ${labelWrapperStyles}
`

export const DietLabel = styled.span`
  ${labelStyles}
`

export const HealthLabel = styled.span`
  ${labelStyles}
`

// Caution
export const CautionWrapper = styled.div`
  ${labelWrapperStyles}
`

export const CautionLabel = styled.span`
  ${labelStyles}
  color: ${({ theme }) => theme.colors.Red};
`

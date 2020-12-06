import React, { ReactElement } from 'react'
import { NotFoundWrapper, NotFoundSVG } from './styles'

export const NotFound = (): ReactElement => {
  return (
    <NotFoundWrapper>
      <NotFoundSVG />
    </NotFoundWrapper>
  )
}

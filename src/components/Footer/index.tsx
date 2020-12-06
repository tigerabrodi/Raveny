import React, { ReactElement } from 'react'
import { HeartIcon, Text, TextLink, FooterWrapper } from './styles'

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <Text>
        Built with <HeartIcon /> by{' '}
        <TextLink href="https://github.com/tigerabrodi" target="_blank">
          Tiger Abrodi
        </TextLink>
      </Text>
    </FooterWrapper>
  )
}

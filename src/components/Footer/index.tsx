import React, { FC } from 'react'
import { HeartIcon, Text, TextLink, FooterWrapper } from './styles'

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Text>
        Built with <HeartIcon /> by{' '}
        <TextLink href="/" target="_blank">
          Tiger Abrodi
        </TextLink>
      </Text>
    </FooterWrapper>
  )
}

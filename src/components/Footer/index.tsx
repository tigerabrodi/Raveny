import React, { FC } from 'react'
import { HeartIcon, Text, TextLink, Wrapper } from './styles'

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Text>
                Built with <HeartIcon /> by{' '}
                <TextLink href="/" target="_blank">
                    Tiger Abrodi
                </TextLink>
            </Text>
        </Wrapper>
    )
}

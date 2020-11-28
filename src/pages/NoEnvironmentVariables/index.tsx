import React, { FC } from 'react'
import { DocLink, FileSpan, NoEnvVarWrapper, Text, TextWrapper } from './styles'

export const NoEnvironmentVariables: FC = () => {
  return (
    <NoEnvVarWrapper>
      <TextWrapper>
        <Text>
          Please, if you wanna further develop this app, create a{' '}
          <FileSpan>.env.development.local</FileSpan> file in root, with the
          keys documented here:{' '}
          <DocLink
            target="_blank"
            href="https://github.com/tigerabrodi/Raveny#installation"
          >
            https://github.com/tigerabrodi/Raveny#installation
          </DocLink>
        </Text>
      </TextWrapper>
    </NoEnvVarWrapper>
  )
}

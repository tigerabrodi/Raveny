import { Heart, Text, TextLink, FooterWrapper } from './styles'

export const Footer = () => (
  <FooterWrapper>
    <Text>
      Built with <Heart title="Heart" role="img" /> by{' '}
      <TextLink href="https://github.com/tigerabrodi" target="_blank">
        Tiger Abrodi
      </TextLink>
    </Text>
  </FooterWrapper>
)

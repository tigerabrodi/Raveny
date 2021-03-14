import { Heart, Text, TextLink, FooterWrapper, External } from './styles'

export const Footer = () => (
  <FooterWrapper>
    <Text>
      Built with <Heart aria-label="Love" role="img" /> by{' '}
      <TextLink href="https://github.com/tigerabrodi" target="_blank">
        Tiger Abrodi
        <External aria-hidden="true" />
      </TextLink>
    </Text>
  </FooterWrapper>
)

import App from 'App'
import { render, screen } from 'test/utils'

test('should allow simple user search flow', () => {
  render(<App />)
  screen.debug()
})

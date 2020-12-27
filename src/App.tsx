import { Route, Switch } from 'react-router-dom'
import { AppProviders } from 'context'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Recipes } from 'pages/Recipes'
import { NotFound } from 'pages/NotFound'
import { NoEnvironmentVariables } from 'pages/NoEnvironmentVariables'
import { Vegan } from 'pages/Vegan'
import { HighProtein } from 'pages/HighProtein'
import { LowCarb } from 'pages/LowCarb'

const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

const App = () => (
  <AppProviders>
    <>
      <Navigation />
      {!apiURL && !apiKEY ? (
        <NoEnvironmentVariables />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/vegan" component={Vegan} />
          <Route exact path="/recipes/low-carb" component={LowCarb} />
          <Route exact path="/recipes/high-protein" component={HighProtein} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      )}
      <Footer />
    </>
  </AppProviders>
)

export default App

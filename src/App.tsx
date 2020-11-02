import React, { FC } from 'react'
import { AppProviders } from 'context'
import { Home } from 'pages/Home'
import { Route, Switch } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

const App: FC = () => (
    <AppProviders>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </AppProviders>
)

export default App

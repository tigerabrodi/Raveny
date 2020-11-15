import React, { FC } from 'react'
import { AppProviders } from 'context'
import { Route, Switch } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Recipes } from 'pages/Recipes'
import { NotFound } from 'pages/NotFound'

const App: FC = () => (
    <AppProviders>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
    </AppProviders>
)

export default App

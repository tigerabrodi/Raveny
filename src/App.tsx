import React, { FC } from 'react'
import { AppProviders } from 'context'
import { Home } from 'pages/Home'
import { Route, Switch } from 'react-router-dom'

const App: FC = () => (
    <AppProviders>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </AppProviders>
)

export default App

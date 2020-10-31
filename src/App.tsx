import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppProviders } from 'context'
import { Home } from 'pages/Home'

const App: React.FC = () => (
    <AppProviders>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </AppProviders>
)

export default App

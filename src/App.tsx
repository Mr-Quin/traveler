import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Warp from './routes/Warp'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}>
                    <Home />
                </Route>
                <Route exact path={process.env.PUBLIC_URL + '/warp'}>
                    <Warp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Warp from './routes/Warp'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/traveler">
                    <Home />
                </Route>
                <Route exact path="/traveler/warp">
                    <Warp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

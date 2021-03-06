import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Warp from './routes/Warp'

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            {/*<Switch>*/}
            {/*    <Route exact path={'/traveler'}>*/}
            {/*        <Home />*/}
            {/*    </Route>*/}
            {/*    <Route exact path={'/warp'}>*/}
            {/*        <Warp />*/}
            {/*    </Route>*/}
            <Route>
                <Warp />
            </Route>
            {/*</Switch>*/}
        </Router>
    )
}

export default App

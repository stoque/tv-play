import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import SplashPage from './pages/splash'
import HomePage from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/">
          <SplashPage />
        </Route>
      </Switch>
    </Router>
  )
}


export default App

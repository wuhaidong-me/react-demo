import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Provider } from 'react-redux'

import store from './store'

import Demo from '../demo/'
import Home from '../home/'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
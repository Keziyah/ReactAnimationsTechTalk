'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import App from './components/App'
import Home from './components/Home'
import Practice5 from './components/Practice5'
import FadesUp from './components/FadesUp'
import Results from './components/Results'
import Page from './components/Page'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/page" component={Page} />
          <Route path='*' component={NotFound} /> 
      </Route>
    </Router>,
  document.getElementById('main')
)



'use strict'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

import Hello from './Hello'
import NoRd from './NoRd'
import Rd from './Rd'
import Error from './Error'
import '../src/style.css'

const App = () => {  // no need class comp. here
   return (
      <div> {/* will get wrapped in BrowserRouter in index.js */}
         <Navigation />
         <Switch> {/* Switch makes sure only one path gets displayed at once */}
            <Route path='/' exact component={Hello} /> {/* will render first matching route */}
            <Route path='/states' component={NoRd} />
            <Route path='/redux' component={Rd} />
            <Route component={Error} />
         </Switch>
      </div>
   )
}


export default App
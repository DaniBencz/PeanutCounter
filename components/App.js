'use strict'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

import Hello from './Hello'
import NoRd from './NoRd'
import Rd from './Rd'
import Error from './Error'
import '../src/style.css'

class App extends Component {

   render() {
      return (
         <BrowserRouter>
            <Navigation />
            <Switch> {/* Switch makes sure only one path gets displayed at once */}
               <Route path='/' exact component={Hello} /> {/* will render first matching route */}
               <Route path='/states' component={NoRd} />
               <Route path='/redux' component={Rd} />
               <Route component={Error} />
            </Switch>
         </BrowserRouter>
      )
   }
}
export default App
'use strict'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Navigation from './Navigation'

import Hello from './Hello'
import NoRd from './NoRd'
import Error from './Error'
import '../src/style.css'

class App extends Component {

   render() {
      return (
         <div>
            <BrowserRouter>
               {/* <Navigation></Navigation> */}
               <div>
                  <Route path="/"><Hello/></Route>
                  {/* <Route path="/about" component={NoRd} /> */}
                  <Route path="/about"><NoRd></NoRd></Route>
                  <Route component={Error} />
               </div>
            </BrowserRouter>
            {/* <NoRd></NoRd> */}
         </div>
      )
   }
}
export default App
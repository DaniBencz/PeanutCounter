'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div>
    <NavLink className='navlink' activeClassName='selected' exact to="/">Home</NavLink>
    <NavLink className='navlink' activeClassName='selected' to="/states">States</NavLink>
    <NavLink className='navlink' activeClassName='selected' to="/redux">Redux</NavLink>
  </div>
)

export default Navigation // to App


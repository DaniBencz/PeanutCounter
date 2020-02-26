'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div>
    <NavLink className='navlink' to="/">Home</NavLink>
    <NavLink className='navlink' to="/states">States</NavLink>
    <NavLink className='navlink' to="/redux">Redux</NavLink>
  </div>
)

export default Navigation // to App


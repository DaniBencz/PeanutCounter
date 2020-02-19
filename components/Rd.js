'use strict'

import React from 'react'
import KeyEventRegister from '../containers/keyRegister'
import BuyPeanut from '../containers/buyPeanut'
//import Display from '../containers/display'
//import EatPeanut from '../containers/eatPeanut'

const Rd = () => (
  <div className='inner'>
    <p>Redux App</p>
    <KeyEventRegister />
    <BuyPeanut />
    {/* <Display />
    <EatPeanut /> */}
  </div>
);
//exports to app
export default Rd
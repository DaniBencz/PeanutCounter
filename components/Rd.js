'use strict'

import React from 'react'
import KeyEventRegister from '../containers/keyRegister'
import BuyPeanut from '../containers/buyPeanut'
import DispCont from '../containers/displayCont'
import EatPeanut from '../containers/eatPeanut'

const Rd = () => (
  <div className='inner'>
    <p>Redux App</p>
    <KeyEventRegister />
    <BuyPeanut />
    <DispCont />
    <EatPeanut />
  </div>
);
//exports to app
export default Rd
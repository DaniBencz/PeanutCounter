'use strict'

import React from 'react'
import KeyEventRegister from '../containers/keyRegister'
import BuyAcorn from '../containers/buyPeanut'
//import Display from '../containers/display'
//import EatAcorn from '../containers/eatAcorn'

const Rd = () => (
  <div className='inner'>
    <p>Redux App</p>
    <KeyEventRegister />
    <BuyAcorn />
    {/* <Display />
    <EatAcorn /> */}
  </div>
);
//exports to app
export default Rd
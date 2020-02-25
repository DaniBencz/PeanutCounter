'use strict'

const buyAction = value => {  // using action creators, parameters can be passed
  return {  // actions are plain objects
    type: 'INCREASE_PEANUTS',
    peanut: value
  }
}

const eatAction = value => {
  return {
    type: 'DECREASE_PEANUTS',
    peanut: value
  }
}

export { buyAction, eatAction } // to buyPeanut, eatPeanut, keyRegister
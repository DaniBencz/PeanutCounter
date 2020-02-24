'use strict'

// actions must be plain objects, but
// as a function's return value, we can pass on parameters
const buyAction = value => {
  return {
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
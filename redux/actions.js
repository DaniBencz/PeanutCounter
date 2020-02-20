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

//exports to buyPeanut, eatPeanut, keyRegister
export { buyAction, eatAction }
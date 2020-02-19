'use strict'

// actions must be plain objects, but
// as a function's return value, we can pass on parameters
const buyAction = value => {
  return {
    type: 'INCREASE_ACORNS',
    acorn: value
  }
}

const eatAction = value => {
  return {
    type: 'DECREASE_ACORNS',
    acorn: value
  }
}

//exports to buyPeanut, eatPeanut, keyRegister
export { buyAction, eatAction }
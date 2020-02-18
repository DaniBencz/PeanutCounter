'use strict'

//'actions must be plain objects'
function boughtPeanut(value) {
  return {
    type: 'INCREASE_ACORNS',
    acorn: value
  }
}

function atePeanut(value) {
  return {
    type: 'DECREASE_ACORNS',
    acorn: value
  }
}

//exports to buyAcorn, eatAcorn, keyRegister
export { boughtPeanut, atePeanut }
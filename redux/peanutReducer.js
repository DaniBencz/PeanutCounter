'use strict'

const initState = {
  peanuts: 0
}

const peanutReducer = (state = initState, action) => {
  if (action.type === 'INCREASE_PEANUTS') {
    return {
      ...state,
      peanuts: state.peanuts + action.peanut,
      lastAccess: new Date()
    }
  } else if (action.type === 'DECREASE_PEANUTS' && state.peanuts > 0) {
    return Object.assign({}, state, { peanuts: state.peanuts - action.peanut })
    //no timestamp here
  }
  return state
}

export default peanutReducer  // to rootReducer
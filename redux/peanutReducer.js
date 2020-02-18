'use strict'

const initState = {
  peanuts: 0
}

function peanutReducer(state = initState, action) {
  if (action.type === 'INCREASE_PEANUTS') {
    return {
      ...state,
      acorns: state.acorns + action.acorn,
      lastAccess: new Date()
    }
  } else if (action.type === 'DECREASE_PEANUTS' && state.acorns > 0) {
    return Object.assign({}, state, { acorns: state.acorns - action.acorn })
    //no timestamp here
  }
  return state
}

//export to rootReducers
export default peanutReducer
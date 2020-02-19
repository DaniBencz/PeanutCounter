'use strict'

import { combineReducers } from 'redux'
import peanutReducer from './peanutReducer'

const rootReducer = combineReducers({
  peanutReducer
})

//exports to store
export default rootReducer
'use strict'

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'  // for browser inspection
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store  // to keyRegister
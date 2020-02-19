'use strict'

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

//exports to keyRegister
export default store
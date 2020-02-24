'use strict'

import React from 'react'
import store from '../redux/store'

import { buyAction } from '../redux/actions'
import { eatAction } from '../redux/actions'

class KeyEventRegister extends React.Component {

  constructor(props){ //don't need props, but inheritence dictates it
    super(props)
    this.keyStroke = this.keyStroke.bind(this)
  }
  render() {  //we don't render anything
    return null
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke)
    console.log('keyStroke() mounted')
  }
  componentWillUnmount(){
    console.log('keyStroke() unmounted')
    window.removeEventListener('keydown', this.keyStroke)
  }
  keyStroke(e) {
    if (e.keyCode === 38) {
      store.dispatch(buyAction(1))
    } else if (e.keyCode === 40) {
      store.dispatch(eatAction(1))
    }
  }
}

export default KeyEventRegister // to Rd
'use strict'

import React from 'react'

const Button = props => {
  const { change, text } = props
  return <button onClick={change}>{text}</button>
}

export default Button
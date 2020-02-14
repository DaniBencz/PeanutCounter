'use strict'

import React from 'react'

const Display = props => {
  return (
    <div className="counter">
      {props.children}
    </div>
  )
}

export default Display
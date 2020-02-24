'use strict'

import React from 'react'
import Button from './Button'
import Display from './Dispaly'

class NoRd extends React.Component {
  constructor(props) {
    super(props)
    this.state = { peanuts: 0 }
    this.buyPeanut = this.buyPeanut.bind(this)
    this.eatPeanut = this.eatPeanut.bind(this)
    // this.keyStroke = this.keyStroke.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke)
  }

  keyStroke = e => {   //using => to skip manual binding
    if (e.keyCode === 38) {
      console.log('up')
      this.buyPeanut()
    } else if (e.keyCode === 40) {
      console.log('down')
      this.eatPeanut()
    }
  }

  buyPeanut(e) {
    this.setState(prevState => ({ peanuts: prevState.peanuts + 1 }))
  }

  myCallback() {
    console.log('state is set')
  }

  eatPeanut(e) {
    if (this.state.peanuts > 1) {
      //this.setState({ peanuts: this.state.peanuts - 1 }, () => { this.myCallback() })
      //prevState is for linear execution
      this.setState(prevState => ({ peanuts: prevState.peanuts - 1 }))
    }
  }

  render() {
    return (
      <div className='inner'>
        <p>Regular State</p>
        <Button change={this.buyPeanut} text="Get one" />
        {/* containment */}
        <Display peanuts={this.state.peanuts} />
        <Button change={this.eatPeanut} text="Take one" />
      </div>
    )
  }
}

export default NoRd
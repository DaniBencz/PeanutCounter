'use strict'

import React from 'react'
import Button from './Button'
import Display from './Dispaly'

class NoRd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peanuts: 0 };
    this.buyPeanut = this.buyPeanut.bind(this);
    this.eatPeanut = this.eatPeanut.bind(this);
    this.keyStroke = this.keyStroke.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke);
  }

  keyStroke(e) {
    if (e.keyCode === 38) {
      console.log('up')
      this.buyPeanut();
    } else if (e.keyCode === 40) {
      console.log('down')
      this.eatPeanut()
    }
  }

  //using => to skip manual binding need further dependencies
  buyPeanut(e) {
    this.setState(prevState => ({ peanuts: prevState.peanuts + 1 }))
  }

  myCallback() {
    console.log('state is set')
  }

  eatPeanut(e) {
    if (this.state.peanuts > 1) {
      //this.setState({ peanuts: this.state.peanuts - 1 }, () => { this.myCallback() });
      //prevState is for linear execution
      this.setState(prevState => ({ peanuts: prevState.peanuts - 1 }))
    }
    //console.log(this.state.peanuts);
  }

  render() {
    return (
      <div className='inner'>
        <p>State App</p>
        <Button change={this.buyPeanut} text="Get one" />
        {/* containment */}
        <Display>{this.state.peanuts}</Display>
        <Button change={this.eatPeanut} text="Take one" />
      </div>
    )
  }
}

export default NoRd;
'use strict'

import React from 'react'
import Button from './Button'
import Display from './Dispaly'

class NoRd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acorns: 0 };
    this.buyAcorn = this.buyAcorn.bind(this);
    this.eatAcorn = this.eatAcorn.bind(this);
    this.keyStroke = this.keyStroke.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyStroke);
  }

  keyStroke(e) {
    if (e.keyCode === 38) {
      console.log('up')
      this.buyAcorn();
    } else if (e.keyCode === 40) {
      console.log('down')
      this.eatAcorn()
    }
  }

  //using => to skip manual binding need further dependencies
  buyAcorn(e) {
    this.setState(prevState => ({ acorns: prevState.acorns + 1 }))
  }

  myCallback() {
    console.log('state is set')
  }

  eatAcorn(e) {
    if (this.state.acorns > 1) {
      //this.setState({ acorns: this.state.acorns - 1 }, () => { this.myCallback() });
      //prevState is for linear execution
      this.setState(prevState => ({ acorns: prevState.acorns - 1 }))
    }
    //console.log(this.state.acorns);
  }

  render() {
    return (
      <div className='inner'>
        <p>State App</p>
        <Button change={this.buyAcorn} text="Get one" />
        {/* containment */}
        <Display>{this.state.acorns}</Display>
        <Button change={this.eatAcorn} text="Take one" />
      </div>
    )
  }
}

export default NoRd;
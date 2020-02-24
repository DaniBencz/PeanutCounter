'use strict'

import Display from '../components/Dispaly'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    peanuts: state.peanutReducer.peanuts
  }
}

const DispCont = connect(
  mapStateToProps
)(Display)

// exports to Rd.js
export default DispCont
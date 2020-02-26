'use strict'

import { connect } from 'react-redux'
import { buyAction } from '../redux/actions'
import Button from '../components/Button'

const mapStateToProps = (/* state */) => {
  /* return {
    text: 'Buy one'
  } */

  let props = {}
  props.text = 'Buy one'
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {  // props
    change: () => {
      dispatch(buyAction(1))
    }
  }
}

const BuyPeanut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default BuyPeanut  //to Rd
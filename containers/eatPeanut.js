'use strict'

import { connect } from 'react-redux'
import { eatAction } from '../redux/actions'
import Button from '../components/Button'

const mapStateToProps = () => {
  return {
    text: 'Eat one'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(eatAction(1))
    }
  }
}

const EatPeanut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

//exports to Rd
export default EatPeanut
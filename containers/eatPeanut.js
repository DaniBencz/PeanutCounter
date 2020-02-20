'use strict'

import { connect } from 'react-redux'
import { buyAction } from '../redux/actions'
import Button from '../components/Button'

const mapStateToProps = () => {
  return {
    text: 'Eat one'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(buyAction(1))
    }
  }
}

/* const Button = props => {
  const { change, text } = props
  return <button onClick={change}>{text}</button>
} */

const EatPeanut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

//exports to Rd
export default EatPeanut
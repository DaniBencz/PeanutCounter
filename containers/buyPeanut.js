'use strict'

import { connect } from 'react-redux'
import { buyAction } from '../redux/actions'
import Button from '../components/Button'

const mapStateToProps = () => {
  return {
    value: 'Buy one'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(buyAction(1))
    }
  };
};

const BuyPeanut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

//exports to Rd
export default BuyPeanut
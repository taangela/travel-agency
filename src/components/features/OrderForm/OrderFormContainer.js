import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption, resetOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch =>({
  setOrderOption: option =>dispatch(setOrderOption(option)),
  resetOrderOption: option =>dispatch(resetOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
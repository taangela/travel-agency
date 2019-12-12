import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

//import styles from './OrderForm.scss';

const OrderForm = ({tripCost,setOrderOption, ...options}) => {
  return (
    <Row>
      {pricing.map((option, optionId) => (
        <Col md={4} key={optionId}>
          <OrderOption {...option} currentValue={options[optionId]} setOrderOption={setOrderOption}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} {...options}/>
      </Col>
    </Row>
  );
};
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};
export default OrderForm;
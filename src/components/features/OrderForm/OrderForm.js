import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

//import styles from './OrderForm.scss';

const OrderForm = ({ tripCost, ...options }) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} {...options}/>
    </Col>
  </Row>
);

  
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
  
export default OrderForm;
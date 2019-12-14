import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionNumber = ({currentValue, limits, setOptionValue,price}) => (
  <div className = {styles.number}>
    <input 
      type='number'
      className={styles.inputSmall} 
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    <span>({formatPrice(price)})</span>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.array,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};


export default OrderOptionNumber;
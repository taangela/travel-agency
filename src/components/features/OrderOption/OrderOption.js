import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown  from './OrderOptionDropdown.js';
import OrderOptionIcons  from './OrderOptionIcons.js';
import OrderOptionNumber  from './OrderOptionNumber';
import OrderOptionCheckboxes  from './OrderOptionCheckboxes';
import PropTypes from 'prop-types';


const optionTypes = {
  checkboxes: OrderOptionCheckboxes,
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  number: OrderOptionNumber,
};
  
const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};
  
OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;
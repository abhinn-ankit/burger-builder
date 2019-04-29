import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.scss';

const order = props => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1) </p>
      <p>
        Price: <strong>USD 5.45</strong>
      </p>
    </div>
  );
};

order.propTypes = {};

export default order;

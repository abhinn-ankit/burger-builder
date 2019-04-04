import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey} style={{ textTransform: 'capitalize' }}>
        <span>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>You order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
};

export default orderSummary;

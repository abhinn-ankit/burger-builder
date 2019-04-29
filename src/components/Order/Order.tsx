import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.scss';

const order = props => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad (1) </p>
            <p>
                Price: <strong>USD {props.price.toFixed(2)}</strong>
            </p>
        </div>
    );
};

order.propTypes = {
    price: PropTypes.number,
    ingredients: PropTypes.object,
};

export default order;

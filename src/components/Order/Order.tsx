import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.module.scss';

const order = props => {
    const ingredients = [];
    for (const ingredientName in props.ingredients) {
        ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
    }

    const ingredientOutput = ingredients.map(ig => (
        <span
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '',
                border: '1px solid #ccc',
                padding: '5px',
            }}
        >
            {ig.name} (ig.amount)
        </span>
    ));
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
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

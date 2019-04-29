import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildContols.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad',
    },
    {
        label: 'Bacon',
        type: 'bacon',
    },
    {
        label: 'Cheese',
        type: 'cheese',
    },
    {
        label: 'Meat',
        type: 'meat',
    },
];

const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>
                Current price: <strong>{props.price.toFixed(2)}</strong>
            </p>
            {controls.map(control => {
                return (
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        added={props.ingredientAdded.bind(null, control.type)}
                        removed={props.ingredientRemoved.bind(null, control.type)}
                        disabled={props.disabled[control.type]}
                    />
                );
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
                ORDER NOW
            </button>
        </div>
    );
};

buildControls.propTypes = {
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    price: PropTypes.number,
    ordered: PropTypes.func,
    purchasable: PropTypes.bool,
    disabled: PropTypes.shape({
        salad: PropTypes.bool,
        bacon: PropTypes.bool,
        cheese: PropTypes.bool,
        meat: PropTypes.bool,
    }),
};

export default buildControls;

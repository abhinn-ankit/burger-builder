import React from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>
                CONTINUE
            </Button>
        </div>
    );
};

checkoutSummary.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        bacon: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number,
    }),
    checkoutCancelled: PropTypes.func,
    checkoutContinued: PropTypes.func,
};

export default checkoutSummary;

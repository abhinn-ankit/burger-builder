import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends Component<any, any> {
    static propTypes;

    componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void {
        console.log('Order summary will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey} style={{ textTransform: 'capitalize' }}>
                    <span>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });
        return (
            <Aux>
                <h3>You order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

OrderSummary.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
    purchaseCancelled: PropTypes.func,
    purchaseContinued: PropTypes.func,
};

export default OrderSummary;

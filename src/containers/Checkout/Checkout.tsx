import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component<Route, any> {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  componentDidMount(): void {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (const param of query) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({
      ingredients,
    });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;

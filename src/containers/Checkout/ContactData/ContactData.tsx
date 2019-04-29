import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import { Route } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component<IProps & Route, any> {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code',
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'input',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { values: 'cheapest', displayValue: 'Cheapest' },
                    ],
                },
                value: '',
            },
        },
        loading: false,
    };

    orderHandler = () => {
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };
        axios
            .post('/orders.json', order)
            .then(res => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    };

    render() {
        const formElements = Object.keys(this.state.orderForm)
            .map(key => {
                return {
                    id: key,
                    config: this.state.orderForm[key],
                };
            })
            .map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                />
            ));
        let form = (
            <form>
                {formElements}
                <Button btnType="Success" clicked={this.orderHandler}>
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

interface IIngredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

interface IProps {
    ingredients: IIngredients;
    price: number;
}

export default ContactData;

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
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ],
                },
                value: '',
                valid: true,
                validation: {},
            },
        },
        formIsValid: false,
        loading: false,
    };

    orderHandler = event => {
        event.preventDefault();
        const formData = {};
        Object.keys(this.state.orderForm).forEach(key => {
            formData[key] = this.state.orderForm[key].value;
        });
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
        };
        axios
            .post('/orders.json', order)
            .then(res => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    loading: false,
                });
            });
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (rules) {
            if ('required' in rules) {
                isValid = value.trim() !== '' && isValid;
            }
            if ('minLength' in rules) {
                isValid = value.length >= rules.minLength && isValid;
            }
            if ('maxLength' in rules) {
                isValid = value.length <= rules.maxLength && isValid;
            }
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (const inputIdentifiers in updatedOrderForm) {
            if ('valid' in updatedOrderForm[inputIdentifiers]) {
                console.log(updatedOrderForm[inputIdentifiers].valid);
                formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid;
            }
        }
        console.log(formIsValid);

        this.setState({
            orderForm: updatedOrderForm,
            formIsValid,
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
                    shouldValidatie={formElement.config.validation}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={event => this.inputChangedHandler(event, formElement.id)}
                />
            ));
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElements}
                <Button btnType="Success" disabled={!this.state.formIsValid}>
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

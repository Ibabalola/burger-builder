import axios from '../../../axios-order';
import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import styles from './ContactData.module.css';

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    // .preventDefault() has been used here to stop the form sending a 
    // a request which reloads the page
    orderHandler = (event) => {
        event.preventDefault();

        console.log('[ContactData.js] Contact Buttons clicked', this.props.ingredients);

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Isaac Babalola',
                address: {
                    street: 'TestStreet',
                    postCode: 'NE7 7YH',
                    country: 'England'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        // Http Ajax call
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your Name"></input>
                <input className={styles.Input} type="email" name="email" placeholder="Your E-Mail"></input>
                <input className={styles.Input} type="text" name="street" placeholder="Your Street Name"></input>
                <input className={styles.Input} type="text" name="postal" placeholder="Your Postal Address"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}
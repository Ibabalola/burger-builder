import React, { Component } from 'react';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';

export default withErrorHandler(class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                console.log('[Orders.js] - data ', response.data);

                // JSON Object to Array Conversion
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render() {
        // Outputting orders with JSX
        return (
            <div>
                {this.state.orders.map(order => {
                    return (<Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        totalPrice={order.price}/>);
                })}
            </div>
        );
    }
}, axios);
import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

export default ( WrappedComponent, axios ) => {
    // No class name is mentioned here because this is a class factory
    // So this has been set up as an anonymous class
    // this is never used
    return class extends Component {

        // placing code here means that code will executed 
        // before the child / internal components are rendered
        constructor (props) {
            super(props);

            this.reqInteceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        state = {
            error: null 
        }

        // In order to prevent memory leaks we need to stop the 
        // request and response inteceptors
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.response.eject(this.resInteceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error} 
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
} 
import React , { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

export default class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
            <SideDrawer 
                isOpen={this.state.showSideDrawer} 
                close={this.sideDrawerCloseHandler}
            />
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}; 


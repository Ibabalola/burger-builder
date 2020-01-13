import React from 'react';

import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './SideDrawer.module.css';

export default (props) => {
    // add conditional CSS classes for animation when draw is shown
    let attachedStyles = [styles.SideDrawer, styles.Close];
    if (props.isOpen) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.isOpen} clicked={props.close}/>
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>  
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
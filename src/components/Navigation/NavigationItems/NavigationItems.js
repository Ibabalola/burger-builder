import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.css';

export default () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);
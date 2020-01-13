import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';
import styles from './Toolbar.module.css';

export default (props) => (
    <header className={styles.Toolbar}>
        <SideDrawerToggle clicked={props.openSideDrawer} />
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
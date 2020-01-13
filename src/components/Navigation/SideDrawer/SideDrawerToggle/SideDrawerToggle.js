import React from 'react';

import styles from './SideDrawerToggle.module.css';

export default (props) => (
    <div className={styles.SideDrawerToggle} onClick={props.clicked}>MENU</div>
);
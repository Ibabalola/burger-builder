import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

export default (props) => (
    <li className={styles.NavigationItem}>
        <NavLink activeClassName={styles.active} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
);
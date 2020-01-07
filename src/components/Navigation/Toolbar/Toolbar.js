import React from 'react';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.module.css';

export default (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);
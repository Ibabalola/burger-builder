import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import styles from './Layout.module.css';

export default ( props ) => (
    <Aux>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
); 
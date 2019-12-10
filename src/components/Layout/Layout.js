import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

export default ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
); 
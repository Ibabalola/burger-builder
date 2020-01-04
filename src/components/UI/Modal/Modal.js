import React from 'react';

import styles from './modal.module.css';

export default (props) => (
    <div className={styles.Modal}>
        {props.children}
    </div>
);
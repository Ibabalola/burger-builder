import React from 'react';

import styles from './modal.module.css';

export default (props) => (
    <div 
        className={styles.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);
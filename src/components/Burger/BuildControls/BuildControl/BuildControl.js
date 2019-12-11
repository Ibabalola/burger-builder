import React from 'react';

import styles from './BuildControl.module.css';

export default props => (
    <div>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
);
import React from 'react';

export default (props) => (
    <button
        onClick={props.clicked}
        >{props.children}</button>
);
import React from 'react';
import { Button as SButton } from 'semantic-ui-react';
import './Button.css';

const Button = props => {

    return (
        <SButton
            className={props.primary ? "button-primary" : ""}
            {...props}
        />
    )
}

export default Button
import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    primary: PropTypes.bool
};

export default Button;
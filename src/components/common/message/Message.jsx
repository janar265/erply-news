import React from 'react'
import PropTypes from 'prop-types';
import { Message as SMessage } from 'semantic-ui-react';

const Message = props => {

    return (
        <SMessage
            error={props.type === "error"}
            success={props.type === "success"}
            info={props.type === "info"}
            {...props}
        />
    )
}

Message.propTypes = {
    type: PropTypes.string.isRequired
}

export default Message

import React from 'react'
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

export default Message

import React, { useEffect } from 'react';
import Message from '../message/Message';

const Notification = ({ type, message, onClose, id, duration }) => {

    useEffect(() => {
        setTimeout(() => {
            onClose(id);
        }, duration);
    }, [duration, id, onClose]);



    return (
        <Message
            type={type}
            className="notification"
            content={message} />
    )
}

export default Notification;

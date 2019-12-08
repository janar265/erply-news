import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';

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

Notification.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired
};

export default Notification;

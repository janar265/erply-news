import React from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../../../data/redux/ui/uiActions';
import Notification from './Notification';
import './notification.css'

const NotificationContainer = ({ hideNotification, notifications }) => {
    const handleClose = (id) => {
        hideNotification(id);
    }

    if (notifications.length === 0) {
        return null;
    }

    return (
        <div className="notification-container">
            {notifications.map(n => {
                return <Notification key={n.id} id={n.id} message={n.message} type={n.type} closeable={n.closeable} duration={n.duration} onClose={handleClose} />
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    notifications: state.ui.notifications
});

export default connect(mapStateToProps, { hideNotification })(NotificationContainer);

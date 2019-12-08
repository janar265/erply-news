import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUiLoading, showNotification } from '../../../data/redux/ui/uiActions';
import { patchUser } from '../../../data/redux/auth/authActions';
import { Notification } from '../../common/notification/api/Notification';
import userService from '../../../data/services/user/userService';
import Profile from './Profile';
import './Profile.css';

const ProfileContainer = ({ uiLoading, setUiLoading, showNotification, patchUser }) => {

    useEffect(() => {
        fetchUserData();
    }, []);

    const [isLoading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        apiKey: ''
    });

    const fetchUserData = async () => {
        setUiLoading(true);
        try {
            const user = await userService.fetchUserData();
            setUserData(user);
            setUiLoading(false);
        } catch (error) {
            showNotification(new Notification("Couldn't load user information", "error", 3000));
            setUiLoading(false);
        }
    }

    const handleUserInfoSubmit = async () => {
        setLoading(true);
        try {
            await patchUser(userData);
            showNotification(new Notification("Saved user information", "success", 3000));
            setLoading(false);
        } catch (error) {
            showNotification(new Notification("Couldn't save user information", "error", 3000));
            setLoading(false);
        }
    }

    const handleUserInfoChange = (name, value) => setUserData({ ...userData, [name]: value })

    return (
        <div className="profile-container">
            <Profile
                user={userData}
                onChange={handleUserInfoChange}
                onSubmit={handleUserInfoSubmit}
                isUiLoading={uiLoading}
                isLoading={isLoading} />
        </div>
    )
}

ProfileContainer.propTypes = {
    uiLoading: PropTypes.bool.isRequired,
    setUiLoading: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
    patchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    uiLoading: state.ui.loading
})

export default connect(mapStateToProps, { setUiLoading, showNotification, patchUser })(ProfileContainer);

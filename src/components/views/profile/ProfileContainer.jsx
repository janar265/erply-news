import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import userService from '../../../data/services/user/userService';
import Profile from './Profile';
import { setUiLoading, showNotification } from '../../../data/redux/ui/uiActions';
import { patchUser } from '../../../data/redux/auth/authActions';
import { Notification } from '../../common/notification/api/Notification';
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
            console.log(error);
            setUiLoading(false);
        }
    }

    const handleUserInfoChange = (name, value) => setUserData({ ...userData, [name]: value })

    const handleUserInfoSubmit = async () => {
        setLoading(true);
        try {
            await patchUser(userData);
            showNotification(new Notification("SAVED!", "success", 3000));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

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

const mapStateToProps = state => ({
    uiLoading: state.ui.loading
})

export default connect(mapStateToProps, { setUiLoading, showNotification, patchUser })(ProfileContainer);

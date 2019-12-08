import React, { useState } from 'react'
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../data/redux/auth/authActions';
import './Login.css';

const LoginContainer = ({ login }) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        apiKey: ''
    })

    const handleLoginFormChange = (name, value) => setLoginForm({ ...loginForm, [name]: value })

    const handleSubmit = loginForm => {
        login(loginForm);
    }

    return (
        <div className="login-landing">
            <div className="login-container form-container">
                <div className="login-title">
                    News
                </div>
                <LoginForm
                    error={null}
                    loginForm={loginForm}
                    onChange={handleLoginFormChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default connect(null, { login })(LoginContainer);

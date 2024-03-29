import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import { Form, Input } from 'semantic-ui-react';

const Profile = ({ user, onChange, onSubmit, isUiLoading, isLoading }) => {

    return (
        <div>
            <Form loading={isUiLoading} size="large" onSubmit={() => onSubmit(user)}>
                <Form.Field className="login-form">
                    <label>NAME</label>
                    <Input
                        icon="user"
                        iconPosition="left"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        type="text"
                        required
                        onChange={e => onChange(e.target.name, e.target.value)}
                    />
                </Form.Field>

                <Form.Field className="login-form">
                    <label>EMAIL</label>
                    <Input
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                        name="email"
                        value={user.email}
                        type="email"
                        required
                        onChange={e => onChange(e.target.name, e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>API KEY</label>
                    <Input
                        fluid
                        icon="key"
                        iconPosition="left"
                        placeholder="API key"
                        name="apiKey"
                        value={user.apiKey}
                        required
                        onChange={e => onChange(e.target.name, e.target.value)}
                    />
                </Form.Field>

                <Button primary fluid size="large" loading={isLoading} disabled={isLoading}>Update</Button>
            </Form>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isUiLoading: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Profile;

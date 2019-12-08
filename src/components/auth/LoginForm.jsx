import React from "react";
import PropTypes from 'prop-types';
import Button from '../common/button';
import { Form, Input, Message } from "semantic-ui-react";


const LoginForm = ({ onSubmit, onChange, loginForm }) => {

    const { email, apiKey } = loginForm;

    return (
        <React.Fragment>
            <Form size="large" onSubmit={() => onSubmit(loginForm)}>
                <Form.Field className="login-form">
                    <label>EMAIL</label>
                    <Input
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                        name="email"
                        value={email}
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
                        value={apiKey}
                        required
                        onChange={e => onChange(e.target.name, e.target.value)}
                    />
                </Form.Field>

                <Button className="login-button" fluid size="large">Login</Button>
            </Form>
            <Message
                info
                header="Don't have an API KEY?"
                content={<a target="_blank" rel="noopener noreferrer" href="https://newsapi.org/register" >Get your API key here</a>}
            />
            <a target="_blank" rel="noopener noreferrer" href="https://newsapi.org" >Powered by News API</a>
        </React.Fragment>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loginForm: PropTypes.object.isRequired
}

export default LoginForm;

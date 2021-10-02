import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../primitives/FormInput';
import PrimaryButton from '../primitives/PrimaryButton';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isUsernameValid: true,
            isPasswordValid: true
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    validateForm() {
        const { username, password } = this.state;

        const isUsernameValid = !!username;
        const isPasswordValid = !!password;

        this.setState({
            isUsernameValid,
            isPasswordValid
        });

        return isUsernameValid && isPasswordValid;
    }

    onSubmit() {
        const { history } = this.props;

        const isFormValid = this.validateForm();

        if (isFormValid) {
            history.push('/wishlist');
        }
    }

    render() {
        const { isUsernameValid, isPasswordValid } = this.state;

        return (
            <div className="login row align-items-center">
                <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
                    <div className="card bg-primary">
                        <h5 className="card-header">
                            Movie Wishlist Login!
                        </h5>
                        <form>
                            <div className="card-body">

                                <FormInput
                                    id="field-username"
                                    type="text"
                                    name="username"
                                    label="Username"
                                    isValid={isUsernameValid}
                                    onChange={this.handleUsernameChange}
                                    errorText="Please provide a Username."
                                />

                                <FormInput
                                    id="field-password"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    isValid={isPasswordValid}
                                    onChange={this.handlePasswordChange}
                                    errorText="Please provide a Password."
                                    helperText="Passwords are case sensitive"
                                />

                                <PrimaryButton id="login-button" onClick={this.onSubmit}>Login</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object.isRequired
};


export default Login;

import React from 'react';
import {
    containerStyle,
    cardStyle,
    inputStyle,
    errorTextStyle,
    buttonStyle,
} from './loginStyles';
import useLoginForm from '../../hooks/useLoginForm';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

const LoginForm = () => {
    const {
        email,
        password,
        emailError,
        error,
        isLoginDisabled,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
    } = useLoginForm();

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <TextInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    style={inputStyle}
                />
                {emailError && (
                    <div style={errorTextStyle}>Invalid email format</div>
                )}
                <TextInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ ...inputStyle, marginTop: '10px' }}
                />
                {error && (
                    <div style={errorTextStyle}>{error}</div>
                )}
                <Button
                    onClick={handleLogin}
                    style={{ ...buttonStyle(isLoginDisabled), marginTop: '15px' }}
                    disabled={isLoginDisabled}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;

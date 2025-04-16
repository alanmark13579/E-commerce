import React from 'react';
import {
    containerStyle,
    cardStyle,
    inputStyle,
    errorTextStyle,
    buttonStyle,
} from './loginStyles';
import useLoginForm from '../../hooks/useLoginForm';

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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    style={inputStyle}
                />
                {emailError && (
                    <div style={errorTextStyle}>Invalid email format</div>
                )}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ ...inputStyle, marginTop: '10px' }}
                />
                {error && (
                    <div style={errorTextStyle}>{error}</div>
                )}
                <button
                    onClick={handleLogin}
                    style={{ ...buttonStyle(isLoginDisabled), marginTop: '15px' }}
                    disabled={isLoginDisabled}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginForm;

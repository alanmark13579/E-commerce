import React from 'react';
import { containerStyle, formStyle, inputStyle, titleStyle } from './registerStyle';
import { buttonStyle } from '../login/loginStyle'
import useRegisterForm from '../../hooks/useRegisterForm';
import TextInput from '../common/TextInput';
import Button from '../common/Button';


function RegisterForm() {
    const {
        name,
        error,
        email,
        emailError,
        password,
        isRegisterDisabled,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister
    } = useRegisterForm();

    return (
    <div style={containerStyle}>
        <h2 style={titleStyle}>Register</h2>

        <div style={formStyle}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '80px' }}>Name: </div>
                <TextInput
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    style={inputStyle}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '80px' }}>Email: </div>
                <TextInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    style={inputStyle}
                />
            </div>
            {emailError && (
                <div style={{ color: 'red', marginLeft: '80px', marginBottom: '10px' }}>
                    Invalid email format
                </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '80px' }}>Password: </div>
                <TextInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={inputStyle}
                />
            </div>
            {error && (
                <div style={{ color: 'red', marginLeft: '80px', marginBottom: '10px' }}>
                    {error}
                </div>
            )}

            <div style={{ marginLeft: '80px', marginTop: '15px' }}>
                <Button
                    onClick={handleRegister}
                    style={buttonStyle(isRegisterDisabled)}
                    disabled={isRegisterDisabled}
                >
                    Submit
                </Button>
            </div>
        </div>
    </div>
    );
}

export default RegisterForm;

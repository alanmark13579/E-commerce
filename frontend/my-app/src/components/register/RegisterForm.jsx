import React from 'react';
import { containerStyle, formStyle, inputStyle, titleStyle } from './registerStyle';
import { errorTextStyle, buttonStyle } from '../login/loginStyle'
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
        <div  style={formStyle}>
        <TextInput
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    style={inputStyle}
        />        
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
            onClick={handleRegister}
            style={{ ...buttonStyle(isRegisterDisabled), marginTop: '15px' }}
            disabled={isRegisterDisabled}
        >
            Submit
        </Button>
        </div >
    </div>
    );
}

export default RegisterForm;

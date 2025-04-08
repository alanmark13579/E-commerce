import React, { useState } from 'react';
import { loginUser } from '../../api/userApi';
import LoginFormUI from './LoginFormUI';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!emailRegex.test(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please enter your email and password');
            return;
        }

        try {
            const data = await loginUser({ email, password });

            // Cookie save 1 hour
            document.cookie = `access_token=${data.access_token}; path=/; max-age=3600;`;
            document.cookie = `user_id=${data.user_id}; path=/; max-age=3600;`;
            
            //window.location.href = '/dashboard'; // 跳轉到儀表板頁面
        } catch (err) {
            console.error('Login Failed:', err.message);
            setError(err.message);
        }
    };

    return (
        <LoginFormUI
            email={email}
            password={password}
            emailError={emailError}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onLogin={handleLogin}
            isLoginDisabled={emailError || !email || !password}
            error={error}
        />
    );
};

export default LoginForm;
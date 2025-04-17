import { useState } from 'react';
import { loginUser } from '../api/userApi';
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!emailRegex.test(value));
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
            document.cookie = `access_token=${data.access_token}; path=/; max-age=3600;`;
            document.cookie = `user_id=${data.user_id}; path=/; max-age=3600;`;
            navigate("/search")
        } catch (err) {
            console.error('Login Failed:', err.message);
            setError(err.message);
        }
    };

    return {
        email,
        password,
        emailError,
        error,
        isLoginDisabled: emailError || !email || !password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
    };
};

export default useLoginForm;

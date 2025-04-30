import { useState } from 'react';
import { registerUser } from '../api/registerApi';
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const useRegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate(); 

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!emailRegex.test(value));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = async () => {
        if (!email || !password || !name) {
            setError('Please enter your name, email and password ');
            return;
        }
        try {
            await registerUser({ name ,email, password });
            navigate("/")
        } catch (err) {
            console.error('Register Failed:', err.message);
            setError(err.message);
        }
    }

    return {
        name,
        error,
        email,
        emailError,
        password,
        isRegisterDisabled: emailError || !email || !password || !name,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister
    }
};

export default useRegisterForm;
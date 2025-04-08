import React from 'react';

const LoginFormUI = ({ email, password, emailError, onEmailChange, onPasswordChange, onLogin, isLoginDisabled }) => {
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1a1a1a',
            }}
        >
            <div
                style={{
                    maxWidth: '400px',
                    width: '80%',
                    padding: '20px',
                    backgroundColor: '#333',
                    color: 'white',
                    borderRadius: '8px',
                }}
            >
                <h2 style={{ textAlign: 'center' }}>Sign in</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={onEmailChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                    {emailError && (
                        <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '5px' }}>
                            Please enter a valid email address
                        </p>
                    )}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={onPasswordChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
                <button
                    onClick={onLogin}
                    disabled={isLoginDisabled}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: isLoginDisabled ? '#555' : '#0f0',
                        color: isLoginDisabled ? '#aaa' : '#000',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        cursor: isLoginDisabled ? 'not-allowed' : 'pointer',
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginFormUI;
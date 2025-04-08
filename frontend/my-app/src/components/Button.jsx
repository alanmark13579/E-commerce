import React from 'react';

const LoginButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '90%',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#c65d5d',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            Login
        </button>
    );
};

export default LoginButton;
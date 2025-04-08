import React from 'react';

const TextInput = ({ label, type, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                style={{ width: '90%', padding: '10px', margin: '5px 0' }}
                placeholder={label}
            />
        </div>
    );
};

export default TextInput;
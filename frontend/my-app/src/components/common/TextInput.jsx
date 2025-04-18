import React from 'react';

const TextInput = ({ label, type, value, onChange, style}) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                style={style}
                placeholder={label}
            />
        </div>
    );
};

export default TextInput;
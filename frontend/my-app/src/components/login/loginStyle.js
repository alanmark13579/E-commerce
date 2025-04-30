export const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
};

export const loginContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
};

export const cardStyle = {
    maxWidth: '400px',
    width: '80%',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '8px',
};

export const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
};

export const errorTextStyle = {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '5px',
};

export const buttonStyle = (disabled) => ({
    width: '100%',
    padding: '10px',
    backgroundColor: disabled ? '#555' : '#0f0',
    color: disabled ? '#aaa' : '#000',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
});

export const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
};

export const registerLinkStyle = {
    background: 'none',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '14px',
    padding: 0,
};
export const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
}

export const cardStyle = {
    maxWidth: '400px',
    width: '80%',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '8px',
}

export const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
}

export const errorTextStyle = {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '5px',
}

export const buttonStyle = (disabled) => ({
    width: '100%',
    padding: '10px',
    backgroundColor: disabled ? '#555' : '#0f0',
    color: disabled ? '#aaa' : '#000',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
})
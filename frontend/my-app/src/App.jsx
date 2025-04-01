import React, { useEffect, useState } from 'react';
import './App.css'; // 導入 CSS 檔案

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/all') // 替換為您的 API URL
            .then(response => response.text())
            .then(data => {
              setMessage(data);
            })
            .catch(error => console.error('Error fetching message:', error));
    }, []);
    
    return (
        <div>
            <h1>Message from Java:</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
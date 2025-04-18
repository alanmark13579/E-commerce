import React from 'react';

const Button = ({ onClick, children, style }) => (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
  
  export default Button;
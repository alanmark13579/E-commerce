import React from 'react';
import {
    cartContainer,
    cartItemBox,
    columnStyle,
    deleteButton,
    totalSection,
} from './CartStyle.js';
import useCartForm from '../../hooks/useCartForm.js';


const CartForm = () => {
    const {
        cartItems,
        handleSubmit,
        validateAndUpdate,
        handleChange,
        handleBlur,
        getTotal,
        handleDelete,
    } = useCartForm();
    
    return (
        <form onSubmit={handleSubmit} style={cartContainer}>
            <div style={{ ...cartItemBox, fontWeight: 'bold', borderBottom: '2px solid white' }}>
                <div style={columnStyle.deleteBtn}></div>
                <div style={columnStyle.productImage}>Product</div>
                <div style={columnStyle.productName}></div>
                <div style={columnStyle.unitPrice}>Price</div>
                <div style={columnStyle.quantity}>Quantity</div>
                <div style={columnStyle.total}>Total</div>
            </div>
            {cartItems.map((item, index) => (
                <div style={cartItemBox} key={item.productId}>
                <div style={columnStyle.deleteBtn}>
                    <button type="button" style={deleteButton} onClick={() => handleDelete(item.productId)}>×</button>
                </div>
            
                <div style={columnStyle.productImage}>
                    <img src={item.imageUrl} alt="product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            
                <div style={columnStyle.productName}>{item.productName}</div>
            
                <div style={columnStyle.unitPrice}>${item.price}</div>
                
                <div style={{ ...columnStyle.quantity, flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button type="button" onClick={() => validateAndUpdate(item.quantity - 1, index)}>-</button>
                        <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleChange(e, index)}
                        onBlur={() => handleBlur(index)}
                        style={{ width: '50px', margin: '0 5px' }}
                        />
                        <button type="button" onClick={() => validateAndUpdate(item.quantity + 1, index)}>+</button>
                    </div>
                    {item.error && <div style={{ color: 'red', marginTop: '4px', fontSize: '0.9em' }}>{item.error}</div>}
                </div>
            
                <div style={columnStyle.total}>${item.price * item.quantity}</div>
                
                </div>
            ))}
                    <div style={totalSection}>
                        Total:  ${getTotal()}
                    </div>
                    
        </form>
    )
};

export default CartForm;
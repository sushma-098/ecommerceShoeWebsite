// src/pages/CartPage.jsx
import React from 'react';
import '../App.css'; // Import the CSS file

const CartPage = ({ cartItems, onPay }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p><strong>{item.name}</strong></p>
              <p>Description: {item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={onPay} className="pay-button">Pay Now</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

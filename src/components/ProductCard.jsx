// src/components/ProductCard.jsx
import React from 'react';
import '../App.css';

const ProductCard = ({ product, onAddToCart }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;

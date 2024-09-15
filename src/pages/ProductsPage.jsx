// src/pages/ProductsPage.jsx
import React from 'react';
import '../App.css'; // Import the CSS file

const ProductsPage = ({ products, onAddToCart }) => {
  return (
    <div className="products-container">
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="card">
            {/* Image Rendering */}
            {product.image ? (
              <img 
                src={URL.createObjectURL(product.image)} 
                alt={product.name} 
                className="card-img"
              />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => onAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

// src/pages/AddProductsPage.jsx
import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const AddProductsPage = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, image };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          value={description}
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductsPage;

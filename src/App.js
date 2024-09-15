// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddProductsPage from './pages/AddProductsPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => setProducts([...products, product]);
  const handleAddToCart = (product) => setCartItems([...cartItems, product]);
  const handlePay = () => alert('Proceeding to payment...');

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductsPage onAddProduct={handleAddProduct} />} />
        <Route path="/products" element={<ProductsPage products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onPay={handlePay} />} />
      </Routes>
    </Router>
  );
};

export default App;

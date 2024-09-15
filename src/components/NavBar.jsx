// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Shoe Mart</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-product">Add Products</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

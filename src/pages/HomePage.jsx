// src/pages/HomePage.jsx
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    

      <div className="background">
        <img src="https://media.istockphoto.com/id/1216415029/photo/footwear.jpg?s=612x612&w=0&k=20&c=-3QKKTXiG9D63senvl-YPz9QQQJVBcE1CS_EGhuuEeM=" alt="Shoes" className="pic" />
        <div className="text-content">
          <h1 className="headline"><span>Welcome!</span></h1>
          <h1 className="headline">Happy Shopping</h1>
          <p className="description">
            Shoe Mart is your go-to place for the latest and greatest in footwear. Find the perfect pair for any occasion.
          </p>
          <a className="shop-now-btn">
      <Link to="/products" >Shop Now!</Link></a>
          
        </div>
      </div>
   
  );
};

export default HomePage;

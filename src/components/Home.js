// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 
import shopImage from '../images/Shop.jpg'; // Import the image

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={shopImage} alt="Shop" className="shop-image" />
        <h1>Welcome to Aman Sales</h1>
      </header>
      <section className="home-about">
        <h2>About Us</h2>
        <p>
        Aman Sales, owned by the late Mr. Hasham Qureshi, is located in Dalinimada Gam, Ahmedabad 380028. For over 20 years, we have been distributing quality products and are trusted by more than 1,000 customers.
        </p>
      </section>
      <section className="home-links">
        <Link to="/order" className="btn">Go to Products</Link>
        <Link to="/cart" className="btn">Go to Cart</Link>
      </section>
    </div>
  );
};

export default Home;

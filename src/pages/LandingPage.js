import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Food Delivery Service</h1>
      <p>Order fresh meals delivered to your doorstep every day.</p>
      <Link to="/categories">Browse Our Menu</Link>
    </div>
  );
}

export default LandingPage;

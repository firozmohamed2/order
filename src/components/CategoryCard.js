import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <div>
      <h2>{category}</h2>
      <Link to={`/category/${category.toLowerCase()}`}>Explore {category}</Link>
    </div>
  );
}

export default CategoryCard;

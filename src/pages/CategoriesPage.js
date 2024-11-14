import React from 'react';
import CategoryCard from '../components/CategoryCard';

function CategoriesPage() {
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div>
      <h1>Food Categories</h1>
      <div>
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;

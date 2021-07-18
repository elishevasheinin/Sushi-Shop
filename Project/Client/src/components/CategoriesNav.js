import React from "react";
import './CategoriesNav.css';
import { Navigation } from "react-minimal-side-navigation";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const CategoriesNav = ({ categories, onCategorySelected }) => {
  const items = [];
  categories.forEach(category => items.push({
    title: category,
    itemId: category,
  }));

  return (
    <div className="categories">
      <Navigation
        activeItemId={categories[0]}
        onSelect={({ itemId }) => {
          onCategorySelected(itemId);
        }}
        items={items}
      />
    </div>
  )
};
export default CategoriesNav
import { useEffect, useState } from 'react';
import CategoriesNav from './CategoriesNav'
import Product from './Product'
import { getProductsByCategory } from '../Server/OrdersService';

import './Products.css'

const Products = () => {

  const categories = ["Sushi", "Stir-fried", "Sushi sandwich", "Drinks"];

  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(async () => {
    const result = await getProductsByCategory("Sushi");
    setProductsByCategory(result);
  }, []);

  const selectCategory = async (category) => {
    const result = await getProductsByCategory(category);
    setProductsByCategory(result);
  }

  return (
    <div className="products">
      <CategoriesNav categories={categories}
        onCategorySelected={selectCategory} />
      <div className="products-container">
        {productsByCategory.map(product =>
          <Product key={product.id} product={product} canAdd={true}/>)}
      </div>
    </div>
  );
}

export default Products;

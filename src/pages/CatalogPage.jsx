import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const CatalogPage = () => {
  return (
    <div className="container">
      <h2>Каталог товаров</h2>
      <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
        Выберите растение и добавьте его в корзину
      </p>
      <div className="catalog-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
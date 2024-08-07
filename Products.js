import React from 'react';
import './Products.css';

function Products() {
  return (
    <section id="products" className="products">
      <h2>Наши продукты</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Продукт 1</h3>
          <p>Описание продукта 1.</p>
        </div>
        <div className="product-item">
          <h3>Продукт 2</h3>
          <p>Описание продукта 2.</p>
        </div>
        <div className="product-item">
          <h3>Продукт 3</h3>
          <p>Описание продукта 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;

import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Nike Air Max 270', price: '3,500,000đ', image: '👟' },
    { id: 2, name: 'Nike Air Force 1', price: '2,800,000đ', image: '👟' },
    { id: 3, name: 'Nike Dunk Low', price: '3,200,000đ', image: '👟' },
    { id: 4, name: 'Nike Air Jordan 1', price: '4,500,000đ', image: '👟' },
  ];

  return (
    <section id="products" className="featured-products">
      <div className="section-container">
        <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
        <p className="section-subtitle">Khám phá những đôi giày Nike được yêu thích nhất</p>
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card-link"
            >
              <div className="product-card">
                <div className="product-image" style={{backgroundColor: '#ffffff', color: '#000000'}}>{product.image}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="product-btn" style={{backgroundColor: '#ffffff', color: '#000000'}}>Xem Chi Tiết</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
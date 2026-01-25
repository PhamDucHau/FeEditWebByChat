import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <div className="products-page">
      <Header />
      <main className="products-main">
        <div className="products-header">
          <h1>Sản Phẩm</h1>
          <p>Khám phá bộ sưu tập giày Nike đầy đủ</p>
        </div>

        <div className="products-container">
          <aside className="products-sidebar">
            <div className="filter-section">
              <h3>Tìm Kiếm</h3>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-section">
              <h3>Danh Mục</h3>
              <div className="category-list">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Sắp Xếp</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="default">Mặc định</option>
                <option value="price-low">Giá: Thấp đến Cao</option>
                <option value="price-high">Giá: Cao đến Thấp</option>
                <option value="name">Tên: A-Z</option>
                <option value="rating">Đánh Giá: Cao nhất</option>
              </select>
            </div>
          </aside>

          <div className="products-content">
            <div className="products-info">
              <p>Tìm thấy {filteredProducts.length} sản phẩm</p>
            </div>

            <div className="products-grid">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card-link"
                >
                  <div className="product-card">
                    {product.originalPrice && (
                      <span className="discount-badge">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                    <div className="product-image">{product.image}</div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-rating">
                        <span>⭐ {product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                      <div className="product-price-row">
                        <span className="product-price">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="product-original-price">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button className="product-btn">Xem Chi Tiết</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>Không tìm thấy sản phẩm nào</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;


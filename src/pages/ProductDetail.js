import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-detail-page">
        <Header />
        <div className="not-found">
          <h2>Sản phẩm không tồn tại</h2>
          <Link to="/products" className="back-link">Quay lại danh sách sản phẩm</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Vui lòng chọn size và màu sắc');
      return;
    }
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Vui lòng chọn size và màu sắc');
      return;
    }
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      <Header />
      <main className="product-detail-main">
        <div className="breadcrumb">
          <Link to="/">Trang Chủ</Link>
          <span> / </span>
          <Link to="/products">Sản Phẩm</Link>
          <span> / </span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-container">
          <div className="product-image-section">
            <div className="main-image">
              {product.image}
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating-section">
              <div className="rating">
                <span className="stars">⭐ {product.rating}</span>
                <span className="reviews">({product.reviews} đánh giá)</span>
              </div>
            </div>

            <div className="product-price-section">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  <span className="discount">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <div className="product-description">
              <h3>Mô Tả Sản Phẩm</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Đặc Điểm Nổi Bật</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-options">
              <div className="option-group">
                <label>Màu Sắc</label>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Size</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Số Lượng</label>
                <div className="quantity-control">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                🛒 Thêm Vào Giỏ Hàng
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Mua Ngay
              </button>
            </div>

            <div className="product-info-box">
              <div className="info-item">
                <span className="info-label">Tình Trạng:</span>
                <span className="info-value">{product.inStock ? 'Còn Hàng' : 'Hết Hàng'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Danh Mục:</span>
                <span className="info-value">{product.category}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products-section">
          <h2>Sản Phẩm Liên Quan</h2>
          <div className="related-products-grid">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="related-product-card"
                >
                  <div className="related-product-image">{relatedProduct.image}</div>
                  <h4>{relatedProduct.name}</h4>
                  <p className="related-product-price">{formatPrice(relatedProduct.price)}</p>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;


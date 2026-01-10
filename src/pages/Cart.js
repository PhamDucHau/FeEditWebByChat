import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cart.css';

// Dữ liệu giỏ hàng mẫu
const initialCartItems = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 3500000,
    size: 42,
    color: 'Đen',
    quantity: 1,
    image: '👟'
  },
  {
    id: 2,
    name: 'Nike Air Force 1',
    price: 2800000,
    size: 41,
    color: 'Trắng',
    quantity: 2,
    image: '👟'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <main className="cart-main">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Giỏ Hàng Của Bạn Đang Trống</h2>
            <p>Hãy khám phá và thêm các sản phẩm yêu thích vào giỏ hàng!</p>
            <Link to="/products" className="shop-btn">
              Mua Sắm Ngay
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      <main className="cart-main">
        <div className="cart-header">
          <h1>Giỏ Hàng</h1>
          <p>{cartItems.length} sản phẩm trong giỏ hàng</p>
        </div>

        <div className="cart-container">
          <div className="cart-items-section">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    {item.image}
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-specs">
                      <span>Size: {item.size}</span>
                      <span>Màu: {item.color}</span>
                    </div>
                    <div className="item-price">{formatPrice(item.price)}</div>
                  </div>
                  <div className="item-quantity">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    <div className="total-price">{formatPrice(item.price * item.quantity)}</div>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping">
                ← Tiếp Tục Mua Sắm
              </Link>
            </div>
          </div>

          <div className="cart-summary">
            <h2>Tóm Tắt Đơn Hàng</h2>
            <div className="summary-row">
              <span>Tạm Tính:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Phí Vận Chuyển:</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Tổng Cộng:</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button className="checkout-btn">
              Thanh Toán
            </button>

            <div className="payment-methods">
              <h3>Phương Thức Thanh Toán</h3>
              <div className="payment-icons">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
                <span>💰</span>
              </div>
              <p>Chấp nhận thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử và tiền mặt khi nhận hàng</p>
            </div>

            <div className="security-info">
              <h3>🔒 Mua Sắm An Toàn</h3>
              <ul>
                <li>Thanh toán được mã hóa SSL</li>
                <li>Bảo vệ thông tin khách hàng</li>
                <li>Đổi trả dễ dàng trong 30 ngày</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;


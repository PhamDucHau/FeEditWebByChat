import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>NIKE</h1>
        </Link>
        <nav className="nav">
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/products">Sản Phẩm</NavLink>
          <NavLink to="/about">Giới Thiệu</NavLink>
          <NavLink to="/contact">Liên Hệ</NavLink>
        </nav>
        <div className="header-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn" onClick={() => navigate('/cart')}>🛒</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
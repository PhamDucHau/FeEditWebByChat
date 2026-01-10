import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Về Chúng Tôi</h3>
          <p>Nike Store - Địa chỉ uy tín cho các sản phẩm giày Nike chính hãng với chất lượng đảm bảo.</p>
        </div>
        <div className="footer-section">
          <h3>Liên Kết</h3>
          <ul>
            <li><NavLink to="/" end>Trang Chủ</NavLink></li>
            <li><NavLink to="/products">Sản Phẩm</NavLink></li>
            <li><NavLink to="/about">Giới Thiệu</NavLink></li>
            <li><NavLink to="/contact">Liên Hệ</NavLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hỗ Trợ</h3>
          <ul>
            <li><a href="#shipping">Vận Chuyển</a></li>
            <li><a href="#return">Đổi Trả</a></li>
            <li><a href="#faq">Câu Hỏi Thường Gặp</a></li>
            <li><a href="#policy">Chính Sách</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kết Nối</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nike Store. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
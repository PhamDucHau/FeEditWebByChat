import React, { useState } from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn bạn đã đăng ký với email: ${email}`);
    setEmail('');
  };

  return (
    <section id="contact" className="newsletter-section">
      <div className="section-container">
        <h2 className="section-title">Đăng Ký Nhận Tin</h2>
        <p className="section-subtitle">Nhận thông tin về các sản phẩm mới và chương trình khuyến mãi độc quyền</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">Đăng Ký</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;


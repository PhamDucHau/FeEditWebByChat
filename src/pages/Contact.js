import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <div className="contact-hero">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Thông Tin Liên Hệ</h2>
            <p className="contact-intro">
              Bạn có câu hỏi, góp ý hoặc cần hỗ trợ? Đừng ngần ngại liên hệ với chúng tôi. 
              Đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h3>Địa Chỉ</h3>
                  <p>123 Đường ABC, Quận XYZ<br />Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Điện Thoại</h3>
                  <p>Hotline: 1900 1234<br />Di động: 0901 234 567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@nikestore.vn<br />support@nikestore.vn</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-text">
                  <h3>Giờ Làm Việc</h3>
                  <p>Thứ 2 - Thứ 6: 8:00 - 18:00<br />Thứ 7 - Chủ nhật: 9:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="social-media">
              <h3>Theo Dõi Chúng Tôi</h3>
              <div className="social-links">
                <a href="#facebook" className="social-link">Facebook</a>
                <a href="#instagram" className="social-link">Instagram</a>
                <a href="#twitter" className="social-link">Twitter</a>
                <a href="#youtube" className="social-link">YouTube</a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Gửi Tin Nhắn</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ và Tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Số Điện Thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0901 234 567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Chủ Đề *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="product">Câu hỏi về sản phẩm</option>
                  <option value="order">Câu hỏi về đơn hàng</option>
                  <option value="shipping">Vận chuyển & Giao hàng</option>
                  <option value="return">Đổi trả & Hoàn tiền</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin Nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


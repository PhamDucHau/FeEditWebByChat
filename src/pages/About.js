import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <div className="about-hero">
          <h1>Về Chúng Tôi</h1>
          <p>Nike Store - Địa chỉ uy tín cho các sản phẩm giày Nike chính hãng</p>
        </div>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>Câu Chuyện Của Chúng Tôi</h2>
              <p>
                Nike Store được thành lập với sứ mệnh mang đến cho người tiêu dùng Việt Nam 
                những đôi giày Nike chính hãng chất lượng cao với giá cả hợp lý. Chúng tôi 
                cam kết chỉ bán hàng chính hãng từ nhà phân phối được Nike ủy quyền.
              </p>
              <p>
                Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi đã phục vụ hàng nghìn khách 
                hàng trên khắp cả nước và nhận được sự tin tưởng tuyệt đối từ cộng đồng yêu 
                thích giày Nike.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">🏢</div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="values-container">
            <h2>Giá Trị Cốt Lõi</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Chính Hãng 100%</h3>
                <p>Cam kết tất cả sản phẩm đều là hàng chính hãng với tem và hộp đầy đủ</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚚</div>
                <h3>Giao Hàng Nhanh</h3>
                <p>Giao hàng toàn quốc trong 2-5 ngày làm việc với dịch vụ đóng gói cẩn thận</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💬</div>
                <h3>Hỗ Trợ 24/7</h3>
                <p>Đội ngũ CSKH luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi</p>
              </div>
              <div className="value-card">
                <div className="value-icon">↩️</div>
                <h3>Đổi Trả Dễ Dàng</h3>
                <p>Chính sách đổi trả linh hoạt trong 30 ngày nếu sản phẩm không vừa hoặc lỗi</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team-container">
            <h2>Đội Ngũ Của Chúng Tôi</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💼</div>
                <h3>Nguyễn Văn A</h3>
                <p className="member-role">Giám Đốc Điều Hành</p>
                <p className="member-desc">Với 15 năm kinh nghiệm trong ngành thời trang thể thao</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💼</div>
                <h3>Trần Thị B</h3>
                <p className="member-role">Giám Đốc Kinh Doanh</p>
                <p className="member-desc">Chuyên về phát triển thị trường và quan hệ khách hàng</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍🔧</div>
                <h3>Lê Văn C</h3>
                <p className="member-role">Quản Lý Kho</p>
                <p className="member-desc">Đảm bảo chất lượng và số lượng hàng hóa luôn ổn định</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Năm Kinh Nghiệm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Khách Hàng</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Sản Phẩm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Hài Lòng</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;


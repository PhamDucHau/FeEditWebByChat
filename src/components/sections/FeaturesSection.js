import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Giao Hàng Nhanh',
      description: 'Giao hàng toàn quốc trong vòng 2-5 ngày làm việc'
    },
    {
      icon: '✅',
      title: 'Chính Hãng 100%',
      description: 'Cam kết sản phẩm chính hãng với tem chống giả'
    },
    {
      icon: '💰',
      title: 'Giá Tốt Nhất',
      description: 'Giá cả cạnh tranh và nhiều chương trình khuyến mãi'
    },
    {
      icon: '↩️',
      title: 'Đổi Trả Dễ Dàng',
      description: 'Chính sách đổi trả linh hoạt trong vòng 30 ngày'
    }
  ];

  return (
    <section id="about" className="features-section">
      <div className="section-container">
        <h2 className="section-title">Tại Sao Chọn Chúng Tôi</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


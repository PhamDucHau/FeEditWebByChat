import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Just Do It</h1>
        <p className="hero-subtitle">Khám phá bộ sưu tập giày Nike mới nhất với thiết kế hiện đại và công nghệ tiên tiến</p>
        <button className="hero-btn" onClick={() => navigate('/products')}>Mua Ngay</button>
      </div>
      <div className="hero-image">
        <div className="shoe-placeholder">👟</div>
      </div>
    </section>
  );
};

export default HeroSection;


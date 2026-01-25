import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './sections/HeroSection';
import FeaturedProducts from './sections/FeaturedProducts';
import FeaturesSection from './sections/FeaturesSection';
import NewsletterSection from './sections/NewsletterSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <FeaturesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-particles"></div>
      <div className="hero-shape"></div>
      <div className="home-content">
        <div className="hero-badge">
          🌱 Smart Agriculture Solutions
        </div>
        <h1 className="home-title">
          Optimize Your Crop Yield with Precision
        </h1>
        <p className="home-subtitle">
          Get AI-powered fertilizer recommendations tailored to your specific crop and soil conditions. 
          Increase yield by up to 40% while reducing fertilizer waste.
        </p>
        <div className="cta-group">
          <button 
            className="start-button"
            onClick={() => navigate('/recommend')}
          >
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="learn-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
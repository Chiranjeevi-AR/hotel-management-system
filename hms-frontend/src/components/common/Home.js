import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">Hospital Management System</span>
          </div>
          <nav className="nav-buttons">
            <button type="button" className="btn btn-outline" onClick={() => navigate('/login')} aria-label="Go to login">
              Login
            </button>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/register')} aria-label="Go to register">
              Register
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to HMS</h1>
            <p className="hero-subtitle">
              A comprehensive hospital management solution for patients, doctors, and administrators
            </p>
            <div className="hero-buttons">
              <button type="button" className="btn btn-primary btn-large" onClick={() => navigate('/login')} aria-label="Hero login">
                🔑 Login
              </button>
              <button type="button" className="btn btn-outline btn-large" onClick={() => navigate('/register')} aria-label="Hero register">
                📝 Register
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Appointment Scheduling</h3>
                <p>Book and manage appointments with ease</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💊</div>
                <h3>Prescription Management</h3>
                <p>Digital prescription system for doctors and patients</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Patient Management</h3>
                <p>Comprehensive patient record management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to get started?</h2>
              <p>Join thousands of healthcare professionals using our platform</p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/register')}>
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

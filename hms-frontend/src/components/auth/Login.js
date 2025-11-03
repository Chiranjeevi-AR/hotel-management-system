import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(formData.username, formData.password);
      
      // Redirect based on user role
      const role = user.role?.toLowerCase();
      switch (role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'doctor':
          navigate('/doctor');
          break;
        case 'patient':
          navigate('/patient');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">🏥</span>
          <h1>HMS Login</h1>
          <p className="auth-subtitle" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            Welcome back — sign in to continue to your dashboard
          </p>
        </div>

        {error && (
          <div id="auth-error" className="alert alert-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
              autoFocus
              aria-label="username"
              placeholder="Enter username or email"
              aria-describedby={error ? 'auth-error' : undefined}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              aria-label="password"
              placeholder="Your password"
              aria-describedby={error ? 'auth-error' : undefined}
            />
          </div>
          <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
            <Link to="/forgot-password" className="auth-link-secondary" style={{ fontSize: '0.85rem' }}>
              Forgot password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
            aria-live="polite"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div className="auth-links">
          <Link to="/register" className="auth-link">
            Don't have an account? Sign Up
          </Link>
          <Link to="/" className="auth-link-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

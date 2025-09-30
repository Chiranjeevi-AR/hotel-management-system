import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8082/api/auth/login', {
        username,
        password
      });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    form: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    },
    title: {
      textAlign: 'center',
      color: '#1976d2',
      fontSize: '2rem',
      marginBottom: '2rem',
      fontWeight: '600'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      background: '#1976d2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.2s ease'
    },
    error: {
      background: '#ffebee',
      color: '#c62828',
      padding: '0.75rem',
      borderRadius: '4px',
      marginBottom: '1rem',
      border: '1px solid #ffcdd2'
    },
    backButton: {
      background: 'transparent',
      color: '#1976d2',
      border: '2px solid #1976d2',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '1rem',
      width: '100%',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
        <h1 style={styles.title}>HMS Login</h1>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        
        <button
          type="submit"
          style={styles.button}
          disabled={loading}
          onMouseOver={(e) => !loading && (e.target.style.background = '#1565c0')}
          onMouseOut={(e) => !loading && (e.target.style.background = '#1976d2')}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        
        <button
          type="button"
          style={styles.backButton}
          onClick={() => navigate('/')}
          onMouseOver={(e) => {
            e.target.style.background = '#1976d2';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#1976d2';
          }}
        >
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default Login;

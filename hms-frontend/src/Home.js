import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    content: {
      background: 'white',
      borderRadius: '12px',
      padding: '3rem',
      textAlign: 'center',
      maxWidth: '600px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    },
    title: {
      fontSize: '3rem',
      color: '#1976d2',
      marginBottom: '1rem',
      fontWeight: '600'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    button: {
      background: '#1976d2',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      margin: '0.5rem',
      transition: 'background 0.2s ease'
    },
    status: {
      background: '#e8f5e8',
      color: '#2e7d32',
      padding: '1rem',
      borderRadius: '8px',
      margin: '2rem 0',
      border: '1px solid #c8e6c9'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏥</div>
        <h1 style={styles.title}>Hospital Management System</h1>
        <p style={styles.subtitle}>
          A comprehensive healthcare management solution for patients, doctors, and administrators.
        </p>
        
        <div style={styles.status}>
          <strong>✅ Backend Status: Running on http://localhost:8082</strong>
        </div>
        
        <div>
          <button 
            style={styles.button}
            onClick={() => navigate('/login')}
            onMouseOver={(e) => e.target.style.background = '#1565c0'}
            onMouseOut={(e) => e.target.style.background = '#1976d2'}
          >
            🔑 Login
          </button>
          <button 
            style={styles.button}
            onClick={() => navigate('/dashboard')}
            onMouseOver={(e) => e.target.style.background = '#1565c0'}
            onMouseOut={(e) => e.target.style.background = '#1976d2'}
          >
            📊 Dashboard
          </button>
        </div>
        
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
          <p><strong>Core Features:</strong></p>
          <p>✅ Spring Boot Backend • ✅ MySQL Database • ✅ JWT Authentication</p>
          <p>✅ Role-based Access • ✅ RESTful API • ✅ Docker Support</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    header: {
      background: '#1976d2',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    content: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      maxWidth: '800px',
      width: '100%',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    },
    title: {
      color: '#1976d2',
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontWeight: '600',
      textAlign: 'center'
    },
    subtitle: {
      color: '#666',
      fontSize: '1.1rem',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    featureCard: {
      background: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      border: '1px solid #e9ecef'
    },
    button: {
      background: '#1976d2',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      margin: '0.25rem'
    },
    status: {
      background: '#e8f5e8',
      color: '#2e7d32',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem 0',
      border: '1px solid #c8e6c9',
      textAlign: 'center'
    }
  };

  const getDashboardCards = () => {
    const role = user?.role?.toLowerCase();
    
    switch (role) {
      case 'admin':
        return [
          { title: 'Manage Users', icon: '👤', description: 'Add, edit, and manage system users' },
          { title: 'View Appointments', icon: '📅', description: 'Monitor all hospital appointments' },
          { title: 'System Reports', icon: '📊', description: 'Generate and view system reports' }
        ];
      case 'doctor':
        return [
          { title: 'My Appointments', icon: '📅', description: 'View and manage your appointments' },
          { title: 'Patient Records', icon: '👤', description: 'Access patient medical records' },
          { title: 'Prescriptions', icon: '💊', description: 'Create and manage prescriptions' }
        ];
      case 'patient':
        return [
          { title: 'Book Appointment', icon: '📅', description: 'Schedule new appointments' },
          { title: 'My Records', icon: '👤', description: 'View your medical records' },
          { title: 'My Prescriptions', icon: '💊', description: 'View your prescriptions' }
        ];
      default:
        return [
          { title: 'Welcome', icon: '🏥', description: 'Welcome to the Hospital Management System' },
          { title: 'Getting Started', icon: '🚀', description: 'Learn how to use the system' },
          { title: 'Support', icon: '❓', description: 'Get help and support' }
        ];
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>🏥</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Hospital Management System</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Welcome, {user?.username || 'User'}</span>
          <button
            style={styles.button}
            onClick={handleLogout}
            onMouseOver={(e) => e.target.style.background = '#1565c0'}
            onMouseOut={(e) => e.target.style.background = '#1976d2'}
          >
            🚪 Logout
          </button>
        </div>
      </header>

      <div style={styles.content}>
        <div style={styles.card}>
          <h1 style={styles.title}>
            {user?.role ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase()} Dashboard` : 'Dashboard'}
          </h1>
          <p style={styles.subtitle}>
            Welcome to your dashboard, {user?.username || 'User'}! 
            {user?.role && ` You are logged in as ${user.role.toLowerCase()}.`}
          </p>

          <div style={styles.status}>
            <strong>✅ System Status: All services operational</strong>
          </div>

          <div style={styles.grid}>
            {getDashboardCards().map((card, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{card.icon}</div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{card.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>{card.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>Quick Actions</h3>
            <button
              style={styles.button}
              onClick={() => navigate('/')}
              onMouseOver={(e) => e.target.style.background = '#1565c0'}
              onMouseOut={(e) => e.target.style.background = '#1976d2'}
            >
              🏠 Go Home
            </button>
            <button
              style={styles.button}
              onClick={handleLogout}
              onMouseOver={(e) => e.target.style.background = '#dc3545'}
              onMouseOut={(e) => e.target.style.background = '#1976d2'}
            >
              🚪 Logout
            </button>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
            <p>This is a functional dashboard. The backend API is ready for full implementation of features.</p>
            <p><strong>Backend URL:</strong> http://localhost:8082</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardTitle = () => {
    switch (user?.role?.toLowerCase()) {
      case 'admin':
        return 'Admin Dashboard';
      case 'doctor':
        return 'Doctor Dashboard';
      case 'patient':
        return 'Patient Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getDashboardCards = () => {
    const role = user?.role?.toLowerCase();

    switch (role) {
      case 'admin':
        return [
          { title: 'Manage Users', description: 'Add, edit, and manage system users', icon: '👥' },
          { title: 'View All Appointments', description: 'Monitor all hospital appointments', icon: '📅' },
          { title: 'System Reports', description: 'Generate and view system reports', icon: '📊' }
        ];
      case 'doctor':
        return [
          { title: 'My Appointments', description: 'View and manage your appointments', icon: '📅' },
          { title: 'Patient Records', description: 'Access patient medical records', icon: '📋' },
          { title: 'Prescriptions', description: 'Create and manage prescriptions', icon: '💊' }
        ];
      case 'patient':
        return [
          { title: 'Book Appointment', description: 'Schedule new appointments', icon: '📅' },
          { title: 'My Records', description: 'View your medical records', icon: '📋' },
          { title: 'My Prescriptions', description: 'View your prescriptions', icon: '💊' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">🏥</span>
            <span className="dashboard-logo-text">Hospital Management System</span>
          </div>
          <div className="dashboard-user-section">
            <div className="user-info">
              <span className="user-name" aria-label="logged-in-username">{user?.username}</span>
              <span className="user-role" aria-label="logged-in-role">{user?.role}</span>
            </div>
            <button type="button" className="logout-btn btn" onClick={handleLogout} aria-label="Logout">
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <h1 className="dashboard-title">{getDashboardTitle()}</h1>
          <p className="dashboard-subtitle">
            Welcome back, {user?.username}! You are logged in as {user?.role?.toLowerCase()}.
            Access your personalized tools and manage your hospital activities.
          </p>
        </div>

        <div className="dashboard-cards">
          {getDashboardCards().map((card, index) => (
            <div className="dashboard-card" key={index}>
              <div className="card-icon-wrapper">
                <span className="card-icon">{card.icon}</span>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <h2 className="quick-actions-title">Quick Actions</h2>
          <div className="quick-actions-buttons">
            <button type="button" className="action-btn" onClick={() => navigate('/')} aria-label="Go home">
              🏠 Go Home
            </button>
            <button type="button" className="action-btn secondary" onClick={handleLogout} aria-label="Quick logout">
              🚪 Logout
            </button>
          </div>
        </div>

        <div className="dashboard-footer">
          <p>This dashboard provides access to key hospital management features based on your role.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

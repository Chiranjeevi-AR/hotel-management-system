import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  LocalHospital,
  ExitToApp,
  Dashboard as DashboardIcon,
  Person,
  Schedule,
  MedicalServices
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

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
          { title: 'Manage Users', description: 'Add, edit, and manage system users', icon: <Person /> },
          { title: 'View All Appointments', description: 'Monitor all hospital appointments', icon: <Schedule /> },
          { title: 'System Reports', description: 'Generate and view system reports', icon: <DashboardIcon /> }
        ];
      case 'doctor':
        return [
          { title: 'My Appointments', description: 'View and manage your appointments', icon: <Schedule /> },
          { title: 'Patient Records', description: 'Access patient medical records', icon: <Person /> },
          { title: 'Prescriptions', description: 'Create and manage prescriptions', icon: <MedicalServices /> }
        ];
      case 'patient':
        return [
          { title: 'Book Appointment', description: 'Schedule new appointments', icon: <Schedule /> },
          { title: 'My Records', description: 'View your medical records', icon: <Person /> },
          { title: 'My Prescriptions', description: 'View your prescriptions', icon: <MedicalServices /> }
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <LocalHospital sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital Management System - {getDashboardTitle()}
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Welcome, {user?.username}
          </Typography>
          <Button color="inherit" onClick={handleLogout} startIcon={<ExitToApp />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            {getDashboardTitle()}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Welcome to your dashboard, {user?.username}! 
            You are logged in as {user?.role?.toLowerCase()}.
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          {getDashboardCards().map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { elevation: 4 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {React.cloneElement(card.icon, { sx: { fontSize: 32 } })}
                    </Box>
                    <Typography variant="h6" component="h3">
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, p: 3, backgroundColor: 'grey.100', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="outlined" onClick={() => navigate('/')}>
              Go Home
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            This is a basic dashboard. Full functionality will be implemented based on your role.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;

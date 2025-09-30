import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Authentication API
export const authAPI = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
  getProfile: (username) => api.get(`/api/auth/user/${username}`),
};

// User API
export const userAPI = {
  getUsers: () => api.get('/api/admin/users'),
  createUser: (userData) => api.post('/api/admin/users', userData),
  updateUser: (id, userData) => api.put(`/api/admin/users/${id}`, userData),
  deleteUser: (id) => api.delete(`/api/admin/users/${id}`),
};

// Patient API
export const patientAPI = {
  getPatients: () => api.get('/api/admin/patients'),
  getPatient: (id) => api.get(`/api/admin/patients/${id}`),
  createPatient: (patientData) => api.post('/api/admin/patients', patientData),
  updatePatient: (id, patientData) => api.put(`/api/admin/patients/${id}`, patientData),
  deletePatient: (id) => api.delete(`/api/admin/patients/${id}`),
  getMyProfile: () => api.get('/api/patient/profile'),
  updateMyProfile: (patientData) => api.put('/api/patient/profile', patientData),
};

// Doctor API
export const doctorAPI = {
  getDoctors: () => api.get('/api/admin/doctors'),
  getDoctor: (id) => api.get(`/api/admin/doctors/${id}`),
  createDoctor: (doctorData) => api.post('/api/admin/doctors', doctorData),
  updateDoctor: (id, doctorData) => api.put(`/api/admin/doctors/${id}`, doctorData),
  deleteDoctor: (id) => api.delete(`/api/admin/doctors/${id}`),
  getMyProfile: () => api.get('/api/doctor/profile'),
  updateMyProfile: (doctorData) => api.put('/api/doctor/profile', doctorData),
};

// Appointment API
export const appointmentAPI = {
  getAppointments: () => api.get('/api/admin/appointments'),
  getAppointment: (id) => api.get(`/api/admin/appointments/${id}`),
  createAppointment: (appointmentData) => api.post('/api/admin/appointments', appointmentData),
  updateAppointment: (id, appointmentData) => api.put(`/api/admin/appointments/${id}`, appointmentData),
  deleteAppointment: (id) => api.delete(`/api/admin/appointments/${id}`),
  getMyAppointments: () => api.get('/api/patient/appointments'),
  bookAppointment: (appointmentData) => api.post('/api/patient/appointments', appointmentData),
  getDoctorAppointments: () => api.get('/api/doctor/appointments'),
};

// Prescription API
export const prescriptionAPI = {
  getPrescriptions: () => api.get('/api/admin/prescriptions'),
  getPrescription: (id) => api.get(`/api/admin/prescriptions/${id}`),
  createPrescription: (prescriptionData) => api.post('/api/doctor/prescriptions', prescriptionData),
  updatePrescription: (id, prescriptionData) => api.put(`/api/doctor/prescriptions/${id}`, prescriptionData),
  deletePrescription: (id) => api.delete(`/api/admin/prescriptions/${id}`),
  getMyPrescriptions: () => api.get('/api/patient/prescriptions'),
  getDoctorPrescriptions: () => api.get('/api/doctor/prescriptions'),
};

export default api;

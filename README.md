# MedCare Hospital Management System (HMS)

A full-stack Hospital Management System with secure authentication, role-based dashboards, appointment scheduling, and prescription management.

## Overview
- Backend: Java 17, Spring Boot 3, Spring Security, Spring Data JPA (Hibernate), MySQL
- Frontend: React (Vite + TypeScript + Tailwind + shadcn-ui), modern, responsive UI
- Containerization: Docker (optional)
- Roles: ADMIN, DOCTOR, PATIENT

## Project Structure
```
hms-backend/                      # Spring Boot backend (Maven)
  src/main/java/com/hms/...      # Config, controllers, services, repositories, models, dtos
  src/main/resources/            # application.properties, data.sql
  pom.xml

doc-assist-portal/               # Advanced React frontend (Vite + TS + Tailwind)
  src/...
  package.json
```

## Features
- Authentication: Register, Login (BCrypt password hashing), CORS enabled
- Role-based Access: ADMIN, DOCTOR, PATIENT
- Dashboards:
  - ADMIN: KPIs, trends, recent activities
  - DOCTOR: Daily schedule, quick actions, recent patients
  - PATIENT: Appointments, prescriptions, quick actions
- CRUD foundations for users, appointments, prescriptions

---

## Prerequisites
- Java 17 (JDK)
- Maven 3.9+
- Node.js 18+
- MySQL 8+ (or Docker Desktop if using containers)

---

## Database Setup (Local MySQL)
1. Start MySQL and run these SQL commands (Workbench/CLI):
```sql
CREATE DATABASE hms_db;
CREATE USER 'hmsuser'@'localhost' IDENTIFIED BY 'hmspassword';
GRANT ALL PRIVILEGES ON hms_db.* TO 'hmsuser'@'localhost';
FLUSH PRIVILEGES;
```
2. Confirm you can connect:
- host: localhost, port: 3306
- database: hms_db
- user: hmsuser
- pass: hmspassword

### Backend DB Config
`hms-backend/src/main/resources/application.properties` uses env overrides with safe defaults:
```
spring.datasource.url=${SPRING_DATASOURCE_URL:jdbc:mysql://localhost:3306/hms_db}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME:hmsuser}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:hmspassword}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
# Optional: change port if 8080 is busy
# server.port=8082
```

---

## Run: Backend (Local)
```bash
cd "C:\Users\Chiru\hospital management system\hms-backend"
# If 8080 is in use, set server.port=8082 in application.properties
mvn clean spring-boot:run
```
- Backend will start at `http://localhost:8080` (or 8082 if changed).

## Run: Backend (Docker Compose)
```bash
cd "C:\Users\Chiru\hospital management system\hms-backend"
docker compose up --build -d
```
- Starts MySQL and Backend in containers (DB creds are set in compose).

---

## Run: Frontend (Vite + React)
```bash
cd C:\Users\Chiru\doc-assist-portal
npm install
npm run dev
```
- Vite will start at `http://localhost:8081` if 8080 is busy (it auto-selects a free port).
- The frontend calls the backend at `http://localhost:8080` by default. If the backend runs on a different port (e.g., 8082), update these files:
  - `src/pages/SignIn.tsx`
  - `src/pages/SignUp.tsx`
  Change:
  ```ts
  const API_BASE = 'http://localhost:8080';
  ```
  to:
  ```ts
  const API_BASE = 'http://localhost:8082';
  ```

---

## API Endpoints (Auth)
- `POST /api/auth/register`  Body: `{ username, email, password, role, enabled }`
- `POST /api/auth/login`     Body: `{ username, password }` → returns `{ id, username, email, role }`
- `GET  /api/auth/user/{username}` → returns user

Role-secured paths (placeholders):
- `/api/admin/**`  (ADMIN)
- `/api/doctor/**` (DOCTOR)
- `/api/patient/**` (PATIENT)

---

## Dashboards (Frontend Routes)
- Admin: `http://localhost:8081/admin`
- Doctor: `http://localhost:8081/doctor`
- Patient: `http://localhost:8081/patient`
- After login, users are redirected by role automatically.

---

## Troubleshooting
- Port 8080 in use:
  - Kill process (admin PowerShell):
    ```powershell
    Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
    ```
  - Or change backend port in `application.properties`:
    ```
    server.port=8082
    ```
- Access denied for MySQL user:
  - Re-run the SQL in Database Setup exactly as shown.
  - Ensure MySQL service is running.
- CORS issues:
  - Backend allows `http://localhost:8081` and `http://localhost:3000` by default.
- Frontend can’t reach backend:
  - Verify backend port and update `API_BASE` in `SignIn.tsx` and `SignUp.tsx`.

---

## Development Scripts
Backend:
```bash
mvn clean spring-boot:run
mvn -DskipTests package
```
Frontend:
```bash
npm run dev
npm run build
npm run preview
```

---

## Git: Push Backend and Frontend to Your GitHub
You can keep them as two repos or combine into a monorepo. Here are two-repo steps:

### Push Backend
```bash
cd "C:\Users\Chiru\hospital management system\hms-backend"
git init
git add .
git commit -m "chore(backend): initial HMS backend"
git branch -M main
git remote add origin https://github.com/<your-username>/hms-backend.git
git push -u origin main
```

### Push Frontend
```bash
cd C:\Users\Chiru\doc-assist-portal
git init
git add .
git commit -m "chore(frontend): initial MedCare UI"
git branch -M main
git remote add origin https://github.com/<your-username>/medcare-frontend.git
git push -u origin main
```

> Replace `<your-username>` with your GitHub username. If the repos don’t exist yet, create them on GitHub first (same names or any names you prefer).

---

## Roadmap
- JWT-based authentication (stateless)
- Appointment booking flow (end-to-end)
- Doctor prescription issuance + patient viewing (end-to-end)
- Role-protected routes in frontend
- CI/CD and AWS deployment

---

## License
This project is for learning/demo purposes. Update with your preferred license.


Secure Login System with Role-Based Access Control (RBAC)
This project is a secure login system built using Node.js (Express.js) and PostgreSQL. It allows users to log in with their email and password, select their role (School, Parent, or Student), and access role-specific dashboards. The system uses JWT (JSON Web Token) for authentication and implements role-based access control (RBAC) to restrict access to certain features.

Features

User Authentication:
Users can log in using their email and password.
Users must select their role (School, Parent, or Student) during login.
Passwords are securely hashed using bcrypt.
Role-Based Dashboards:
School Dashboard: Can access and manage student achievements.
Parent Dashboard: Can view their child’s achievements.
Student Dashboard: Can view their own achievements.
API Endpoints:
POST /auth/login: Authenticate users and generate a JWT token.
GET /student/achievements/{student_id}: Fetch student achievements (accessible only to Parents and Students).
Security:
JWT-based authentication.
Role-based access control (RBAC).
Database:
PostgreSQL database with tables for users and student achievements.
Tech Stack

Backend: Node.js, Express.js
Database: PostgreSQL
Authentication: JWT (JSON Web Token)
Password Hashing: bcrypt
API Testing: Postman

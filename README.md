# 🧠 Job-Backend

This is the backend for the Job Portal application built using **Node.js**, **Express.js**, and **MongoDB Atlas**. It handles all core API logic, including user authentication, job posting, and password management.

---

## 🚀 Tech Stack

- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB Atlas** (Cloud Database)
- **Mongoose** (ODM for MongoDB)
- **dotenv** (Environment config)
- **nodemon** (Development server)

---

## 📁 Project Structure

job-backend/
├── controllers/ # Route logic (e.g., auth, jobs)
├── models/ # Mongoose schemas
├── routes/ # API route handlers
├── services/ # Business logic/services
├── middleware/ # (currently empty - for auth/logging/etc.)
├── .env # Environment variables
├── index.js # Main entry point
├── package.json # NPM config


## 🔑 Features

- ✅ User Signup/Login
- 🔐 Password Reset via Email
- 📬 JWT Authentication (in progress or planned)
- 📃 Job Posting APIs
- 🌐 MongoDB Atlas Cloud Integration

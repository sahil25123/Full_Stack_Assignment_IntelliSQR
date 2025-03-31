Here’s a `README.md` file for your full-stack assignment based on the provided requirements:

---

# Full-Stack Assignment

## 🚀 Project Overview

This is a full-stack web application built using **React (TypeScript) for the frontend** and **Node.js (TypeScript) with Prisma for the backend**. The application follows modern development practices and strictly adheres to type safety, error handling, and efficient API interactions.

## 📂 Project Structure

```
Full-Stack-Assignment/
├── frontend/   # React-based frontend with TypeScript
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── hooks/        # Custom Hooks for business logic
│   │   ├── api/          # API handling
│   │   ├── pages/        # Page components
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│
├── backend/   # Node.js backend with TypeScript & Prisma
│   ├── src/
│   │   ├── controllers/  # Business logic for API endpoints
│   │   ├── routes/       # Express.js routes
│   │   ├── prisma/       # Prisma schema & migrations
│   ├── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/schema.prisma
│   ├── .env
│   ├── README.md
│
└── README.md
```

---

## 🖥️ Frontend

### Tech Stack
- React (TypeScript)
- React Hook Form (Form Handling)
- React Query (State Management & API Handling)
- Zod (Schema Validation)

### Setup & Installation

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

---

## 🛠️ Backend

### Tech Stack
- Node.js (TypeScript)
- Express.js (Routing)
- Prisma (ORM for database)
- MySQL (Database)

### Setup & Installation

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file and add:
   ```
   DATABASE_URL="your_MySQL_connection_string"
   ```

4. Run Prisma migrations:
   ```sh
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```sh
   npm run dev
   ```

---

## 🎥 Video Demonstration

📌 **Google Drive Link**: 

---

## 📝 Features Implemented

✅ **Frontend**
- Fully responsive UI based on Figma design
- Type safety with TypeScript
- Form validation with React Hook Form + Zod
- API handling with React Query
- Proper error handling and state management

✅ **Backend**
- Node.js server with TypeScript
- Prisma for database management
- User authentication (email + password)
- Structured API routes and controllers
- Error handling with custom middleware

---


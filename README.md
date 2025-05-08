# 📋 Job Management Admin Dashboard

A full-stack job management admin interface where users can create, view, and manage job listings. Designed for admin control panels or job posting sites.

---

## 📸 Preview

![Preview](./path-to-your-screenshot.png)

---

## 🚀 Features

- 🧭 Full-stack architecture (Next.js frontend, NestJS backend)
- 🖥️ Beautiful and responsive UI using **Mantine UI**
- 🧾 Form handling with **React Hook Form**
- 💽 PostgreSQL database integration
- ⚙️ REST API for creating and fetching jobs
- 🧊 Modal-based job creation form
- 🎯 Salary filtering, location & job type filters

---

## 🛠️ Tech Stack

| Frontend         | Backend          | Database        |
|------------------|------------------|-----------------|
| Next.js          | NestJS           | PostgreSQL      |
| Mantine UI       | TypeScript       | Prisma ORM      |
| React Hook Form  | REST API         | pg (PostgreSQL driver) |

---

## 📂 Project Structure

```
job-dashboard/
│
├── frontend/        # Next.js + Mantine UI + React Hook Form
│
├── backend/         # NestJS + Prisma + PostgreSQL
│
└── README.md        # This file
```

---

## 🧑‍💻 How to Set Up (Beginner Friendly)

### ✅ Prerequisites

- [Node.js (v18+)](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

---

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/your-username/job-dashboard.git
cd job-dashboard
```

---

### 2. ⚙️ Setup the Backend

```bash
cd backend
cp .env.example .env  # or create a .env file

# Install dependencies
npm install

# Setup Prisma
npx prisma generate
npx prisma migrate dev --name init

# Start backend server
npm run start:dev
```

📝 **Backend `.env` Example:**
```
DATABASE_URL="postgresql://user:password@localhost:5432/jobdb"
```

---

### 3. 💻 Setup the Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Start frontend dev server
npm run dev
```

---

## 🧪 API Endpoints (Backend)

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | `/jobs`          | Create a new job    |
| GET    | `/jobs`          | Get all jobs        |

---

## ✨ Example Job Schema

```json
{
  "title": "Frontend Developer",
  "company": "Cyber Mind Works",
  "location": "Remote",
  "jobType": "Full-time",
  "minSalary": 50000,
  "maxSalary": 70000,
  "experience": "1-3 yr Exp",
  "description": "Build UI with React."
}
```

---

## 📎 Scripts

### Frontend

```bash
npm run dev       # Start dev server
npm run build     # Build for production
```

### Backend

```bash
npm run start:dev # Start dev server
npx prisma studio # Visual database browser
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 🛡 License

This project is open source and available under the [MIT License](LICENSE).
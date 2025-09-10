# Thinkboard - MERN Web App

A **MERN stack** web application with authentication, notes management, rate limiting, and a responsive React frontend.

---
### **Live Website**
https://thinkboard-ay3x.onrender.com/

---

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />&nbsp;
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />&nbsp;
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />&nbsp;
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />&nbsp;
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />&nbsp;
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />&nbsp;
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />&nbsp;
  <img src="https://img.shields.io/badge/Upstash-FF6C37?style=for-the-badge&logo=redis&logoColor=white" alt="Upstash/Redis" />&nbsp;
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render" />
</p>


---

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/LOGANSWP/Thinkboard.git
cd Thinkboard
```

### **2. Backend Setup**

```bash
cd backend
npm init -y
npm install express@4.18.2 mongoose@8.14.3 dotenv@16.5.0 cors@2.8.5 nodemon -D
npm install @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
```

Create a .env file:

```
MONGO=<your-mongo-connection-string>
```

Update package.json:

```json
"type": "module",
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

------

### **3. Frontend Setup**

```bash
cd ../frontend
npm create vite@latest .
# Select React + JavaScript
npm install
npm run dev
```

Install routing, toast, axios, icons:

```bash
npm install react-router react-hot-toast axios lucide-react
```

Set up Tailwind CSS and daisyUI:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install daisyui@4.12.24 -D
```

------

### **4. Deployment**

1. Move .gitignore to the root folder and add .env.
2. Initialize git:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/LOGANSWP/Thinkboard.git
git branch -M main
git push -u origin main
```

3. Prepare scripts in root package.json:

```json
"scripts": {
  "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
  "start": "npm run start --prefix backend"
}
```

4. Run build and deploy to [Render](https://render.com).

------

## **Features**

- Notes management with REST API
- Rate limiting with Upstash/Redis
- Dynamic Axios requests
- React + Tailwind + daisyUI frontend
- CORS support and environment-based configuration

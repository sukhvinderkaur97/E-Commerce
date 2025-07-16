# 🛒 E‑Commerce App

An end‑to‑end ecommerce platform featuring customer & admin dashboards, Google OAuth login, robust authentication/authorization, product management, and order tracking.  
> **Status:** MVP complete—🚧 *payment gateway integration in progress*.

---

## ✨ Features

| Module            | Highlights                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **User Dashboard**| Browse catalog, add to cart, place orders, view order history               |
| **Admin Panel**   | CRUD products & categories, manage orders, analytics overview               |
| **Auth**          | Email + password signup/login, Google OAuth 2.0, JWT refresh‑token flow     |
| **Security**      | Bcrypt password hashing, HTTP‑only cookies, rate‑limiting, helmet headers   |
| **State**         | Global cart & user state via Redux Toolkit (🔧 or your chosen state lib)    |
| **Styling**       | BOOTSTRAP utility‑first design                                              |

---

## 🏗️ Tech Stack

| Layer          | Technology (example)              |
|----------------|-----------------------------------|
| **Frontend**   | React.JS, Vite, BOOTSTRAP      |
| **Backend**    | Node.js , Express.js           |
| **Database**   | MongoDB  + Mongoose 7        |
| **Auth**       | JWT, Google OAuth 2.0             |

---

## 🚀 Quick Start

```bash
# 1. Clone & install
git clone [https://github.com/<your‑username>/<repo>.git](https://github.com/sukhvinderkaur97/E-Commerce.git)
cd server
npm install && cd client && npm install

# 2. Configure env vars
cp .env.example .env
# edit .env with your keys

# 3. Run in dev mode (concurrently)
npm run dev

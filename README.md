# HAVEN — Real Estate Property Marketplace

A modern, responsive, production-quality Real Estate Property Listing application built with React.js, Vite, Tailwind CSS, Node.js, Express, and MongoDB.

---

## 🏗️ Project Architecture

The project is structured into two completely independent, top-level applications:

```text
company_task/
│
├── frontend/             # React + Vite Client Application
│   ├── src/
│   │   ├── components/   # Navbar, Hero, SearchBar, FilterPanel, PropertyCard, ImageCarousel, etc.
│   │   ├── pages/        # Home, PropertyDetails, Favorites, NotFound
│   │   ├── context/      # PropertyContext state provider
│   │   ├── services/     # Axios API service layer (api.js & propertyService.js)
│   │   ├── utils/        # Price formatting (formatPrice.js) & filter helpers (filters.js)
│   │   ├── data/         # Offline fallback properties dataset (fallbackProperties.js)
│   │   ├── hooks/        # useProperties & useFavorites custom hooks
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json       # Single-Page Application (SPA) Vercel rewrite configuration
│   ├── .env.example
│   ├── .env
│   └── package.json
│
├── backend/              # Node.js + Express + MongoDB REST API Backend
│   ├── config/           # MongoDB database connection (db.js)
│   ├── controllers/      # Property API request controllers (propertyController.js)
│   ├── models/           # Mongoose schemas (Property.js)
│   ├── routes/           # Express API endpoints (propertyRoutes.js)
│   ├── middleware/       # 404 & Express error handler middleware (errorMiddleware.js)
│   ├── data/             # Realistic Indian property seed data (seedData.js & seedRunner.js)
│   ├── server.js         # Express server entrypoint
│   ├── .env.example
│   ├── .env
│   └── package.json
│
├── .gitignore            # Root repository ignore rules
└── README.md             # Project documentation
```

---

## ⚡ Quick Start & Local Setup

### 1. Frontend Setup (`/frontend`)

```bash
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

The frontend application will start on `http://localhost:3000`.

---

### 2. Backend Setup (`/backend`)

In a new terminal window:

```bash
cd backend

# Install dependencies
npm install

# (Optional) Populate MongoDB database explicitly
npm run seed

# Start Express development server
npm run dev
```

The backend API server will start on `http://localhost:5000`.

---

## 📡 REST API Endpoints (`/backend`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/properties` | Retrieve listings (supports `search`, `type`, `city`, `priceRange`, `bedrooms`, `sortBy`) |
| `GET` | `/api/properties/:id` | Retrieve single property details by ID |
| `POST` | `/api/properties` | Create a new property listing |
| `PUT` | `/api/properties/:id` | Update an existing property listing |
| `DELETE` | `/api/properties/:id` | Delete a property listing |
| `POST` | `/api/seed` | Explicitly seed MongoDB database with initial property dataset |

---

## 🛡️ Dual-Mode Resilience & Fallback Data

If the Express backend server or MongoDB database is offline, the frontend's centralized `propertyService` automatically switches to the local fallback dataset (`frontend/src/data/fallbackProperties.js`).

All core features—including **Search**, **Multi-criteria Filters**, **Sorting**, **Property Detail Carousel**, **Favorites**, and **Recently Viewed**—continue operating without throwing errors or showing blank screens.

---

## 🌐 Independent Deployment

### Frontend (Vercel / Netlify)
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: `VITE_API_URL=https://your-backend.onrender.com/api`

### Backend (Render / Railway)
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables: `PORT=5000`, `MONGO_URI=your_mongodb_connection_string`, `CLIENT_URL=https://your-frontend.vercel.app`

---

## 📄 License

MIT License © 2026 HAVEN Real Estate Inc.

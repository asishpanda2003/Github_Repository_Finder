🚀 MERN GitHub Repo Searcher

A full-stack MERN application that allows users to search GitHub repositories, browse results with pagination, and view a history of recent searches.

🔍 Search → 📄 Paginate → 📜 Save History → ❌ Delete History

🛠️ Tech Stack

MongoDB → Stores search history

Express.js → Backend framework for APIs

React.js → Frontend UI built with hooks & components

Node.js → Server runtime

Tailwind CSS → Modern, responsive styling

✨ Features

✅ Repository Search – Search GitHub repositories by keyword
✅ Pagination – Navigate results with Next & Previous buttons
✅ Search History – Save last 10 unique searches
✅ Delete History – Remove unwanted search terms
✅ Responsive UI – Works seamlessly on all devices
✅ Clean Codebase – Modular backend (controller/routes) & custom React hooks


1️⃣ Backend Setup
cd backend
npm install
cp .env.example .env

Edit .env with your config:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
GITHUB_API_URL=https://api.github.com/search/repositories

Run server:

npm start

👉 API running at http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


👉 App available at http://localhost:5173

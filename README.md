MERN GitHub Repo Searcher
This is a full-stack web application that allows users to search for GitHub repositories, view the results, and see a history of their recent searches.

The application is built with the MERN stack:

MongoDB: A NoSQL database to store search history.

Express.js: A backend framework for building the API.

React.js: A frontend library for building the user interface.

Node.js: The JavaScript runtime environment for the server.

Features
Repository Search: Search for GitHub repositories by keyword.

Pagination: Navigate through search results with "Next" and "Previous" buttons.

Search History: The 10 most recent, unique searches are saved and displayed.

Delete History: Users can remove individual items from their search history.

Responsive UI: The interface is built with Tailwind CSS for a clean, modern look on all devices.

Modular Codebase: The backend uses a controller/route structure, and the frontend uses custom hooks for clean, maintainable code.

Project Structure
The project is divided into two main folders: backend and frontend.

Backend Structure
backend/
├── controllers/
│   └── searchController.js   # Logic for handling API requests
├── models/
│   └── Search.js             # Mongoose schema for search terms
├── routes/
│   └── api.js                # API route definitions
├── .env.example              # Example environment variables
├── package.json
└── server.js                 # Main server entry point

Frontend Structure
Here is a more detailed view of the frontend folder and its important files:

frontend/
├── public/
│   └── github.svg              # Public assets
├── src/
│   ├── components/
│   │   ├── Pagination.jsx
│   │   ├── PreviousSearches.jsx
│   │   ├── RepoList.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useRepoSearch.js  # Custom hook for search logic
│   ├── services/
│   │   └── api.js            # API request handling
│   ├── App.jsx               # Main application component
│   ├── index.css             # Tailwind CSS and global styles
│   └── main.jsx              # Frontend entry point
├── index.html                # Main HTML file
├── package.json
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite configuration

Getting Started
Prerequisites
Node.js and npm (or yarn)

A running MongoDB instance (you can use a local instance or a cloud service like MongoDB Atlas)

Git

1. Backend Setup
First, set up and run the backend server.

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Create an environment file:
Copy the example .env file.

cp .env.example .env

Open the new .env file and add your MongoDB connection string:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
GITHUB_API_URL=https://api.github.com/search/repositories

Start the backend server:

npm start

The server should now be running on http://localhost:5000.

2. Frontend Setup
Next, set up and run the React frontend.

Navigate to the frontend folder (from the project root):

cd frontend

Install dependencies:

npm install

Start the frontend development server:

npm run dev

The application will open in your browser, usually at http://localhost:5173. You can now use the app.

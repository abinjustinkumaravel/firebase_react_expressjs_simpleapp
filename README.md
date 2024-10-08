# Firebase React ExpressJS Simple App

This repository hosts a full-stack web application developed using React for the frontend, Express.js for the backend, and Firebase Realtime Database for real-time data management. The project demonstrates the integration of these technologies to create a simple CRUD (Create, Read, Update, Delete) application.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The goal of this project is to demonstrate how to build a full-stack web application with a React frontend, Express.js backend, and Firebase Realtime Database as the primary data store. It features real-time updates, CRUD operations, and secure API management.

## Features

- User-friendly interface built with React
- Real-time data storage and retrieval using Firebase Realtime Database
- CRUD operations for user data
- Secure API interactions using Express.js
- Environment variables to keep API keys and sensitive data safe

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: Firebase Realtime Database
- **Tools**: Git, GitHub, dotenv for environment variables

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- Firebase account with a Realtime Database set up

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abinjustinkumaravel/firebase_react_expressjs_simpleapp.git
   cd firebase_react_expressjs_simpleapp
   ```

2. **Install dependencies for the frontend and backend:**

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Add your Firebase credentials:**
   - Create a `.env` file in the root directory of the backend.
   - Add your Firebase keys to the `.env` file:
     ```bash
     FIREBASE_API_KEY=your-firebase-api-key
     FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
     FIREBASE_PROJECT_ID=your-firebase-project-id
     FIREBASE_DATABASE_URL=your-firebase-database-url
     ```

## Project Structure

```
firebase_react_expressjs_simpleapp/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

## Usage

1. **Run the backend server:**

   ```bash
   cd backend
   node index.js
   ```

2. **Run the frontend React application:**

   ```bash
   cd frontend
   npm start
   ```

3. Open your web browser and go to `http://localhost:3000` to see the app in action.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance the functionality of this project.

## License

This project is open-source and available under the MIT License.

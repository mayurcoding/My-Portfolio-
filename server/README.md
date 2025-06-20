# Portfolio Backend (Server)

This directory contains the backend of the portfolio website, built with Node.js, Express, and Mongoose.

## Features

- **RESTful API**: A basic Express server setup, ready to be expanded with RESTful API endpoints.
- **Database Integration**: Configured to connect to a MongoDB database using Mongoose.
- **Environment Variable Management**: Uses `dotenv` to securely manage sensitive information like database connection strings.
- **CORS Enabled**: Pre-configured with the `cors` middleware to allow requests from the client application.

## Tech Stack

- **Node.js**: A JavaScript runtime for building the server.
- **Express**: A web application framework for Node.js.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **dotenv**: For loading environment variables from a `.env` file.
- **nodemon**: For automatically restarting the server during development.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A running MongoDB instance (either local or on a cloud service like MongoDB Atlas)

### Setup & Running

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create an environment file:**
    - Create a new file named `.env` in this directory.
    - Add your MongoDB connection string to it:
      ```
      ATLAS_URI=your_mongodb_connection_string_here
      ```
4.  **Run the server:**
    - For development (with auto-restarting):
      ```bash
      npm run dev
      ```
    - For production:
      ```bash
      npm start
      ```
    The server will start on `http://localhost:5000`.

## API Endpoints

Currently, the server has one basic endpoint for testing:

- `GET /`: Returns a simple "Hello from the server!" message.

This is a starting point. You can add more routes to manage projects, services, or contact form submissions from the database. 
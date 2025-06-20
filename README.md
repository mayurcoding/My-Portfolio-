# MERN Stack Portfolio Website

This is a full-stack portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It features a separate client and server structure for better organization and scalability.

## Project Structure

- **/client**: Contains the React frontend. This is where all the UI components, styling, and user-facing functionality live. See the [client README](./client/README.md) for more details.
- **/server**: Contains the Node.js/Express backend. This handles the API, database connection, and other server-side logic. See the [server README](./server/README.md) for more details.

## Features

- **Frontend**: A modern, responsive, and highly customizable portfolio built with React. Features include a live video background, modular components, and sections for services, expertise, projects, and contact info.
- **Backend**: A robust backend built with Node.js and Express, ready to be connected to a MongoDB database for dynamic content management.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB instance)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install root dependencies:**
    ```bash
    npm install
    ```

3.  **Install server dependencies:**
    ```bash
    npm install --prefix server
    ```

4.  **Install client dependencies:**
    ```bash
    npm install --prefix client
    ```

5.  **Configure backend environment variables:**
    - Navigate to the `server` directory.
    - Create a file named `.env`.
    - Add your MongoDB connection string:
      ```
      ATLAS_URI=your_mongodb_connection_string_here
      ```

### Running the Application

To run both the client and server concurrently in development mode, use the following command from the root directory:

```bash
npm run dev
```

This will start:
- The React development server on `http://localhost:3000`.
- The Node.js backend server (with nodemon) on `http://localhost:5000`.

The client will be running on [http://localhost:3000](http://localhost:3000) and the server on [http://localhost:5000](http://localhost:5000). 
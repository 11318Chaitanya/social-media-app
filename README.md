# Social Media Platform

This platform is designed to create a vibrant online community where users can connect, share content, and engage with others. This project is built with a modern tech stack using Vite and Chakra UI for the frontend, and Express and Node.js for the backend.

## Key Features

1. **User Authentication and Profiles**
   - Secure user registration and login.
   - Users can create and customize their profiles.

2. **Messaging and Chat**
   - Private messaging between users.

3. **News Feed and Content Sharing**
   - Users can post text, images, videos, and links on the news feed.
   - Content can be shared, liked, and commented on.

## Additional Features
Feel free to suggest or contribute additional features to enhance our platform!

## Tech Stack

- **Frontend**: Vite, Chakra UI, React Recoil
- **Backend**: Express, Node.js, MongoDB, Socket.io

## Installation and Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/social-media-platform.git
    cd social-media-platform
    ```

2. Install backend dependencies:
    ```bash
    npm i
    ```

3. Create a `.env` file in the `backend` directory and add your environment variables (e.g., database connection string, JWT secret):
    ```env
    PORT=...
    MONGO_URI=...
    JWT_SECRET=...
    CLOUDINARY_CLOUD_NAME=...
    CLOUDINARY_API_KEY=...
    CLOUDINARY_API_SECRET=...
    ```

4. Start the backend server:
    ```bash
    node backend/server.js
    ```

   The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm i
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

   The frontend development server should now be running on `http://localhost:3000`.

### Running the Application

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000` to view the application.

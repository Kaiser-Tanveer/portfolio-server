# Portfolio Server API

This is the backend server for a portfolio website. It provides RESTful API endpoints to manage projects in the portfolio. The server is built using Node.js, Express, and MongoDB. It uses environment variables for sensitive information, such as database credentials, and includes error handling middleware.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To get started with the project, follow the steps below:

1. Clone the repository:

    ```bash
    git clone https://github.com/Kaiser-Tanveer/portfolio-server.git
    ```

2. Navigate to the project directory:

    ```bash
    cd portfolio-server
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file at the root of the project with the following variables:

```env
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
PORT=your_preferred_port_number (default is 3003)

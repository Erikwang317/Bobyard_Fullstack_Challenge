# Bobyard_Fullstack_Challenge

This project implements comment functionality similar to platforms like YouTube or Reddit. It uses Django Rest Framework with PostgreSQL for the backend and React.js for the frontend.

## Description

The backend provides RESTful APIs to add, delete, and edit comments, as well as listing all comments. The frontend displays these comments and allows the admin user to interact with them through a clean and simple UI.

## Getting Started

### Dependencies

- Python 3.8 or newer
- Django and Django Rest Framework
- PostgreSQL
- Node.js and npm
- React.js

### Setting up the Backend##USE

1. Install Python dependencies:
   ```bash
   pip install django djangorestframework psycopg2

2. Navigate to the backend directory and run migrations:
  ```bash
  python manage.py migrate
  
3. Start the Django development server:  
  ```bash
  python manage.py runserver
  ```

## USE
- The backend API will be available at http://127.0.0.1:8000/api/.
- The frontend will be accessible at http://localhost:3000.

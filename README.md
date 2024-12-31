# Career Guidance Platform

This project is a web-based application that provides career guidance recommendations based on user-inputted skills. It includes user registration, login with JWT-based authentication, and a secure API for career suggestions. The platform consists of a Django backend and a React-based frontend.

## Features

- **User Registration**: Users can register with a username, email, and password.
- **JWT Authentication**: Secure login with JSON Web Tokens stored in HTTP-only cookies.
- **Career Guidance**: Receive career suggestions based on entered skills.
- **User Profile Management**: View and update user profiles.

## Tech Stack

- **Backend**: Django, Django REST Framework, Django SimpleJWT
- **Frontend**: React, TypeScript

## Setup Instructions

### Backend

1. **Clone the repository**:
    git clone <repository_url>
    cd <repository_folder>
    ```

2. **Set up a virtual environment**:
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies**:
    pip install -r requirements.txt
    ```

4. **Apply migrations**:
    python manage.py migrate
    ```

5. **Run the development server**:
    python manage.py runserver
    ```

### Frontend

1. **Navigate to the frontend folder**:
    cd frontend
    ```

2. **Install dependencies**:
    yarn install
    ```

3. **Start the development server**:
    yarn dev
    ```

### API Endpoints

- **Registration**: `POST /api/users/register/`
- **Login**: `POST /api/users/login/`
- **Career Guidance**: `POST /api/users/career-guidance/`

### Example JSON Request for Career Guidance
{
  "skills": "programming, teamwork, problem-solving"
}

Future Improvements
Add password reset functionality.
Enhance the recommendation engine using AI/ML models.
Implement a feature for users to save their career recommendations.

License
This project is licensed under the MIT License. See LICENSE for more details.

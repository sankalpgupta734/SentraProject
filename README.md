# Frontend Assignment – Authentication & Dashboard

## Project Overview
This project is a frontend application developed as part of the Frontend Developer assignment for Sentra.World.  
It demonstrates a complete authentication flow, protected routing, API integration, and dashboard rendering using Angular.

The application uses public mock APIs to simulate real-world frontend behavior without requiring a backend.

---

## Tech Stack
- Framework: Angular
- Language: TypeScript
- Styling: CSS (custom styles, no UI library)
- HTTP Client: Angular HttpClient
- Authentication API: DummyJSON
- Data API: DummyJSON Users API
- State Management: LocalStorage (token-based)

---

## Authentication Flow
- User logs in using a public authentication API
- On successful login:
  - Access token is stored in localStorage
  - User details are stored locally
- Dashboard route is protected
- Unauthenticated users are redirected to the login page
- Logout clears stored data and redirects to login

---

## APIs Used

### Login API
POST https://dummyjson.com/auth/login

Demo Credentials  
Username: emilys  
Password: emilyspass  

---

### Users API
GET https://dummyjson.com/users

---

## Dashboard Features
- Displays a list of users with the following details:
  - Full Name
  - Age
  - Blood Group
  - Birth Date
  - Address
- Shows a loader while data is being fetched
- Graceful error handling with retry option
- Logout functionality

---

## Route Protection
- Dashboard route is protected using a functional route guard
- Unauthorized access redirects to the login page

---

## Project Structure
src/
 ├── app/
 │   ├── auth/
 │   │   ├── login/
 │   │   │   ├── login.component.ts
 │   │   │   ├── login.component.html
 │   │   │   └── login.component.css
 │   │   └── auth.service.ts
 │   │
 │   ├── dashboard/
 │   │   ├── dashboard.component.ts
 │   │   ├── dashboard.component.html
 │   │   ├── dashboard.component.css
 │   │   └── dashboard.service.ts
 │   │
 │   ├── core/
 │   │   └── guards/
 │   │       └── auth.guard.ts
 │   │
 │   ├── shared/
 │   │   └── loader/
 │   │       ├── loader.component.ts
 │   │       ├── loader.component.html
 │   │       └── loader.component.css
 │   │
 │   ├── app-routing.module.ts
 │   ├── app.component.ts
 │   └── app.module.ts
 │
 └── styles.css

---

## How to Run the Project

Prerequisites:
- Node.js (v16 or above)
- Angular CLI

Steps:
1. Install dependencies  
   npm install  

2. Run the application  
   ng serve  

3. Open the browser and navigate to  
   http://localhost:4200

---

## Functional Highlights
- Clean and modular code structure
- Clear separation of concerns
- Predictable state flow
- User-friendly UI and messages
- Realistic authentication simulation

---

## Notes
- DummyJSON is used instead of ReqRes to avoid API access issues and to provide a more realistic authentication flow.
- No real backend is required.
- Token persistence is handled using browser localStorage.

---

## Author
Sankalp  
Frontend Developer  
Submission for Sentra.World Technologies Pvt. Ltd

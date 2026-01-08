# SentraProject
Frontend Assignment – Authentication & Dashboard
📌 Project Overview

This project is a frontend application built as part of the Frontend Developer assignment for Sentra.World.
It demonstrates a mock authentication flow, protected routes, API integration, and robust error handling using Angular.

🛠️ Tech Stack

Framework: Angular

Language: TypeScript

Styling: CSS (custom, no UI library)

HTTP Client: Angular HttpClient

Authentication API: DummyJSON

Data API: DummyJSON Users API

State Management: LocalStorage (token-based)

🔐 Authentication Flow

User logs in using a public mock API

On successful login:

Access token is stored in localStorage

User details are stored locally

Unauthorized users cannot access the dashboard

Logout clears stored data and redirects to login

🌐 APIs Used
Login API
POST https://dummyjson.com/auth/login


Demo Credentials

Username: emilys
Password: emilyspass

Users API
GET https://dummyjson.com/users

📂 Project Structure
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

📊 Dashboard Features

Displays user data including:

Name

Age

Blood Group

Birth Date

Address

Loader while API call is in progress

Graceful error handling with retry option

Logout functionality

🔒 Route Protection

Dashboard route is protected using an Auth Guard

Unauthenticated users are redirected to the login page

⚙️ How to Run the Project
Prerequisites

Node.js (v16+ recommended)

Angular CLI

Steps
npm install
ng serve


Open browser and navigate to:

http://localhost:4200

✅ Functional Highlights

Clear separation of concerns

Predictable state flow

Clean and readable code structure

Realistic authentication simulation

User-friendly UI and messages

📝 Notes

This project uses DummyJSON instead of ReqRes to avoid API access issues and provide a more realistic authentication flow.

No real backend is involved.

Token persistence is handled via browser localStorage.

👤 Author

Sankalp
Frontend Developer
📧 Submitted for Sentra.World Technologies Pvt. Ltd.

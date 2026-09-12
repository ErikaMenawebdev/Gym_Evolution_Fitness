# 🏋️ Evolution Fitness Gym

### Full Stack Gym Management Web Application

Evolution Fitness Gym is a full-stack web application designed to manage the administrative operations of a gym, including clients, membership plans, registrations, payments, and administrative indicators.

The project was developed to strengthen my skills in **Full Stack JavaScript development**, integrating a React frontend, a Node.js/Express REST API, MongoDB, authentication with JWT, and a responsive user interface.

**Repository:** [GitHub — Gym Evolution Fitness](https://github.com/ErikaMenawebdev/Gym_Evolution_Fitness)

---

# 🚀 Key Features

### 👥 Client Management
- Create, view, update, and delete clients.
- Search clients by identification number.
- Manage personal and contact information.

### 📋 Membership Plans
- Create and manage gym plans.
- Configure plan duration and price.
- Update and delete existing plans.

### 📝 Membership Registration
- Register client memberships.
- Associate memberships with plans and payments.
- Automatically calculate the membership end date based on the selected plan.
- Track membership status.

### 💰 Payment Management
- Register and manage payments.
- Search payments by client identification number.
- Record payment method and amount.

### 📊 Administrative Dashboard
- Total clients.
- Total plans.
- Total registrations.
- Total payments.
- Total revenue.
- Active registrations.
- Current-month revenue.

### 🔐 Authentication & Security
- User registration.
- Login authentication.
- Password hashing with bcrypt.
- JWT-based authentication.
- Protected backend routes.
- Protected frontend routes.
- Automatic JWT handling with Axios interceptors.
- Logout and invalid/expired token handling.

---

# 📸 Application Preview

### 🔐 Login

<img src="https://raw.githubusercontent.com/ErikaMenawebdev/Gym_Evolution_Fitness/main/screenshots/login.png" alt="Evolution Fitness - Login" width="800">

### 📊 Dashboard

<img src="https://raw.githubusercontent.com/ErikaMenawebdev/Gym_Evolution_Fitness/main/screenshots/dashboard.png" alt="Evolution Fitness - Dashboard" width="800">

### 👥 Client Management

<img src="https://raw.githubusercontent.com/ErikaMenawebdev/Gym_Evolution_Fitness/main/screenshots/clientes.png" alt="Evolution Fitness - Clients" width="800">

### 📝 Membership Registration

<img src="https://raw.githubusercontent.com/ErikaMenawebdev/Gym_Evolution_Fitness/main/screenshots/inscripciones.png" alt="Evolution Fitness - Memberships" width="800">

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development and build tool |
| React Router | Client-side routing |
| Axios | HTTP communication |
| Tailwind CSS | Interface styling |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express | REST API |
| Mongoose | MongoDB ODM |
| JSON Web Token | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| CORS | Cross-origin communication |
| Morgan | HTTP request logging |

## Database

- MongoDB
- MongoDB Atlas

## Tools

- Git
- GitHub
- Postman
- ESLint
- Nodemon

---

# 🏗️ Architecture

The application follows a client-server architecture.

```text
                    EVOLUTION FITNESS

              ┌─────────────────────────┐
              │        FRONTEND         │
              │ React + Vite + Tailwind │
              │      React Router       │
              └───────────┬─────────────┘
                          │
                       Axios
                          │
                          ▼
              ┌─────────────────────────┐
              │         BACKEND         │
              │     Node.js + Express   │
              │        REST API         │
              └───────────┬─────────────┘
                          │
                       Mongoose
                          │
                          ▼
              ┌─────────────────────────┐
              │      MongoDB Atlas      │
              └─────────────────────────┘

Backend request flow

HTTP Request
     ↓
Router
     ↓
Authentication Middleware
     ↓
Controller
     ↓
Mongoose Model
     ↓
MongoDB
     ↓
HTTP Response

📁 Project Structure

Evolution Fitness/
├── controllers/
│   ├── clienteController.js
│   ├── dashboardController.js
│   ├── inscripcionController.js
│   ├── pagosController.js
│   ├── planesController.js
│   └── usuariosController.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       ├── services/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── middleware/
│   └── autenticar.js
│
├── models/
│   ├── cliente.js
│   ├── inscripcion.js
│   ├── pagos.js
│   ├── planes.js
│   └── usuarios.js
│
├── routers/
│   ├── cliente.js
│   ├── dashboard.js
│   ├── inscripcion.js
│   ├── pagos.js
│   ├── planes.js
│   └── usuarios.js
│
├── screenshots/
│   ├── login.png
│   ├── dashboard.png
│   ├── clientes.png
│   └── inscripciones.png
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

🗄️ Database

MongoDB Atlas is used as the database and Mongoose is used as the ODM.

Main collections
Clientes

Stores client personal and contact information.

cedula
nombre
apellido
fechaNacimiento
sexo
telefono
correo
ciudad

Planes

Stores the membership plans offered by the gym.

nombre
duracionDias
precio
Inscripcion

Stores client membership registrations.

cedula
idPlan
idPago
fechaInscripcion
fechaInicio
fechaFin
estado

idPlan references Planes and idPago references Pagos.

The fechaFin value is calculated automatically using the start date and the duration of the selected plan.

Pagos

Stores payment information.

cedula
nombre
valor
metodoPago

Payment data is also used to calculate the revenue indicators displayed in the Dashboard.

Usuarios

Stores system access accounts.

nombre
correo
password

Passwords are stored as bcrypt hashes rather than plain text.

🔐 Authentication & Security

Evolution Fitness implements authentication using JSON Web Tokens (JWT).

Authentication flow
User Login
    ↓
Find user by email
    ↓
bcrypt.compare()
    ↓
Validate credentials
    ↓
Generate JWT
    ↓
Store token in frontend
    ↓
Axios adds Authorization header
    ↓
Backend verifies JWT
    ↓
Access protected resource

Protected API routes require:

Authorization: Bearer <token>

The JWT is valid for 2 hours.

The backend validates the token through the autenticar.js middleware.

The frontend also uses:

RutaProtegida for protected navigation.
Axios request interceptors to attach the token.
Axios response interceptors to handle 401 Unauthorized.
localStorage for token persistence during the session.
Logout logic to remove the token.
📡 REST API

The application exposes 23 REST API endpoints.

Authentication
Method	Endpoint	Description	JWT
POST	/usuarios/guardar	Register user	❌
POST	/usuarios/login	Login	❌
Clients
Method	Endpoint	Description	JWT
GET	/cliente	List clients	✅
POST	/cliente/show	Find client by ID number	✅
POST	/cliente/guardar	Create client	✅
PUT	/cliente/actualizar	Update client	✅
DELETE	/cliente/eliminar	Delete client	✅
Plans
Method	Endpoint	Description	JWT
GET	/planes	List plans	✅
POST	/planes/show	Find plan by ID	✅
POST	/planes/guardar	Create plan	✅
PUT	/planes/actualizar	Update plan	✅
DELETE	/planes/eliminar	Delete plan	✅
Memberships
Method	Endpoint	Description	JWT
GET	/inscripcion	List memberships	✅
POST	/inscripcion/show	Find memberships by ID number	✅
POST	/inscripcion/guardar	Create membership	✅
PUT	/inscripcion/actualizar	Update membership	✅
DELETE	/inscripcion/eliminar	Delete membership	✅
Payments
Method	Endpoint	Description	JWT
GET	/pagos	List payments	✅
POST	/pagos/show	Find payments by ID number	✅
POST	/pagos/guardar	Create payment	✅
PUT	/pagos/actualizar	Update payment	✅
DELETE	/pagos/eliminar	Delete payment	✅
Dashboard
Method	Endpoint	Description	JWT
GET	/dashboard	Get administrative indicators	✅
⚙️ Installation & Setup
Requirements
Node.js
npm
Git
MongoDB Atlas
1. Clone the repository
git clone https://github.com/ErikaMenawebdev/Gym_Evolution_Fitness.git
cd Gym_Evolution_Fitness
2. Install backend dependencies

From the project root:

npm install
3. Install frontend dependencies
cd frontend
npm install
cd ..
4. Configure environment variables

Create a .env file in the project root:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=7000

Never commit the .env file or expose database credentials and JWT secrets publicly.

An .env.example file will be added in a future update to simplify project setup.

5. Start the backend

From the project root:

npm start

The backend runs by default on:

http://localhost:7000
6. Start the frontend

Open another terminal:

cd frontend
npm run dev

Vite will display the frontend URL in the terminal.

Both the frontend and backend servers must be running during local development.

🧪 Testing & Validation

Functional and integration tests were performed during development.

Authentication
Valid login.
Invalid credentials.
Non-existent user.
JWT generation.
JWT validation.
Access without token.
Access with invalid token.
Automatic handling of 401 Unauthorized.
Logout.
CRUD operations

CRUD functionality was tested for:

Clients.
Plans.
Memberships.
Payments.
Business logic

The membership module was tested for:

Plan association.
Payment association.
Automatic calculation of membership end date.
Handling of non-existent plans.
Dashboard

The following indicators were validated:

Total clients.
Total plans.
Total memberships.
Total payments.
Total revenue.
Active memberships.
Current-month revenue.
Integration

The complete communication between frontend and backend was validated:

React
  ↓
Services / Axios
  ↓
REST API
  ↓
Middleware
  ↓
Controllers
  ↓
Mongoose
  ↓
MongoDB Atlas

The current project does not include an automated testing suite. The validations described above correspond to functional and integration testing performed during development.

🧠 Learning Outcomes

The development of Evolution Fitness strengthened my knowledge of:

Full Stack JavaScript development.
React application development.
REST API design.
Node.js and Express.
MongoDB and Mongoose.
CRUD operations.
JWT authentication.
Password hashing with bcrypt.
Protected routes.
HTTP communication with Axios.
Error handling and HTTP status codes.
MongoDB aggregation.
Business logic implementation.
Frontend-backend integration.

One of the most important challenges was understanding and implementing the complete authentication flow, from login and password verification to JWT generation, protected routes, token validation, and logout.

The project also helped strengthen my ability to investigate technical problems, debug errors, research solutions, and understand how the different layers of a Full Stack application interact.

🚀 Future Improvements

Possible future improvements include:

Role-based access control.
Password recovery and password change.
Notification system.
Enhanced responsive design.
Advanced Dashboard charts and analytics.
Trainer and workout management.
Client progress tracking.
Online payment integration.
Automated testing.
Production deployment.
👩‍💻 About the Project

Evolution Fitness Gym is a personal learning project developed to consolidate my knowledge as a Full Stack JavaScript developer.

The project allowed me to work through different stages of application development, from building the user interface and REST API to database management, authentication, security, and frontend-backend integration.

It is the first of several projects through which I plan to continue strengthening my technical skills and professional experience.

🔗 Repository

GitHub:
https://github.com/ErikaMenawebdev/Gym_Evolution_Fitness



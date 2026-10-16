# Student Portal — College Management System

The Student Portal allows students to access their academic information and campus services, including their profile, subjects, grades, schedule, enrollment, finance, library, clinic, and school announcements.

## About the Module

The Student Portal provides a centralized place for students to view important academic information and access college services. It helps organize student-related information into separate pages, making it easier for students to navigate the system. The module is designed to communicate with the other College Management System modules through REST APIs.

### Users

| User          | What they do in this module 
|---            |---
| Student       | View their profile, subjects, grades, class schedule, enrollment information, finance records, library services, clinic                                services, and announcements. 
| Faculty       | Access relevant student or academic information if authorized and supported by the system. 
| Staff / Admin | Manage or provide official student-related records through the appropriate modules and APIs. 

### Features

- [ ] Student login and dashboard
- [ ] View student profile and subjects
- [ ] View grades and class schedule
- [ ] View enrollment and registrar information
- [ ] View finance and payment information
- [ ] Access library and clinic services
- [ ] View faculty information and school announcements

*Feature completion must be checked after implementation and testing. Each feature should have a corresponding endpoint in `server/openapi.yaml` where applicable.*

## Part of the College Management System

This module is one of eight modules that together make up the College Management System.

| Module         | This repo |
|---             |:---       |
| Landing Page   |           |
| Library        |           |
| Student Portal | ✅        |
| Finance        |           |
| Faculty        |           |
| Clinic         |           |
| Registrar      |           |
| Inventory      |           |

How this module connects to the other modules: [docs/integration.md](docs/integration.md).

## Team

| Name          | Role          | GitHub                                   |
|---            |---            |---                                       |
| Iris Atanante | Backend       | [@11iRIS15](https://github.com/11iRIS15) |
| Angelica      | Frontend      | [@angelicadelatorre41-art]               |
| Joan          | Documentation | [@joan-delvalle]                         |

**Roles:**

- **Backend — Iris:** Owns `server/`, backend routes and services, mock data, and the API contract.
- **Frontend — Angelica:** Owns `client/`, including the React interface, navigation, pages, styling, and user interactions.
- **Documentation — Joan:** Owns `docs/`, this README, and the instructor's handout, which is submitted separately.

## Tech Stack

| Part                 | Technology 
|---                   |---         
| Frontend (`client/`) | React + Vite 
| Backend (`server/`)  | Node.js + Express.js 
| API documentation    | OpenAPI 3.0 + Swagger UI 
| Database             | None yet — mock data. Planned database: to be decided. 

The frontend provides the user interface, while the backend exposes REST API endpoints. Mock data is used during the API development stage; a persistent database has not been confirmed.

## Project Structure

```text
.
├── client/             # React + Vite frontend
├── server/             # Express backend API
│   ├── src/            # Backend source files, if using this layout
│   └── openapi.yaml    # API contract
├── docs/               # Project documentation
├── CONTRIBUTING.md     # Group Git workflow
└── README.md
```

*Confirm the actual folder and file names in your repository before finalizing this structure.*

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code or another code editor

### 1. Clone the Repository

```bash
git clone https://github.com/11iRIS15/StudentPortal.git
cd StudentPortal
```

### 2. Run the Backend

Open a terminal in the project folder:

```bash
cd server
npm install
npm run dev
```

The backend is expected to use port `8000`, based on the earlier project setup. These commands require a valid `package.json` with a `dev` script. If the command fails, check the scripts in `server/package.json` and follow the actual backend configuration.

- API base URL: `http://localhost:8000/api/v1`
- Swagger UI: `http://localhost:8000/docs`

### 3. Run the Frontend

Open a **second terminal** from the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed in the terminal by Vite. It is commonly `http://localhost:5173`, but the port may change if that port is already occupied.

### Environment Variables

| Variable            | Where                 | Example                        | What it's for 
|---                  |---                    |---                             |---
| `PORT`              | Server, if configured | `8000`                         | Port used by the API server 
| `CORS_ORIGINS`      | Server, if configured | `http://localhost:5173`        | Frontend origins allowed to call the API 
| `VITE_API_BASE_URL` | Client, if configured | `http://localhost:8000/api/v1` | Base URL used for API requests 

These are suggested example variables. Confirm which variables are actually required by the server and client before adding them to `.env.example` files. Do not commit passwords, API keys, or other secrets.

## API Documentation

- **Swagger UI:** `http://localhost:8000/docs` — start the backend first.
- **API contract:** `server/openapi.yaml`

The API is intended to provide endpoints for the health check, student profile, dashboard, enrollment, schedule, grades, finance, library, clinic, and announcements. Confirm the exact endpoint paths and HTTP methods in `server/openapi.yaml`.

## Documentation

| Document                               | What's inside 
|---                                     |---
| [Architecture](docs/architecture.md)   | How the frontend and backend fit together 
| [Data Model](docs/data-model.md)       | Data entities and their relationships 
| [Integration](docs/integration.md)     | How the Student Portal connects with other modules 
| [Design System](docs/design-system.md) | Colors, fonts, components, and UI rules 
| [Decisions](docs/decisions/)           | Reasons for technology and design choices 

*Create the listed documentation files if they do not already exist.*

## Project Status

### Midterm

- [ ] API contract (`server/openapi.yaml`) is complete and validated.
- [ ] Every documented endpoint works with mock data.
- [ ] Swagger UI is running at `/docs` and endpoints can be tested.
- [ ] README and project documentation are complete.
- [ ] Frontend pages are tested.
- [ ] Frontend and backend integration is tested.
- [ ] Required module connections are documented.

### Finals

- [ ] Complete frontend–backend integration.
- [ ] Validate and test all API endpoints.
- [ ] Implement database storage if required by the final project specifications.
- [ ] Implement appropriate authentication and access control if required.
- [ ] Test the full application and prepare the final presentation.

*Update these checkboxes according to the team's actual progress. Do not mark a requirement complete until it has been verified.*

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the group's branch naming, commit message, and pull request rules.

---

*Academic project for System Architecture and Integration, [IDSC], [1ST SEMESTER, 2026-2027].*

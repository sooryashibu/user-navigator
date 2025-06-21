# User Navigator — Multi-Page React Application with Routing

## Project Overview

**User Navigator** is a React web application demonstrating the use of **React Router DOM** to build a multi-page application with routing, parameterized routes, and navigation. The app features a Home page, About page, a Users list page, and a User Detail page with dynamic routing based on user IDs.

The application highlights clean componentization, responsive design using Tailwind CSS, and a persistent navigation bar for seamless user experience.

---

## Features / Functionality

- **Home Page (`/`)**  
  Displays a welcoming message and brief info about the app.  
  Includes navigation links to About and Users pages.

- **About Page (`/about`)**  
  Provides details about the application and its purpose.  
  Contains a link to return back to the Home page.

- **Users List Page (`/users`)**  
  Displays a list of 50 users loaded from a mock data file.  
  Each user is listed with their name and email.  
  User names are clickable links leading to individual User Detail pages.

- **User Detail Page (`/users/:id`)**  
  Dynamic route that fetches the user ID from the URL parameter.  
  Shows detailed information for the selected user (name and email).  
  Includes a "Go Back" button to return to the Users list.

- **Persistent Navigation Bar**  
  Present on all pages with links to Home, About, and Users.  
  Active route is visually highlighted for better UX.

- **Responsive & Themed UI**  
  Uses Tailwind CSS for styling and responsiveness.  
  Green-themed, clean and professional look with header and footer.

---

## Project Structure


user-navigator/
│
├── public/ # Static assets (favicon, etc.)
│
├── src/ # Source code
│ ├── components/ # Shared components
│ │ ├── Header.jsx # Top navigation bar
│ │ └── Footer.jsx # Footer component
│
│ ├── data/ # Static user data
│ │ └── users.js # Array of 50 mock users
│
│ ├── pages/ # Route components
│ │ ├── Home.jsx # Home page
│ │ ├── About.jsx # About page
│ │ ├── Users.jsx # Users list page
│ │ └── UserDetail.jsx # Dynamic user detail page
│
│ ├── App.jsx # App layout and routing
│ ├── main.jsx # React app entry point
│ └── index.css # Tailwind base styles
│
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite dev server config
├── package.json # Project metadata and dependencies
└── README.md # Project documentation



## Technologies Used

- **React** (v18) — Frontend library for building UI components
- **React Router DOM** — Declarative routing for React apps
- **Vite** — Fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework for styling
- **JavaScript (ES6+)** — Language used throughout the project
- **npm** — Package manager for dependencies

---

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/user-navigator.git
cd user-navigator
```

2.Install dependencies:

```bash
npm install
```
3.Start the development server:
```bash
npm run dev
Open your browser at http://localhost:5173 (or the port Vite suggests).
```
## Usage

Navigate between Home, About, and Users using the header links.

On the Users page, click on any user name to see detailed info.

Use the "Go Back" button on the User Detail page to return to the Users list.

## Screenshots
Included screenshots of Home, About, Users List, and User Detail pages here.

## Author
soorya shibu
Email: brijithlooka@gmail.com
GitHub: https://github.com/sooryashibu
Live Demo:[ https://user-navigator.vercel.app/](https://user-navigator-pff1ti3md-soorya-shibus-projects.vercel.app/)


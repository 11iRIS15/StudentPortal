
import { useState, useEffect } from "react";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Announcement from "./pages/Announcement";
import Clinic from "./pages/Clinic";
import Enrollment from "./pages/Enrollment";
import Finance from "./pages/Finance";
import Grades from "./pages/Grades";
import Library from "./pages/Library";
import Schedule from "./pages/Schedule";
import Student from "./pages/Student";
import Subject from "./pages/Subject";
import Faculty from "./pages/Faculty";

import "./App.css";

export default function App() {
  const [student, setStudent] = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");

  // Listen for navigation events from other components
  useEffect(() => {
    function handleNavigation(event) {
      if (typeof event.detail === "string") {
        setActivePage(event.detail);
      }
    }

    window.addEventListener("portal:navigate", handleNavigation);

    return () => {
      window.removeEventListener("portal:navigate", handleNavigation);
    };
  }, []);

  // Handle student login
  function handleLogin(studentId) {
    setStudent({
      name: studentId === "2024-12345" ? "Angelica" : "Student",
      id: studentId,
      course: "BSIT",
      year: "3rd Year",
      section: "JAVA",
    });

    setActivePage("Dashboard");
  }

  // Handle logout
  function handleLogout() {
    setStudent(null);
    setActivePage("Dashboard");
  }

  // Show login before entering the portal
  if (!student) {
    return <Login onLogin={handleLogin} />;
  }

  // Connect each page name to its component
  const pages = {
    Dashboard: <Dashboard student={student} />,
    Announcement: <Announcement />,
    Announcements: <Announcement />,
    Clinic: <Clinic />,
    Enrollment: <Enrollment />,
    Registrar: <Enrollment />,
    Finance: <Finance />,
    Grades: <Grades />,
    Library: <Library />,
    Schedule: <Schedule />,
    Student: <Student />,
    "My profile": <Student />,
    Profile: <Student />,
    Subject: <Subject />,
    "My courses": <Subject />,
    Courses: <Subject />,
    Faculty: <Faculty />,
  };

  // Find the selected page
  const selectedPage = pages[activePage];

  return (
    <div className="portal">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
      />

      <main className="portal-main">
        <Navbar
          student={student}
          activePage={activePage}
          onNavigate={setActivePage}
          onLogout={handleLogout}
        />

        <div className="page-content">
          {selectedPage || (
            <section className="page">
              <div className="page-heading">
                <div>
                  <span className="eyebrow">STUDENT PORTAL</span>
                  <h1>{activePage}</h1>
                  <p>
                    This page is not connected yet. Check the page name
                    in Sidebar.jsx and the pages object in App.jsx.
                  </p>
                </div>

                <button
                  className="primary-btn"
                  onClick={() => setActivePage("Dashboard")}
                >
                  Back to Dashboard
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

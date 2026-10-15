
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  ChevronRight,
  ChevronDown,
  User,
  LogOut,
  GraduationCap,
  CalendarDays,
  BookOpen,
  Wallet,
  Stethoscope,
  Megaphone,
  Users,
  X,
} from "lucide-react";

// All pages available in the Student Portal
const portalPages = [
  { name: "Dashboard", icon: GraduationCap },
  { name: "Announcement", icon: Megaphone },
  { name: "Clinic", icon: Stethoscope },
  { name: "Enrollment", icon: GraduationCap },
  { name: "Registrar", icon: GraduationCap },
  { name: "Finance", icon: Wallet },
  { name: "Grades", icon: BookOpen },
  { name: "Library", icon: BookOpen },
  { name: "Schedule", icon: CalendarDays },
  { name: "Student", icon: User },
  { name: "My profile", icon: User },
  { name: "Subject", icon: BookOpen },
  { name: "My courses", icon: BookOpen },
  { name: "Faculty", icon: Users },
];

export default function Navbar({
  student,
  activePage,
  onNavigate,
  onLogout,
}) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const searchRef = useRef(null);

  // Search for pages
  const filteredPages = portalPages.filter((page) =>
    page.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  // Navigate to a selected page
  function navigateTo(pageName) {
    if (onNavigate) {
      onNavigate(pageName);
    } else {
      window.dispatchEvent(
        new CustomEvent("portal:navigate", {
          detail: pageName,
        })
      );
    }

    setSearch("");
    setShowSearch(false);
    setShowNotifications(false);
    setShowProfile(false);
  }

  // Keyboard shortcuts and Escape key
  useEffect(() => {
    function handleKeyboard(event) {
      const tag = event.target?.tagName?.toLowerCase();

      const isTyping =
        tag === "input" ||
        tag === "textarea" ||
        event.target?.isContentEditable;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
        setShowSearch(true);
      }

      if (event.key === "Escape") {
        setShowSearch(false);
        setShowNotifications(false);
        setShowProfile(false);
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  const studentName = student?.name || "Student";
  const studentId = student?.id || "Student account";

  return (
    <header className="topbar">
      {/* BREADCRUMB */}
      <div className="breadcrumbs">
        <button
          type="button"
          className="breadcrumb-home"
          onClick={() => navigateTo("Dashboard")}
        >
          Student portal
        </button>

        <ChevronRight size={18} />

        <strong>{activePage}</strong>
      </div>

      <div className="topbar-actions">
        {/* SEARCH */}
        <div className="navbar-search">
          <div className="search-box">
            <Search size={22} />

            <input
              ref={searchRef}
              type="text"
              aria-label="Search portal pages"
              placeholder="Search anything..."
              value={search}
              onFocus={() => setShowSearch(true)}
              onChange={(event) => {
                setSearch(event.target.value);
                setShowSearch(true);
              }}
            />

            {search ? (
              <button
                type="button"
                className="search-clear"
                aria-label="Clear search"
                onClick={() => {
                  setSearch("");
                  setShowSearch(true);
                  searchRef.current?.focus();
                }}
              >
                <X size={16} />
              </button>
            ) : (
              <kbd>/</kbd>
            )}
          </div>

          {showSearch && (
            <div className="navbar-dropdown search-dropdown">
              <p className="dropdown-heading">
                {search ? "Search results" : "Quick navigation"}
              </p>

              {filteredPages.length > 0 ? (
                filteredPages.map((page) => {
                  const Icon = page.icon;

                  return (
                    <button
                      type="button"
                      key={page.name}
                      className="dropdown-item"
                      onClick={() => navigateTo(page.name)}
                    >
                      <Icon size={18} />

                      <span>{page.name}</span>

                      {activePage === page.name && (
                        <span className="current-label">
                          Current
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <p className="dropdown-empty">
                  No matching pages found.
                </p>
              )}

              <button
                type="button"
                className="dropdown-dismiss"
                onClick={() => setShowSearch(false)}
              >
                Close search
              </button>
            </div>
          )}
        </div>

        {/* NOTIFICATIONS */}
        <div className="navbar-menu">
          <button
            type="button"
            className="notification-icon"
            aria-label="Notifications"
            title="Notifications"
            aria-expanded={showNotifications}
            onClick={() => {
              setShowNotifications((previous) => !previous);
              setShowProfile(false);
              setShowSearch(false);
            }}
          >
            <Bell size={24} />
            <i />
          </button>

          {showNotifications && (
            <div className="navbar-dropdown notification-dropdown">
              <div className="dropdown-title-row">
                <strong>Notifications</strong>

                <button
                  type="button"
                  aria-label="Close notifications"
                  onClick={() => setShowNotifications(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="notification-message">
                <Megaphone size={20} />

                <div>
                  <strong>School announcements</strong>
                  <p>
                    Check the Announcement page for school updates.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigateTo("Announcement")}
                  >
                    View announcements
                  </button>
                </div>
              </div>

              <div className="notification-message">
                <CalendarDays size={20} />

                <div>
                  <strong>Class schedule</strong>
                  <p>
                    Review your weekly class timetable.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigateTo("Schedule")}
                  >
                    View schedule
                  </button>
                </div>
              </div>

              <p className="notification-note">
                Demo notifications
              </p>
            </div>
          )}
        </div>

        <div className="topbar-divider" />

        {/* STUDENT PROFILE */}
        <div className="navbar-menu">
          <button
            type="button"
            className="topbar-student"
            aria-expanded={showProfile}
            onClick={() => {
              setShowProfile((previous) => !previous);
              setShowNotifications(false);
              setShowSearch(false);
            }}
          >
            <div className="student-avatar">
              {studentName.charAt(0).toUpperCase()}
            </div>

            <div className="student-identity">
              <strong>{studentName}</strong>
              <span>Student</span>
            </div>

            <ChevronDown size={19} />
          </button>

          {showProfile && (
            <div className="navbar-dropdown profile-dropdown">
              <div className="profile-summary">
                <div className="student-avatar">
                  {studentName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <strong>{studentName}</strong>
                  <p>{studentId}</p>
                </div>
              </div>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => navigateTo("My profile")}
              >
                <User size={18} />
                <span>My profile</span>
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => navigateTo("My courses")}
              >
                <BookOpen size={18} />
                <span>My courses</span>
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => navigateTo("Schedule")}
              >
                <CalendarDays size={18} />
                <span>Academic schedule</span>
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => navigateTo("Finance")}
              >
                <Wallet size={18} />
                <span>Finance information</span>
              </button>

              <div className="dropdown-separator" />

              <button
                type="button"
                className="dropdown-item logout-item"
                onClick={() => {
                  setShowProfile(false);

                  if (onLogout) {
                    onLogout();
                  }
                }}
              >
                <LogOut size={18} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

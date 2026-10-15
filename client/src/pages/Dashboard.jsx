import {
  ArrowUpRight,
  BookOpen,
  WalletCards,
  GraduationCap,
  HeartPulse,
  LibraryBig,
  ClipboardList,
  CalendarDays,
  ArrowRight,
  Megaphone,
  UserRound,
} from "lucide-react";

const services = [
  {
    title: "Registrar",
    description: "Records & enrollment",
    icon: ClipboardList,
    color: "green",
    page: "Registrar",
  },
  {
    title: "Finance",
    description: "Payments & balance",
    icon: WalletCards,
    color: "blue",
    page: "Finance",
  },
  {
    title: "Faculty",
    description: "Classes & faculty",
    icon: GraduationCap,
    color: "purple",
    page: "Faculty",
  },
  {
    title: "Clinic",
    description: "Health & wellness",
    icon: HeartPulse,
    color: "red",
    page: "Clinic",
  },
  {
    title: "Library",
    description: "Books & resources",
    icon: LibraryBig,
    color: "teal",
    page: "Library",
  },
];

export default function Dashboard({ student }) {
  return (
    <div className="dashboard-content">
      <section className="welcome-banner">
        <div className="welcome-copy">
          <div className="semester-label">
            <span />
            SECOND SEMESTER, A.Y. 2025–2026
          </div>

          <h1>Welcome back, {student.name}.</h1>

          <p>
            Everything you need for a smoother school day, all in one place.
          </p>

          <div className="academic-info">
            <GraduationCap size={23} />
            <strong>{student.course}</strong>
            <span>•</span>
            <strong>{student.year}</strong>
            <span>•</span>
            <strong>Section {student.section}</strong>
          </div>
        </div>

        <div className="banner-logo">
          <div className="banner-ring banner-ring-one" />
          <div className="banner-ring banner-ring-two" />
          <img src="/images/idsc-logo.jpg" alt="IDSC official logo" />
        </div>
      </section>

      <section className="quick-access-section">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">ONE PORTAL, EVERY SERVICE</span>
            <h2>Quick access</h2>
          </div>
          <p>Go straight to what you need.</p>
        </div>

        <div className="service-grid">
          {services.map(({ title, description, icon: Icon, color, page }) => (
            <button
              key={title}
              className="service-card"
              onClick={() => window.dispatchEvent(
                new CustomEvent("portal:navigate", { detail: page })
              )}
            >
              <div className={`service-icon ${color}`}>
                <Icon size={29} strokeWidth={2} />
              </div>
              <ArrowUpRight className="service-arrow" size={22} />
              <div className="service-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="dashboard-lower-grid">
        <section className="white-card information-card">
          <div className="card-heading">
            <h2>My information</h2>
            <button
              onClick={() => window.dispatchEvent(
                new CustomEvent("portal:navigate", { detail: "My profile" })
              )}
            >
              View profile <ArrowRight size={19} />
            </button>
          </div>

          <div className="profile-summary">
            <div className="profile-avatar">
              <UserRound size={26} />
            </div>
            <div>
              <h3>{student.name}</h3>
              <p>Student ID: {student.id}</p>
              <span>
                {student.course} · {student.year} · Section {student.section}
              </span>
            </div>
          </div>

          <div className="information-row">
            <span>Academic year</span>
            <strong>2025–2026</strong>
          </div>
          <div className="information-row">
            <span>Semester</span>
            <strong>Second Semester</strong>
          </div>
        </section>

        <section className="white-card announcements-card">
          <div className="card-heading">
            <h2>Announcements</h2>
            <span className="update-count">3 updates</span>
          </div>

          <article className="announcement-item">
            <div className="announcement-icon">
              <Megaphone size={21} />
            </div>
            <div>
              <span className="announcement-category">ACADEMIC</span>
              <h3>Check your enrollment details</h3>
              <p>Review your subjects and enrollment information.</p>
            </div>
          </article>

          <article className="announcement-item">
            <div className="announcement-icon blue">
              <CalendarDays size={21} />
            </div>
            <div>
              <span className="announcement-category">REMINDER</span>
              <h3>Review your class schedule</h3>
              <p>Make sure your timetable is up to date.</p>
            </div>
          </article>

          <article className="announcement-item">
            <div className="announcement-icon purple">
              <BookOpen size={21} />
            </div>
            <div>
              <span className="announcement-category">CAMPUS</span>
              <h3>Library resources</h3>
              <p>Explore learning materials for your subjects.</p>
            </div>
          </article>
        </section>
      </div>

      <p className="dashboard-disclaimer">
        Student portal prototype · Sample information for demonstration only
      </p>
    </div>
  );
}
import {
  LayoutDashboard,
  UserRound,
  BookOpen,
  UsersRound,
  ClipboardList,
  WalletCards,
  HeartPulse,
  LibraryBig,
  GraduationCap,
  LogOut,
  Palette,
} from "lucide-react";

const sections = [
  {
    title: "OVERVIEW",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "My profile", icon: UserRound },
      { label: "My courses", icon: BookOpen },
    ],
  },
  {
    title: "CAMPUS SERVICES",
    items: [
      { label: "Faculty", icon: UsersRound },
      { label: "Registrar", icon: ClipboardList },
      { label: "Finance", icon: WalletCards },
      { label: "Clinic", icon: HeartPulse },
      { label: "Library", icon: LibraryBig },
    ],
  },
  {
    title: "ACADEMICS",
    items: [
      { label: "Grades", icon: GraduationCap },
      { label: "Schedule", icon: ClipboardList },
    ],
  },
];

export default function Sidebar({ activePage, setActivePage, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img src="/images/idsc-logo.jpg" alt="IDSC logo" />
        <div>
          <h2>IDSC.</h2>
          <span>STUDENT PORTAL</span>
        </div>
      </div>

      <nav className="sidebar-navigation">
        {sections.map((section) => (
          <div className="navigation-section" key={section.title}>
            <p className="navigation-label">{section.title}</p>

            {section.items.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className={`navigation-item ${
                  activePage === label ? "selected" : ""
                }`}
                onClick={() => setActivePage(label)}
              >
                <Icon size={23} strokeWidth={1.9} />
                <span>{label}</span>
                {activePage === label && <i />}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button
          className="design-handoff"
          onClick={() => setActivePage("Design handoff")}
        >
          <Palette size={22} />
          <span>Design handoff</span>
        </button>

        <button className="sidebar-logout" onClick={onLogout}>
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
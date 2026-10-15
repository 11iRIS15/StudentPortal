
import { useState } from "react";

export default function Announcement() {
  const [search, setSearch] = useState("");

  const announcements = [
    {
      id: 1,
      title: "Enrollment Reminder",
      date: "October 15, 2026",
      category: "Academic",
      message:
        "Students are reminded to prepare their enrollment requirements and submit any missing documents.",
    },
    {
      id: 2,
      title: "Library Advisory",
      date: "October 14, 2026",
      category: "Library",
      message:
        "Please return borrowed books on time and maintain a quiet study environment.",
    },
    {
      id: 3,
      title: "Student Portal Update",
      date: "October 13, 2026",
      category: "General",
      message:
        "The Student Portal provides access to sample student information, grades, schedules, and other services.",
    },
  ];

  const filtered = announcements.filter((item) =>
    `${item.title} ${item.category} ${item.message}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT SERVICES</span>
          <h1>Announcements</h1>
          <p>Stay updated with school news and important notices.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Latest Announcements</h2>

        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search announcements..."
          />
        </div>

        {filtered.length === 0 ? (
          <p className="muted">No announcements found.</p>
        ) : (
          filtered.map((item) => (
            <article className="record" key={item.id}>
              <div>
                <span className="tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.date}</p>
                <p>{item.message}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

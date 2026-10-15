
import { useState } from "react";

const classRecords = [
  { id: 1, day: "Monday", time: "8:00 AM - 10:00 AM", subject: "Integrative Programming II", room: "Computer Lab 1" },
  { id: 2, day: "Tuesday", time: "10:00 AM - 12:00 PM", subject: "Database Management", room: "Room 201" },
  { id: 3, day: "Wednesday", time: "1:00 PM - 3:00 PM", subject: "Computer Networking", room: "Computer Lab 2" },
  { id: 4, day: "Thursday", time: "8:00 AM - 10:00 AM", subject: "Information Assurance", room: "Room 203" },
  { id: 5, day: "Friday", time: "10:00 AM - 12:00 PM", subject: "Systems Analysis and Design", room: "Room 202" },
];

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("All Days");
  const [search, setSearch] = useState("");

  const filteredClasses = classRecords.filter((item) => {
    const matchesDay =
      selectedDay === "All Days" || item.day === selectedDay;

    const matchesSearch =
      `${item.subject} ${item.room}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesDay && matchesSearch;
  });

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACADEMIC RECORDS</span>
          <h1>Class Schedule</h1>
          <p>View your sample weekly class timetable.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Find a Class</h2>

        <div className="form-grid">
          <div>
            <label>Filter by Day</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option>All Days</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </div>

          <div>
            <label>Search</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subject or room..."
            />
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>Weekly Classes</h2>

        {filteredClasses.length === 0 ? (
          <p className="muted">No classes match your search.</p>
        ) : (
          filteredClasses.map((item) => (
            <div className="record" key={item.id}>
              <div>
                <strong>{item.subject}</strong>
                <p>{item.day}</p>
                <p>{item.time}</p>
                <p>Room: {item.room}</p>
              </div>

              <span className="tag">{item.day}</span>
            </div>
          ))
        )}

        <p className="muted">
          Example schedule only. Confirm your timetable with your school.
        </p>
      </div>
    </section>
  );
}

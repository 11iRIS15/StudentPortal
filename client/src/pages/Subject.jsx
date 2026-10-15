
import { useState } from "react";

const subjectRecords = [
  { code: "IPT2", name: "Integrative Programming II", units: 3, semester: "First Semester" },
  { code: "DBMS", name: "Database Management Systems", units: 3, semester: "First Semester" },
  { code: "NET2", name: "Computer Networking", units: 3, semester: "First Semester" },
  { code: "IAS", name: "Information Assurance and Security", units: 3, semester: "Second Semester" },
  { code: "SAD", name: "Systems Analysis and Design", units: 3, semester: "Second Semester" },
  { code: "HCI", name: "Human-Computer Interaction", units: 3, semester: "Second Semester" },
];

export default function Subject() {
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("All Semesters");

  const filteredSubjects = subjectRecords.filter((subject) => {
    const matchesSearch =
      `${subject.code} ${subject.name}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSemester =
      semester === "All Semesters" || subject.semester === semester;

    return matchesSearch && matchesSemester;
  });

  const totalUnits = filteredSubjects.reduce(
    (sum, subject) => sum + subject.units,
    0
  );

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACADEMIC RECORDS</span>
          <h1>My Subjects</h1>
          <p>Browse subjects and check their unit values.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Search Subjects</h2>

        <div className="form-grid">
          <div>
            <label>Subject Name or Code</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subjects..."
            />
          </div>

          <div>
            <label>Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option>All Semesters</option>
              <option>First Semester</option>
              <option>Second Semester</option>
            </select>
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>Subject List</h2>
        <p>
          Matching subjects: <strong>{filteredSubjects.length}</strong>
        </p>
        <p>
          Total units shown: <strong>{totalUnits}</strong>
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Units</th>
                <th>Semester</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubjects.map((subject) => (
                <tr key={subject.code}>
                  <td>{subject.code}</td>
                  <td>{subject.name}</td>
                  <td>{subject.units}</td>
                  <td>{subject.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSubjects.length === 0 && (
          <p className="muted">No subjects found.</p>
        )}

        <p className="muted">
          Subject information is sample data. Replace it with your school's curriculum.
        </p>
      </div>
    </section>
  );
}

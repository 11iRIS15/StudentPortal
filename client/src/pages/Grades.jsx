
import { useState } from "react";

const gradeRecords = [
  { id: 1, code: "IPT2", subject: "Integrative Programming II", grade: 1.5, semester: "First Semester" },
  { id: 2, code: "DBMS", subject: "Database Management", grade: 1.75, semester: "First Semester" },
  { id: 3, code: "NET2", subject: "Computer Networking", grade: 2.0, semester: "First Semester" },
  { id: 4, code: "SAD", subject: "Systems Analysis and Design", grade: 1.75, semester: "Second Semester" },
];

export default function Grades() {
  const [semester, setSemester] = useState("First Semester");

  const filteredGrades = gradeRecords.filter(
    (record) => record.semester === semester
  );

  const average = filteredGrades.length
    ? filteredGrades.reduce((sum, item) => sum + item.grade, 0) /
      filteredGrades.length
    : 0;

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACADEMIC RECORDS</span>
          <h1>My Grades</h1>
          <p>View your sample academic results.</p>
        </div>
      </div>

      <div className="panel">
        <label>Select Semester</label>
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option>First Semester</option>
          <option>Second Semester</option>
        </select>

        <div className="stats-grid">
          <div className="panel">
            <p className="muted">Subjects</p>
            <h2>{filteredGrades.length}</h2>
          </div>

          <div className="panel">
            <p className="muted">Average Grade</p>
            <h2>{filteredGrades.length ? average.toFixed(2) : "N/A"}</h2>
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>{semester} Grades</h2>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>
              {filteredGrades.map((item) => (
                <tr key={item.id}>
                  <td>{item.code}</td>
                  <td>{item.subject}</td>
                  <td>{item.grade.toFixed(2)}</td>
                  <td>
                    <span className="tag">
                      {item.grade <= 3 ? "Passed" : "Failed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="muted">
          These are example grades only, not official academic results.
        </p>
      </div>
    </section>
  );
}

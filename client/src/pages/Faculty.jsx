
import { useState } from "react";

const initialFaculty = [
  {
    id: 1,
    name: "Maria Santos",
    facultyId: "FAC-001",
    department: "Information Technology",
    email: "maria@example.com",
    position: "Instructor",
  },
  {
    id: 2,
    name: "Juan Reyes",
    facultyId: "FAC-002",
    department: "Computer Science",
    email: "juan@example.com",
    position: "Assistant Professor",
  },
  {
    id: 3,
    name: "Ana Cruz",
    facultyId: "FAC-003",
    department: "Information Systems",
    email: "ana@example.com",
    position: "Instructor",
  },
];

export default function Faculty() {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    facultyId: "",
    department: "Information Technology",
    email: "",
    position: "Instructor",
  });

  const filteredFaculty = faculty.filter((member) =>
    `${member.name} ${member.facultyId} ${member.department} ${member.position}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddFaculty(e) {
    e.preventDefault();

    setFaculty((previous) => [
      ...previous,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({
      name: "",
      facultyId: "",
      department: "Information Technology",
      email: "",
      position: "Instructor",
    });

    setShowForm(false);
  }

  function handleDeleteFaculty(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this faculty member?"
    );

    if (confirmed) {
      setFaculty((previous) =>
        previous.filter((member) => member.id !== id)
      );
    }
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">CAMPUS SERVICES</span>
          <h1>Faculty Members</h1>
          <p>View and manage faculty information.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add Faculty"}
        </button>
      </div>

      <div className="stats-grid">
        <div className="panel">
          <p className="muted">Total Faculty</p>
          <h2>{faculty.length}</h2>
        </div>

        <div className="panel">
          <p className="muted">IT Department</p>
          <h2>
            {
              faculty.filter(
                (member) =>
                  member.department === "Information Technology"
              ).length
            }
          </h2>
        </div>

        <div className="panel">
          <p className="muted">Computer Science</p>
          <h2>
            {
              faculty.filter(
                (member) =>
                  member.department === "Computer Science"
              ).length
            }
          </h2>
        </div>
      </div>

      {showForm && (
        <div className="panel">
          <h2>Add Faculty Member</h2>

          <form onSubmit={handleAddFaculty}>
            <div className="form-grid">
              <div>
                <label>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label>Faculty ID</label>
                <input
                  name="facultyId"
                  value={form.facultyId}
                  onChange={handleChange}
                  placeholder="Example: FAC-004"
                  required
                />
              </div>

              <div>
                <label>Department</label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                >
                  <option>Information Technology</option>
                  <option>Computer Science</option>
                  <option>Information Systems</option>
                  <option>General Education</option>
                </select>
              </div>

              <div>
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="faculty@example.com"
                  required
                />
              </div>

              <div>
                <label>Position</label>
                <select
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                >
                  <option>Instructor</option>
                  <option>Assistant Professor</option>
                  <option>Associate Professor</option>
                  <option>Professor</option>
                  <option>Department Head</option>
                </select>
              </div>
            </div>

            <button className="primary-btn" type="submit">
              Save Faculty
            </button>
          </form>
        </div>
      )}

      <div className="panel">
        <h2>Faculty Directory</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search faculty, ID, or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Faculty ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredFaculty.map((member) => (
                <tr key={member.id}>
                  <td>{member.facultyId}</td>
                  <td>{member.name}</td>
                  <td>{member.department}</td>
                  <td>{member.email}</td>
                  <td>{member.position}</td>
                  <td>
                    <button
                      className="danger-btn"
                      onClick={() => handleDeleteFaculty(member.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredFaculty.length === 0 && (
            <p className="muted">No faculty members found.</p>
          )}
        </div>

        <p className="muted">
          Demonstration data only. Records are not saved to a database.
        </p>
      </div>
    </section>
  );
}

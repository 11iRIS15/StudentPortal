
import { useState } from "react";

export default function Student() {
  const [profile, setProfile] = useState({
    name: "Angelica",
    studentId: "2024-12345",
    course: "BSIT",
    year: "3rd Year",
    section: "JAVA",
    email: "angelica@example.com",
    phone: "",
    address: "",
  });

  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT SERVICES</span>
          <h1>Student Information</h1>
          <p>View and update your sample profile.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Student Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Student ID</label>
              <input value={profile.studentId} readOnly />
            </div>

            <div>
              <label>Course</label>
              <input value={profile.course} readOnly />
            </div>

            <div>
              <label>Year Level</label>
              <input value={profile.year} readOnly />
            </div>

            <div>
              <label>Section</label>
              <input value={profile.section} readOnly />
            </div>

            <div>
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label>Address</label>
              <input
                name="address"
                value={profile.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>
          </div>

          <button className="primary-btn" type="submit">
            Save Changes
          </button>
        </form>

        {saved && (
          <p className="success-message">
            Profile changes saved for this session.
          </p>
        )}

        <p className="muted">
          This demo does not update the login account or database.
        </p>
      </div>
    </section>
  );
}

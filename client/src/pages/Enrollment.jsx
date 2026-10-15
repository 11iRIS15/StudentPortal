
import { useState } from "react";

export default function Enrollment() {
  const [course, setCourse] = useState("BSIT");
  const [year, setYear] = useState("3rd Year");
  const [semester, setSemester] = useState("First Semester");
  const [status, setStatus] = useState("Not Submitted");
  const [submittedDetails, setSubmittedDetails] = useState(null);

  function submitEnrollment(e) {
    e.preventDefault();

    setSubmittedDetails({ course, year, semester });
    setStatus("Submitted for Review");
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACADEMIC SERVICES</span>
          <h1>Enrollment</h1>
          <p>Complete your enrollment information.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Enrollment Form</h2>

        <form onSubmit={submitEnrollment}>
          <div className="form-grid">
            <div>
              <label>Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="BSIT">Bachelor of Science in Information Technology</option>
                <option value="BSCS">Bachelor of Science in Computer Science</option>
                <option value="BSIS">Bachelor of Science in Information Systems</option>
              </select>
            </div>

            <div>
              <label>Year Level</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div>
              <label>Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option>First Semester</option>
                <option>Second Semester</option>
                <option>Summer</option>
              </select>
            </div>
          </div>

          <button className="primary-btn" type="submit">
            Submit Enrollment
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>Enrollment Status</h2>
        <p>
          Status: <span className="tag">{status}</span>
        </p>

        {submittedDetails && (
          <div className="record">
            <div>
              <strong>{submittedDetails.course}</strong>
              <p>{submittedDetails.year}</p>
              <p>{submittedDetails.semester}</p>
            </div>
          </div>
        )}

        <p className="muted">
          This is a demonstration. Submission does not register you with the school.
        </p>
      </div>
    </section>
  );
}

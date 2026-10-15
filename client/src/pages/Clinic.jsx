
import { useState } from "react";

export default function Clinic() {
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [appointments, setAppointments] = useState([]);

  function bookAppointment(e) {
    e.preventDefault();

    setAppointments((previous) => [
      ...previous,
      {
        id: Date.now(),
        reason,
        date,
        time,
        status: "Pending",
      },
    ]);

    setReason("");
    setDate("");
    setTime("09:00");
  }

  function cancelAppointment(id) {
    setAppointments((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT SERVICES</span>
          <h1>School Clinic</h1>
          <p>Request and manage your clinic appointments.</p>
        </div>
      </div>

      <div className="panel">
        <h2>Request an Appointment</h2>

        <form onSubmit={bookAppointment}>
          <div className="form-grid">
            <div>
              <label>Reason for Visit</label>
              <input
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason for consultation"
                required
              />
            </div>

            <div>
              <label>Preferred Date</label>
              <input
                type="date"
                value={date}
                min={new Date().toLocaleDateString("en-CA")}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Preferred Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
              </select>
            </div>
          </div>

          <button className="primary-btn" type="submit">
            Request Appointment
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>My Appointments</h2>

        {appointments.length === 0 ? (
          <p className="muted">You have no appointment requests.</p>
        ) : (
          appointments.map((item) => (
            <div className="record" key={item.id}>
              <div>
                <strong>{item.reason}</strong>
                <p>Date: {item.date}</p>
                <p>Time: {item.time}</p>
                <span className="tag">{item.status}</span>
              </div>

              <button
                className="danger-btn"
                type="button"
                onClick={() => cancelAppointment(item.id)}
              >
                Cancel
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

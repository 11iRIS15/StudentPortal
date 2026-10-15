
import { useState } from "react";

const initialFees = [
  { id: 1, name: "Tuition Fee", amount: 15000, status: "Unpaid" },
  { id: 2, name: "Library Fee", amount: 500, status: "Paid" },
  { id: 3, name: "Laboratory Fee", amount: 1200, status: "Unpaid" },
  { id: 4, name: "Registration Fee", amount: 800, status: "Paid" },
];

export default function Finance() {
  const [fees, setFees] = useState(initialFees);
  const [search, setSearch] = useState("");

  const balance = fees
    .filter((fee) => fee.status === "Unpaid")
    .reduce((total, fee) => total + fee.amount, 0);

  const filteredFees = fees.filter((fee) =>
    fee.name.toLowerCase().includes(search.toLowerCase())
  );

  function markPaid(id) {
    setFees((previous) =>
      previous.map((fee) =>
        fee.id === id ? { ...fee, status: "Paid" } : fee
      )
    );
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT SERVICES</span>
          <h1>Finance</h1>
          <p>Review your sample school fees and balances.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="panel">
          <p className="muted">Outstanding Balance</p>
          <h2>₱{balance.toLocaleString("en-PH")}</h2>
        </div>

        <div className="panel">
          <p className="muted">Paid Fees</p>
          <h2>{fees.filter((fee) => fee.status === "Paid").length}</h2>
        </div>

        <div className="panel">
          <p className="muted">Unpaid Fees</p>
          <h2>{fees.filter((fee) => fee.status === "Unpaid").length}</h2>
        </div>
      </div>

      <div className="panel">
        <h2>Fee Records</h2>

        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fee..."
          />
        </div>

        {filteredFees.map((fee) => (
          <div className="record" key={fee.id}>
            <div>
              <strong>{fee.name}</strong>
              <p>₱{fee.amount.toLocaleString("en-PH")}</p>
              <span className="tag">{fee.status}</span>
            </div>

            {fee.status === "Unpaid" && (
              <button
                className="secondary-btn"
                onClick={() => markPaid(fee.id)}
              >
                Mark Paid
              </button>
            )}
          </div>
        ))}

        {filteredFees.length === 0 && (
          <p className="muted">No matching fee records found.</p>
        )}

        <p className="muted">
          Sample data only. “Mark Paid” does not process a payment.
        </p>
      </div>
    </section>
  );
}
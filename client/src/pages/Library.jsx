
import { useState } from "react";

const initialBooks = [
  { id: 1, title: "Introduction to Programming", author: "John Smith", status: "Available" },
  { id: 2, title: "Database Systems", author: "Mary Cruz", status: "Available" },
  { id: 3, title: "Computer Networking", author: "Alex Reyes", status: "Borrowed" },
  { id: 4, title: "Web Development Basics", author: "Jane Santos", status: "Available" },
];

export default function Library() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function toggleBook(id) {
    setBooks((previous) =>
      previous.map((book) =>
        book.id === id
          ? {
              ...book,
              status:
                book.status === "Available" ? "Borrowed" : "Available",
            }
          : book
      )
    );
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT SERVICES</span>
          <h1>Library</h1>
          <p>Search the collection and manage demo borrowing records.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="panel">
          <p className="muted">Total Books</p>
          <h2>{books.length}</h2>
        </div>

        <div className="panel">
          <p className="muted">Available</p>
          <h2>{books.filter((book) => book.status === "Available").length}</h2>
        </div>

        <div className="panel">
          <p className="muted">Borrowed</p>
          <h2>{books.filter((book) => book.status === "Borrowed").length}</h2>
        </div>
      </div>

      <div className="panel">
        <h2>Book Collection</h2>

        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by book title or author..."
          />
        </div>

        {filteredBooks.map((book) => (
          <div className="record" key={book.id}>
            <div>
              <strong>{book.title}</strong>
              <p>Author: {book.author}</p>
              <span className="tag">{book.status}</span>
            </div>

            <button
              className={
                book.status === "Available" ? "primary-btn" : "secondary-btn"
              }
              onClick={() => toggleBook(book.id)}
            >
              {book.status === "Available" ? "Borrow" : "Return"}
            </button>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <p className="muted">No matching books found.</p>
        )}

        <p className="muted">
          Borrowing and returning here only changes the local demo data.
        </p>
      </div>
    </section>
  );
}

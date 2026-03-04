import { books } from "../../data/books";
import { Link } from "react-router-dom";

function BooksGrid({ category }) {

  // filter books based on category
  const filteredBooks = books.filter(
    (book) => book.category === category
  );

  return (
    <section
      style={{
        padding: "80px 40px",
        textAlign: "center"
      }}
    >

      <h2>{category} Books</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >

        {filteredBooks.map((book) => (

          <Link
            key={book.id}
            to={`/book/${book.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >

            <div
              style={{
                width: "180px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                cursor: "pointer"
              }}
            >

              <img
                src={book.cover}
                alt={book.title}
                style={{
                  width: "100%",
                  borderRadius: "8px"
                }}
              />

              <p style={{ marginTop: "10px" }}>
                {book.title}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default BooksGrid;
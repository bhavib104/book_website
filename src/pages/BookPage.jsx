import { useParams } from "react-router-dom";
import { books } from "../data/books";
import LightRays from "../components/books/LightRays";

function BookPage() {

  const { id } = useParams();

  const book = books.find(b => b.id === Number(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        background: "#000",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        overflow: "hidden"
      }}
    >

      {/* Light Rays Background */}

      <div
        style={{
          position: "absolute",
          inset: 0
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffd700"
          raysSpeed={1}
          lightSpread={1.2}
          rayLength={2}
          pulsating={true}
        />
      </div>

      {/* Book Cover */}

      <img
        src={book.cover}
        alt={book.title}
        style={{
          width: "260px",
          borderRadius: "12px",
          zIndex: 2
        }}
      />

      {/* Book Info */}

      <div style={{ zIndex: 2, maxWidth: "400px" }}>
        <h1>{book.title}</h1>

        <p>
          A beautiful literary work written with passion and imagination.
        </p>

        <a
          href={book.amazon}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            background: "#ffd700",
            color: "black",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Buy on Amazon
        </a>
      </div>

    </section>
  );
}

export default BookPage;
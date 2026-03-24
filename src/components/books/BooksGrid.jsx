import { books } from "../../data/books";
import GlassIcons from "./GlassIcons";

function BooksGrid({ category }) {

  if (!category) return null;   // 👈 hides books before category click

  const filteredBooks = books.filter(
    (book) => book.category === category
  );

  return (

    <section style={{ padding: "80px 0", textAlign: "center" }}>

      <h2 style={{ marginBottom: "40px" }}>
        {category} Books
      </h2>

      <GlassIcons items={filteredBooks} />

    </section>

  );
}

export default BooksGrid;
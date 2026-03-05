import { books } from "../../data/books";
import GlassIcons from "./GlassIcons";

function BooksGrid({ category }) {

  const filteredBooks = books.filter(
    (book) => book.category === category
  );

  const items = filteredBooks.map((book) => ({
    icon: book.cover,
    title: book.title,
    url: `/book/${book.id}`
  }));

  return (
    <section style={{ padding: "100px 40px" }}>

      <h2 style={{ textAlign: "center" }}>{category} Books</h2>

      <div style={{ height: "500px", position: "relative" }}>
        <GlassIcons items={items} />
      </div>

    </section>
  );
}

export default BooksGrid;
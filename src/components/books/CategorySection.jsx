import { useState, useEffect } from "react";
import ChromaGrid from "./ChromaGrid";
import BooksGrid from "./BooksGrid";

function CategorySection() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const handler = (e) => setSelectedCategory(e.detail);

    window.addEventListener("categorySelect", handler);

    return () => window.removeEventListener("categorySelect", handler);
  }, []);

  const items = [
    {
      image: "/images/poetry.jpg",
      title: "Poetry",
      subtitle: "Poetry Books",
      borderColor: "#ff6b6b",
      gradient: "linear-gradient(145deg,#ff6b6b,#000)",
      url: "#"
    },
    {
      image: "/images/novel.jpg",
      title: "Novels",
      subtitle: "Fiction Stories",
      borderColor: "#4ecdc4",
      gradient: "linear-gradient(145deg,#4ecdc4,#000)",
      url: "#"
    },
    {
      image: "/images/stories.jpg",
      title: "Short Stories",
      subtitle: "Story Collection",
      borderColor: "#ffe66d",
      gradient: "linear-gradient(145deg,#ffe66d,#000)",
      url: "#"
    }
  ];

  return (
    <section style={{ padding: "120px 40px", textAlign: "center" }}>

      <h2>Book Categories</h2>

      <div style={{ height: "600px", position: "relative" }}>
        <ChromaGrid
          items={items.map(item => ({
            ...item,
            url: null
          }))}
        />
      </div>

      {selectedCategory && (
        <BooksGrid category={selectedCategory} />
      )}

    </section>
  );
}

export default CategorySection;
import { useState } from "react";
import BooksGrid from "./BooksGrid";

function CategorySection() {

  const categories = [
    { name: "Poetry", color: "#ff6b6b" },
    { name: "Novel", color: "#6b8cff" },
    { name: "Short Stories", color: "#6bffb5" },
    { name: "Children Books", color: "#ffd66b" }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section style={{ padding: "100px 40px", textAlign: "center" }}>

      <h2>Book Categories</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        {categories.map((category) => (

          <div
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.color,
              padding: "60px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            {category.name}
          </div>

        ))}

      </div>

      {selectedCategory && (
        <BooksGrid category={selectedCategory} />
      )}

    </section>
  );
}

export default CategorySection;
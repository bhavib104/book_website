function CategorySection() {

  const categories = [
    "Poetry",
    "Novel",
    "Short Stories",
    "Children Books"
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        textAlign: "center"
      }}
    >

      <h2>Book Categories</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px"
        }}
      >

        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              padding: "40px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              cursor: "pointer",
              width: "180px"
            }}
          >
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;
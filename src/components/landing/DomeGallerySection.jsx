import { motion } from "framer-motion";

function DomeGallerySection() {

  const books = [
    "/images/book1.jpg",
    "/images/book2.jpg",
    "/images/book3.jpg",
    "/images/book4.jpg"
  ];

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "white"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
          gap: "20px"
        }}
      >
        {books.map((book, index) => (
          <motion.img
            key={index}
            src={book}
            alt="book"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "200px",
              borderRadius: "12px"
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default DomeGallerySection;
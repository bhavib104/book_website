import { useState, useEffect, useRef } from "react";
import Bookshelf from "./Bookshelf";
import BooksGrid from "./BooksGrid";

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    { image: "/images/poetry.jpg", title: "Poetry", subtitle: "Emotional verses" },
    { image: "/images/novel.jpg", title: "Novels", subtitle: "Immersive worlds" },
    { image: "/images/story.jpg", title: "Stories", subtitle: "Short tales" },
    { image: "/images/inspiration.jpg", title: "Inspirational", subtitle: "Uplifting words" },
    { image: "/images/children.jpg", title: "Children", subtitle: "Kids stories" }
  ];

  // Intersection observer for smooth fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Smooth scroll to books section
    setTimeout(() => {
      document.getElementById("books")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
        background: "rgba(12, 8, 4, 0.85)", // Make slightly translucent so 3D magic dust shows through
        position: "relative",
      }}
    >
      <div style={{
        maxWidth: "1400px",
        width: "100%",
        padding: "120px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px"
      }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f5e9c9",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.05em",
            marginBottom: "16px"
          }}>
            Literary Collections
          </h2>
          <p style={{
            fontFamily: "'EB Garamond', serif",
            color: "#c4a882",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            fontStyle: "italic"
          }}>
            Select a category below to explore the worlds penned across the pages.
          </p>
        </div>

        <Bookshelf
          items={items}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        {/* Books container — smooth expand/collapse handled by BooksGrid internally or just presence check */}
        <div 
          id="books" 
          style={{ 
            width: "100%",
            transition: "all 0.5s ease",
            opacity: selectedCategory ? 1 : 0,
            transform: selectedCategory ? "translateY(0)" : "translateY(-20px)",
            pointerEvents: selectedCategory ? "auto" : "none",
            marginTop: selectedCategory ? "40px" : "0",
          }}
        >
          <BooksGrid category={selectedCategory} />
        </div>

      </div>
    </section>
  );
}

export default CategorySection;
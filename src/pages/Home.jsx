import DomeGallerySection from "../components/landing/DomeGallerySection";
import AuthorSection from "../components/about/AuthorSection";
import CategorySection from "../components/books/CategorySection";

function Home() {
  return (
    <div>

      <DomeGallerySection />

      <AuthorSection />

      <CategorySection />

      <section>
        Achievements
      </section>

      <section>
        Footer
      </section>

    </div>
  );
}

export default Home;
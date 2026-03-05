import DomeGallerySection from "../components/landing/DomeGallerySection";
import AuthorSection from "../components/about/AuthorSection";
import CategorySection from "../components/books/CategorySection";
import AchievementGallery from "../components/achievements/AchievementGallery";
import FooterDock from "../components/footer/FooterDock";

function Home() {
  return (
    <div>

      {/* Landing Section */}
      <section>
        <DomeGallerySection />
      </section>

      {/* Author Section */}
      <section>
        <AuthorSection />
      </section>

      {/* Categories */}
      <section>
        <CategorySection />
      </section>

      {/* Achievements */}
      <section>
        <AchievementGallery />
      </section>

      {/* Footer Dock */}
      <section>
        <FooterDock />
      </section>

    </div>
  );
}

export default Home;
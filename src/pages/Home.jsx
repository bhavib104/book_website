import { useEffect, useRef, useState } from "react";
import DomeGallerySection from "../components/landing/DomeGallerySection";
import AuthorSection from "../components/about/AuthorSection";
import CategorySection from "../components/books/CategorySection";
import AchievementGallery from "../components/achievements/AchievementGallery";
import FooterDock from "../components/footer/FooterDock";
import RemarksSection from "../components/footer/RemarksSection";
import FloatingPen from "../components/shared/FloatingPen";
import MagicDustBackground from "../components/shared/MagicDustBackground";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Reusable wrapper for smooth scroll fade-in flow
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" } 
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? "perspective(1200px) translateY(0) rotateX(0) scale(1)" 
          : "perspective(1200px) translateY(100px) rotateX(-15deg) scale(0.92)",
        transformOrigin: "center top",
        transition: "all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        willChange: "opacity, transform",
        width: "100%"
      }}
    >
      {children}
    </div>
  );
};

function Home() {
  const { user } = useAuth();
  const loggedRef = useRef(false);

  useEffect(() => {
    // Log visit once per session when the user enters the Home page
    if (user && !loggedRef.current) {
      const logVisit = async () => {
        try {
          await addDoc(collection(db, "visitors"), {
            email: user.email,
            timestamp: serverTimestamp(),
            displayName: user.displayName
          });
          loggedRef.current = true;
        } catch (err) {
          console.error("Error logging visit:", err);
        }
      };
      logVisit();
    }
  }, [user]);

  return (
    <div>{/* vintage parchment base flows beneath */}

      <div className="torn-edges-overlay" />
      <MagicDustBackground />
      <FloatingPen />

      {/* Landing Section — no fade in needed as it's the hero above fold */}
      <section style={{ zIndex: 10, position: "relative" }}>
        <DomeGallerySection />
      </section>

      {/* Author Section */}
      <section style={{ zIndex: 9, position: "relative" }}>
        <FadeInSection>
          <AuthorSection />
        </FadeInSection>
      </section>

      {/* Categories */}
      <section style={{ zIndex: 8, position: "relative" }}>
        <FadeInSection>
          <CategorySection />
        </FadeInSection>
      </section>

      {/* Achievements */}
      <section style={{ zIndex: 7, position: "relative" }}>
        <FadeInSection>
          <AchievementGallery />
        </FadeInSection>
      </section>

      {/* Remarks Section */}
      <section style={{ zIndex: 6.5, position: "relative" }}>
        <FadeInSection>
          <RemarksSection />
        </FadeInSection>
      </section>

      {/* Footer Dock */}
      <section style={{ zIndex: 6, position: "relative" }}>
        <FadeInSection>
          <FooterDock />
        </FadeInSection>
      </section>

    </div>
  );
}

export default Home;
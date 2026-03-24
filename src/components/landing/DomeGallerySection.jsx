import DomeGallery from "./DomeGallery";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function DomeGallerySection() {

  const images = [
    "/images/book1.jpg",
    "/images/book2.jpg",
    "/images/book3.jpg",
    "/images/book4.jpeg",
    "/images/book5.jpeg",
    "/images/book6.jpeg",
    "/images/book7.jpeg",
    "/images/book8.jpeg",
    "/images/book9.jpeg",
    "/images/book10.jpeg",
    "/images/book11.jpeg",
    "/images/book12.jpeg"
  ];

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // After 2 seconds of showing the logo, trigger the zoom-in reveal
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      
      {/* Cinematic Intro Overlay: KKDH First, then the Dome */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--parchment-mid)", // solid parchment background hides the dome initially
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 15, opacity: 0 }} // Zoom INTO the logo to reveal the dome
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="kkdh-logo-placeholder"
            >
              <div className="logo-circle">
                <img 
                  src="/images/logo.png" 
                  alt="KKDH Logo" 
                  className="kkdh-logo-image"
                  style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <h2 style={{ display: 'none' }}>KKDH</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vintage 3D Sphere Gallery — remains in background and is revealed when intro fades */}
      <DomeGallery
        images={images}
        overlayBlurColor="#f5e9c9"
        grayscale={false}
        imageBorderRadius="16px"
        openedImageBorderRadius="16px"
        openedImageWidth="280px"
        openedImageHeight="380px"
      />

    </section>
  );
}

export default DomeGallerySection;
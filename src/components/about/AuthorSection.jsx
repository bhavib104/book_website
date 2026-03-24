import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AuthorSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 960);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
  const cardStart = isMobile ? 0 : 300; // Center offset
  const textStart = isMobile ? 20 : -300; // Behind the card

  return (
    <section
      style={{
        width: "100%",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "80px 20px" : "120px 5%",
        background: `
          radial-gradient(ellipse at 15% 50%, rgba(196,168,130,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 25%, rgba(184,150,12,0.1) 0%, transparent 45%),
          linear-gradient(160deg, #fdf6e3 0%, #f0e0be 45%, #e4d0a5 100%)
        `,
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* Decorative corner ornaments */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(184,150,12,0.06) 0%, transparent 30%),
          radial-gradient(circle at 100% 100%, rgba(184,150,12,0.06) 0%, transparent 30%)
        `
      }} />

      {/* Flex Wrapper for Animation Tracking */}
      <div 
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "40px" : "80px",
          width: "100%",
          maxWidth: "1200px",
          position: "relative"
        }}
      >
        {/* Profile Card — Slides to the Left */}
        <motion.div
           initial={{ x: cardStart, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
           style={{ zIndex: 10, position: "relative" }}
        >
          <ProfileCard
            name="Your Mom's Name"
            title="Author · Poet · Story Writer"
            handle="authorlife"
            status="Writing stories..."
            contactText="Follow"
            avatarUrl="/images/mom.jpg"
            showUserInfo={false}
            enableTilt={true}
            behindGlowEnabled
            behindGlowColor="rgba(184, 150, 12, 0.45)"
            innerGradient="linear-gradient(145deg, rgba(196,168,130,0.35) 0%, rgba(255,220,100,0.15) 100%)"
          />
        </motion.div>

        {/* About Text — Slides out from behind the Profile Card to the Right */}
        <motion.div 
           initial={{ x: textStart, opacity: 0, filter: "blur(5px)" }}
           whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0.2 : 0.3 }}
           style={{ 
             maxWidth: "520px", 
             zIndex: 5, 
             position: "relative",
             textAlign: isMobile ? "center" : "left"
           }}
        >

          {/* Ornamental rule */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: "14px",
            marginBottom: "28px",
            color: "#b8960c",
          }}>
            <span style={{ fontSize: "1.4rem" }}>❧</span>
            <span style={{
              width: isMobile ? "100px" : "100%",
              flex: isMobile ? "none" : 1,
              height: "1px",
              background: "linear-gradient(to right, #b8960c, transparent)"
            }} />
          </div>

          <h2 className="gold-foil-text cinematic-heading" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontStyle: "italic",
            marginBottom: "12px",
            lineHeight: 1.2,
          }}>
            About the Author
          </h2>

          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "1.15rem",
            lineHeight: 1.85,
            color: "#4a2e1a",
            marginBottom: "20px",
          }}>
            A passionate writer who expresses deep emotions through poetry,
            stories, and novels. Her writing explores the beauty of life,
            human emotions, and boundless imagination.
          </p>

          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#5c3d22",
            fontStyle: "italic",
            borderLeft: isMobile ? "none" : "3px solid rgba(184,150,12,0.5)",
            borderTop: isMobile ? "1px solid rgba(184,150,12,0.3)" : "none",
            paddingLeft: isMobile ? "0" : "20px",
            paddingTop: isMobile ? "20px" : "0",
            margin: "0",
          }}>
            "Through her books she inspires readers with meaningful storytelling
            and heartfelt poetry — words that endure long after the page is turned."
          </p>

          {/* Bottom ornament */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginTop: "32px",
            color: "#b8960c",
          }}>
            <span style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, transparent, #b8960c)"
            }} />
            <span style={{ fontSize: "1.4rem" }}>✦</span>
            <span style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to left, transparent, #b8960c)"
            }} />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default AuthorSection;
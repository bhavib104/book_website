import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPen() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [trail, setTrail] = useState([]); // Store last few points for the trail

  // Track exact mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Add a spring for buttery smooth tracking
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add point to trail if moving
      if (Math.random() > 0.4) { // Randomize density for "inky" feel
        setTrail(prev => [{ 
          x: e.clientX, 
          y: e.clientY, 
          id: Date.now(),
          size: Math.random() * 4 + 2
        }, ...prev].slice(0, 15)); // Keep only latest 15 points
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseX, mouseY]);

  // Fade in after the user has scrolled past the dome gallery (approx 400px)
  const opacity = useTransform(scrollY, [0, 400, 700], [0, 0, 1]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 400 && !isMobile) {
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    });
  }, [scrollY, isMobile]);

  useEffect(() => {
    return () => { document.body.style.cursor = "auto"; };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10010 }}>
        <AnimatePresence>
          {trail.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'fixed',
                left: point.x - 2,
                top: point.y - 4, // Offset slightly to align with pen tip
                width: point.size,
                height: point.size,
                backgroundColor: 'rgba(26, 14, 6, 0.4)',
                borderRadius: '50%',
                filter: 'blur(1px)',
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10011,
          pointerEvents: "none",
          opacity,
          x: springX,
          y: springY,
          marginLeft: "-5px",
          marginTop: "-105px", 
          rotate: -15, 
          filter: "drop-shadow(6px 12px 10px rgba(44,26,14,0.4))"
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="110" 
          height="110" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#1a0e06" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" fill="rgba(184,150,12,0.6)"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="6.5"></line>
        </svg>
      </motion.div>
    </>
  );
}

export default FloatingPen;

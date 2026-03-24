import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VintageCoverflow.css';

function VintageCoverflow({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event, info) => {
    // Detect horizontal swipe distance to increment or decrement the carousel
    if (info.offset.x < -30) {
      setActiveIndex(prev => prev + 1);
    } else if (info.offset.x > 30) {
      setActiveIndex(prev => prev - 1);
    }
  };

  // Generate an infinite scrolling window of 7 cards around the current index
  const visibleCards = [];
  for (let i = activeIndex - 3; i <= activeIndex + 3; i++) {
    const originalIndex = ((i % items.length) + items.length) % items.length;
    visibleCards.push({ item: items[originalIndex], absoluteIndex: i });
  }

  return (
    <div className="coverflow-container">
      {visibleCards.map(({ item, absoluteIndex }) => {
        // Calculate position relative to the currently active card center using the absolute unending index
        const offset = absoluteIndex - activeIndex;
        const isCenter = offset === 0;
        
        // 3D Apple-style Coverflow math
        // x controls horizontal spacing (closer together when inactive)
        const x = isCenter ? 0 : offset * 180; 
        
        // Push inactive cards back in 3D space
        const z = isCenter ? 80 : Math.abs(offset) * -120; 
        
        // Tilt the side cards inwards towards the center card
        const rotateY = isCenter ? 0 : offset > 0 ? -45 : 45; 
        
        const scale = isCenter ? 1.1 : 0.85;
        
        // Hide items that are too far off screen to save rendering
        const opacity = Math.abs(offset) > 2 ? 0 : isCenter ? 1 : 0.7; 
        
        // Nearest items stack on top
        const zIndex = 50 - Math.abs(offset); 
        
        return (
          <motion.div
            key={absoluteIndex}
            className="vintage-frame"
            drag="x" // Allow horizontal drag
            dragConstraints={{ left: 0, right: 0 }} // Snap back to center
            dragElastic={0.3} // Make the drag feel physical
            onDragEnd={handleDragEnd}
            onClick={() => setActiveIndex(absoluteIndex)} // Clicking any card brings it to front
            animate={{ x, z, rotateY, scale, opacity, zIndex }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
              mass: 0.8
            }}
            style={{
              // Add a rich vintage filter when items are sent to the back
              filter: isCenter 
                ? 'sepia(0.05) saturate(1.1) brightness(1.05) contrast(1.05)' 
                : 'sepia(0.6) saturate(0.8) brightness(0.6) blur(2px) contrast(1.1)'
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.text}`}
          >
             <img src={item.image} alt={item.text} draggable={false} />
             <div className="frame-label">{item.text}</div>
          </motion.div>
        );
      })}
      
      {/* Gentle instruction for the user that it's an interactive 3D gallery */}
      <div className="swipe-hint">✦ Click or swipe to explore moments ✦</div>
    </div>
  );
}

export default VintageCoverflow;

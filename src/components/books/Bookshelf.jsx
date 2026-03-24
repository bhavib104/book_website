import { useRef, useEffect } from 'react';
import './Bookshelf.css';

function Bookshelf({ items, selectedCategory, onCategoryClick }) {
  const shelfRef = useRef(null);

  useEffect(() => {
    const shelf = shelfRef.current;
    if (!shelf) return;

    const handleMouseMove = (e) => {
      const rect = shelf.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      shelf.style.setProperty('--mouse-x', `${x}px`);
      shelf.style.setProperty('--mouse-y', `${y}px`);
    };

    shelf.addEventListener('mousemove', handleMouseMove);
    return () => shelf.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // Predefined vintage colors and height variations to make the shelf look dynamic
  const bookStyles = [
    { color: 'linear-gradient(90deg, #4a1f24, #2a0f12)', height: '95%' },   // Deep Red
    { color: 'linear-gradient(90deg, #1f2e3d, #0f1821)', height: '100%' },  // Navy Blue
    { color: 'linear-gradient(90deg, #2c3a25, #141c11)', height: '92%' },   // Forest Green
    { color: 'linear-gradient(90deg, #6b4c2a, #3c2a16)', height: '98%' },   // Classic Brown
    { color: 'linear-gradient(90deg, #30204a, #1a102b)', height: '94%' }    // Rich Violet/Indigo
  ];

  return (
    <div className="bookshelf-container" ref={shelfRef}>
      <div className="books-row">
        {items.map((item, index) => {
          const styleTemplate = bookStyles[index % bookStyles.length];
          const isActive = selectedCategory === item.title;
          
          return (
            <div 
              key={index} 
              className={`book-spine ${isActive ? 'active' : ''}`}
              onClick={() => onCategoryClick(item.title)}
              style={{
                background: styleTemplate.color,
                height: styleTemplate.height
              }}
              role="button"
              tabIndex={0}
              aria-label={`Select ${item.title} category`}
            >
              <div className="spine-ribs"></div>
              <div className="spine-icon">✦</div>
              <span className="spine-title gold-foil-text">{item.title}</span>
            </div>
          );
        })}
      </div>
      {/* The wooden shelf base */}
      <div className="shelf-board"></div>
    </div>
  );
}

export default Bookshelf;

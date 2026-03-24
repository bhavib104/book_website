import React from 'react';

const VintageFrame = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 10002,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Heavy Burned Edges / Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 60%, rgba(26, 14, 6, 0.2) 85%, rgba(10, 5, 2, 0.4) 100%)',
        mixBlendMode: 'multiply'
      }} />

      {/* Subtle "Glass" sheen overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)',
        opacity: 0.5
      }} />

      {/* Torn edge shadows */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        boxShadow: 'inset 0 0 80px rgba(0,0,0,0.15)',
        border: '1px solid rgba(184, 150, 12, 0.1)',
        opacity: 0.4
      }} />
      
      {/* Decorative Corner Seals (Optional but "Crazy") */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '15px',
        width: '40px',
        height: '40px',
        opacity: 0.15,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 0 L100 50 L50 100 L0 50 Z\' fill=\'%23b8960c\'/%3E%3C/svg%3E")',
        backgroundSize: 'contain'
      }} />
    </div>
  );
};

export default VintageFrame;

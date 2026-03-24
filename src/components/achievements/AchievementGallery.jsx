import VintageCoverflow from "./VintageCoverflow";

function AchievementGallery() {
  const items = [
    { image: "/images/award1.jpg", text: "Literary Award" },
    { image: "/images/award2.jpg", text: "Book Launch" },
    { image: "/images/award3.jpg", text: "Poetry Event" },
    { image: "/images/award4.jpg", text: "Author Meet" }
  ];

  return (
    <section style={{
      width: "100%",
      height: "800px",  // Slightly taller for better vertical rhythm
      background: `
        radial-gradient(ellipse at 80% 80%, rgba(196,168,130,0.15) 0%, transparent 60%),
        linear-gradient(135deg, #fdf6e3 0%, #f5e9c9 50%, #e8d5aa 100%)
      `,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "60px"
    }}>
      
      {/* Background Ornamentation */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 32px,
            rgba(139,94,60,0.03) 32px,
            rgba(139,94,60,0.03) 33px
          )
        `,
        zIndex: 0
      }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: "40px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          color: "#1a0e06",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "0.05em",
          marginBottom: "12px",
          fontStyle: "italic",
        }}>
          Moments & Milestones
        </h2>
        <div style={{
          height: "1px",
          width: "100px",
          background: "linear-gradient(to right, transparent, #b8960c, transparent)",
          margin: "0 auto"
        }} />
      </div>

      <div style={{ width: "100%", flex: 1, position: "relative", zIndex: 1 }}>
        <VintageCoverflow items={items} />
      </div>
    </section>
  );
}

export default AchievementGallery;
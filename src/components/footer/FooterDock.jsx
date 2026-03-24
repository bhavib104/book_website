import Dock from "./Dock";

function FooterDock() {
  const items = [
    { icon: <img src="/icons/instagram.png" alt="Instagram" />, link: "https://instagram.com", label: "Instagram" },
    { icon: <img src="/icons/amazon.png" alt="Amazon" />, link: "https://amazon.com", label: "Amazon" },
    { icon: <img src="/icons/email.png" alt="Email" />, link: "mailto:author@email.com", label: "Email" },
    { icon: <img src="/icons/linkedin.png" alt="LinkedIn" />, link: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <section
      style={{
        padding: "160px 0 100px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(ellipse at 50% 100%, rgba(139,94,60,0.15) 0%, transparent 60%),
          linear-gradient(to bottom, #fdf6e3, #e8d5aa)
        `,
        borderTop: "1px solid rgba(184,150,12,0.2)"
      }}
    >
      <Dock 
        items={items} 
        magnification={110}     /* Increased scaling substantially for exaggerated macOS feel */
        distance={250}          /* Expanded interaction radius */
        baseItemSize={75}       /* Much larger base icons for prominent final action */
      />
    </section>
  );
}

export default FooterDock;
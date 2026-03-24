import Dock from "./Dock";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

function FooterDock() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const items = [
    { icon: <img src="/icons/instagram.png" alt="Instagram" />, link: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com", label: "Instagram" },
    { icon: <img src="/icons/amazon.png" alt="Amazon" />, link: import.meta.env.VITE_AMAZON_AUTHOR_URL || "https://amazon.com", label: "Amazon" },
    { icon: <img src="/icons/email.png" alt="Email" />, link: `mailto:${import.meta.env.VITE_AUTHOR_EMAIL || 'author@email.com'}`, label: "Email" },
    { icon: <img src="/icons/linkedin.png" alt="LinkedIn" />, link: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com", label: "LinkedIn" }
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section
      style={{
        padding: "160px 0 100px 0",
        display: "flex",
        flexDirection: "column",
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
        magnification={110}
        distance={250}
        baseItemSize={75}
      />

      <div style={{ 
        marginTop: "60px", 
        display: "flex", 
        justifyContent: "center",
        fontFamily: "'EB Garamond', serif",
        fontSize: "1rem",
        opacity: 0.6
      }}>
        <button 
          onClick={handleLogout}
          style={{ 
            background: "none", 
            border: "none", 
            padding: 0, 
            font: "inherit", 
            color: "#1a0e06", 
            cursor: "pointer", 
            borderBottom: "1px solid #1a0e06" 
          }}
        >
          Logout
        </button>
      </div>

      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#9e7c5a", fontStyle: "italic" }}>
        © {new Date().getFullYear()} — Handcrafted for the Literary Soul
      </p>
    </section>
  );
}

export default FooterDock;
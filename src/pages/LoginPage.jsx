import React from "react";
import { signInWithGoogle } from "../firebase";
import { motion } from "framer-motion";

function LoginPage() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#fdf6e3",
      padding: "20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Vintage Paper Texture Overlay */}
      <div className="vintage-paper" style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          maxWidth: "450px",
          width: "100%",
          padding: "60px 40px",
          textAlign: "center",
          background: "rgba(245, 233, 201, 0.4)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(184, 150, 12, 0.3)",
          borderRadius: "8px",
          boxShadow: "0 20px 50px rgba(44, 26, 14, 0.15)",
          position: "relative",
          zIndex: 10
        }}
      >
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "2.5rem",
          color: "#1a0e06",
          marginBottom: "20px"
        }}>
          The Author's Library
        </h1>
        
        <div style={{
          height: "1px",
          width: "80px",
          background: "linear-gradient(to right, transparent, #b8960c, transparent)",
          margin: "0 auto 30px"
        }} />

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "1.2rem",
          lineHeight: 1.6,
          color: "#4a2e1a",
          marginBottom: "40px"
        }}>
          To enter this private collection, please sign our digital guestbook with your Google account.
        </p>

        <button
          onClick={signInWithGoogle}
          className="gold-foil-text"
          style={{
            padding: "14px 28px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            border: "1px solid #b8960c",
            background: "transparent",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(184, 150, 12, 0.2)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(184, 150, 12, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(184, 150, 12, 0.2)";
          }}
        >
          Sign Entry Seal
        </button>

        <div style={{ marginTop: "40px", color: "#9e7c5a", fontSize: "0.9rem", fontStyle: "italic" }}>
          ❧ Secured with Google ❧
        </div>
      </motion.div>

      {/* Background Ornaments */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        fontSize: "2rem",
        color: "rgba(184, 150, 12, 0.2)"
      }}>
        ✦ ✧ ✦
      </div>
    </div>
  );
}

export default LoginPage;

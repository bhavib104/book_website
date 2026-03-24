import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

function RemarksSection() {
  const [remark, setRemark] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!remark.trim() || !user) return;

    setStatus("sending");
    try {
      await addDoc(collection(db, "remarks"), {
        email: user.email,
        message: remark,
        timestamp: serverTimestamp()
      });
      setRemark("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Error saving remark:", err);
      setStatus("idle");
    }
  };

  return (
    <div style={{
      width: "100%",
      padding: "100px 5%",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="gold-foil-text" style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "2.4rem",
          marginBottom: "16px"
        }}>
          Signature of Thoughts
        </h2>
        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "1.2rem",
          color: "#5c3d22",
          marginBottom: "40px"
        }}>
          Leave a remark, a request, or a simple greeting in our digital guestbook.
        </p>

        <form onSubmit={handleSubmit} style={{ position: "relative" }}>
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Write your words here..."
            style={{
              width: "100%",
              height: "150px",
              padding: "20px",
              background: "rgba(245, 233, 201, 0.3)",
              border: "1px solid rgba(184, 150, 12, 0.4)",
              borderRadius: "4px",
              fontFamily: "'EB Garamond', serif",
              fontSize: "1.15rem",
              color: "#1a0e06",
              outline: "none",
              resize: "none",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.05)"
            }}
          />
          
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", color: "#9e7c5a", fontStyle: "italic" }}>
              Signing as: {user?.email}
            </span>
            <button
              type="submit"
              disabled={status === "sending"}
              className="gold-foil-text"
              style={{
                padding: "10px 30px",
                border: "1px solid #b8960c",
                background: "transparent",
                cursor: "pointer",
                fontSize: "1rem",
                opacity: status === "sending" ? 0.5 : 1
              }}
            >
              {status === "sending" ? "Sealing..." : status === "success" ? "Words Received" : "Submit Remark"}
            </button>
          </div>
        </form>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: "20px", color: "#b8960c", fontStyle: "italic" }}
          >
            Your words have been preserved in the author's collection.
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default RemarksSection;

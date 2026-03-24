import React from "react";
import { useAuth } from "../../context/AuthContext";
import LoginPage from "../../pages/LoginPage";

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fdf6e3",
        fontFamily: "'EB Garamond', serif",
        color: "#4a2e1a"
      }}>
        <div className="gold-foil-text" style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          Unlocking the Archive...
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  return children;
};

export default AuthGuard;

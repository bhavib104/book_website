import React, { useEffect, useState } from "react";
import { db, logout } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminPortal() {
  const [visitors, setVisitors] = useState([]);
  const [remarks, setRemarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  // 🔒 RESTRICTED PORTAL: Only the author's email can enter
  const AUTHOR_EMAIL = import.meta.env.VITE_AUTHOR_EMAIL; 

  const isAuthorized = user && AUTHOR_EMAIL && user.email === AUTHOR_EMAIL;

  useEffect(() => {
    if (!isAuthorized) return;

    const fetchData = async () => {
      try {
        const vQuery = query(collection(db, "visitors"), orderBy("timestamp", "desc"));
        const rQuery = query(collection(db, "remarks"), orderBy("timestamp", "desc"));
        
        const vSnap = await getDocs(vQuery);
        const rSnap = await getDocs(rQuery);
        
        setVisitors(vSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setRemarks(rSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isAuthorized]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (!isAuthorized) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fdf6e3",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 className="gold-foil-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "20px" }}>
          Private Archive
        </h1>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.2rem", maxWidth: "400px", color: "#4a2e1a" }}>
          You have reached a restricted collection. Only the curator of this library has access to these logs.
        </p>
        <button 
          onClick={() => navigate("/")}
          style={{ marginTop: "40px", padding: "10px 30px", background: "transparent", border: "1px solid #b8960c", cursor: "pointer" }}
        >
          Return to Library
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fdf6e3",
      padding: "60px 5%",
      fontFamily: "'EB Garamond', serif",
      color: "#1a0e06"
    }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "2.5rem" }}>
          Library Oversight
        </h1>
        <button 
          onClick={handleLogout}
          style={{ padding: "8px 20px", cursor: "pointer", border: "1px solid #b8960c", background: "transparent" }}
        >
          Close Archive
        </button>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
        
        {/* Visitors Section */}
        <section style={{ background: "rgba(245, 233, 201, 0.4)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(184, 150, 12, 0.2)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "20px" }}>Recent Visitors</h2>
          {loading ? <p>Reading logs...</p> : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {visitors.map(v => (
                <li key={v.id} style={{ padding: "12px 0", borderBottom: "1px solid rgba(139, 94, 60, 0.1)" }}>
                  <div style={{ fontWeight: "600" }}>{v.email}</div>
                  <div style={{ fontSize: "0.9rem", color: "#9e7c5a" }}>
                    {v.timestamp?.toDate().toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Remarks Section */}
        <section style={{ background: "rgba(245, 233, 201, 0.4)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(184, 150, 12, 0.2)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "20px" }}>Guestbook Remarks</h2>
          {loading ? <p>Unfolding scrolls...</p> : (
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {remarks.map(r => (
                <div key={r.id} style={{ padding: "15px", background: "#fdf6e3", borderRadius: "4px", borderLeft: "4px solid #b8960c" }}>
                  <p style={{ margin: "0 0 8px", fontStyle: "italic" }}>"{r.message}"</p>
                  <div style={{ fontSize: "0.85rem", color: "#7a5c3e" }}>
                    — {r.email} • {r.timestamp?.toDate().toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default AdminPortal;

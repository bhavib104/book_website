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

  // Basic security check: You might want to restrict this to a specific email
  // const AUTHOR_EMAIL = "your-email@gmail.com";
  // if (user?.email !== AUTHOR_EMAIL) return <Unauthorized />;

  useEffect(() => {
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
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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

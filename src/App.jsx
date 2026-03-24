import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AuthGuard from "./components/shared/AuthGuard";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AdminPortal from "./pages/AdminPortal";
import LoginPage from "./pages/LoginPage";
import VintageFrame from "./components/shared/VintageFrame";
import { useEffect } from "react";

function App() {
  const { loading } = useAuth();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth).toFixed(3);
      const y = (e.clientY / window.innerHeight).toFixed(3);
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) return null;

  return (
    <>
      <VintageFrame />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            } 
          />
          <Route 
            path="/book/:id" 
            element={
              <AuthGuard>
                <BookPage />
              </AuthGuard>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <AuthGuard>
                <AdminPortal />
              </AuthGuard>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
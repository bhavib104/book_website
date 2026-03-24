import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/shared/AuthGuard";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AdminPortal from "./pages/AdminPortal";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
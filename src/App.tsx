import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// Auth Pages
import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";

// Layout Components
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Error Pages
import NotFound from "./pages/OtherPage/NotFound";
import Unauthorized from "./pages/OtherPage/Unauthorized";

// Components
import Loader from "./components/ui/loader/Loader";
import Home from "./pages/Home/Home";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    } | null;
    token: string | null;
  };
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const token = localStorage.getItem("token");

  // if (!user && !token) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (user && !allowedRoles.includes(user?.role)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return <Outlet />;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader duration={10000} />;
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={["Admin", "Instructor", "Teacher", "Student"]}
              />
            }
          >
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

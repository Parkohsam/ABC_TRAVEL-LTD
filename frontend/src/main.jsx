import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Profile from "./Pages/Profile.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import PreCheckout from "./Pages/preCheckout.jsx";
import Packages from "./Pages/Packages.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/Login", element: <Login /> },
  { path: "/preCheckout", element: <PreCheckout /> },
  {
    path: "/Dashboard",
    element: (
      <ProtectedRoute requiredRole="user">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Profile",
    element: (
      <ProtectedRoute requiredRole="user">
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/AdminDashboard",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/booking",
    element: (
      <ProtectedRoute requiredRole="user">
        <Packages />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

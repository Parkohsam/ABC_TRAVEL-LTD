import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from './Pages/Dashboard.jsx';
import Profile from './Pages/Profile.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import PreCheckout from './Pages/preCheckout.jsx';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/Login", element: <Login /> },
  {path:"/Dashboard" , element: <Dashboard />},
  {path:"/Profile" , element: <Profile/>},
  { path: "/admin/AdminDashboard", element: <AdminDashboard /> },
  {path: "/preCheckout" , element: <PreCheckout />}
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

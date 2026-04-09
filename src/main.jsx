import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Navigate } from "react-router";
import Manage from "./pages/Manage";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/management",
    element: (
      <ProtectedRoute>
        <Manage />
      </ProtectedRoute>
    ),
  },
]);

root.render(<RouterProvider router={router} />);

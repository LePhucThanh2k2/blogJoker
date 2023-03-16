import { useContext, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/index";
import { ThemeContext } from "./hooks/ToggleContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";
import Test from "./pages/test";
AOS.init();
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
 
]);

function App() {
  const contentTheme = useContext(ThemeContext);
  return (
    <div className={`app `}>
      <div className={`container ${contentTheme.theme}`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

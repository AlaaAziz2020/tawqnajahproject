import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import UpperNav from "../Uppernav/Uppernav";

export default function Layout() {
  const location = useLocation();

  const authRoutes = [
    "/login",
    "/register",
    "/forgetpassword",
    "/resetpassword",
    "/changepassword",
    "/accounttype",
    "/seller",
    "/buyer",
    "/admin",
  ];

  const hideLayout = authRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideLayout && <UpperNav />}
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
}

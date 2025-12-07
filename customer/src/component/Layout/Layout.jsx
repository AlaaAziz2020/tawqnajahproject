import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import UpperNav from "../Uppernav/Uppernav";

export default function Layout() {

  const location = useLocation();

  // كل الصفحات اللي مش عايزة فيها UpperNav + Navbar + Footer
  const authRoutes = [
    "/register",
    "/login",
    "/forgetpassword",
    "/resetpassword",
    "/changepassword",
    "/accounttype",
    "/seller",
    "/buyer",
    "/admin"
  ];

  // لو المسار الحالي يبدأ بأي route من اللي فوق → نخفي الـ Layout
  const hideLayout = authRoutes.some(route =>
    location.pathname.toLowerCase().startsWith(route)
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

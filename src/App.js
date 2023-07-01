import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Order from "./pages/orders/Order";
import AdminOrders from "./pages/admin/AdminOrders/Adminorders";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import AdminRoute from "./protected/AdminRoute";
import UserRoute from "./protected/UserRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* search */}
        <Route path="/search/:query" element={<Search />} />

        {/* Forgot Password */}
        <Route path="/forgot_password" element={<ForgotPassword />} />

        {/* for admin route */}
        <Route element={<AdminRoute />}>
          {/* for admin dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          {/* for admin product edit */}
          <Route
            path="/admin/product/edit/:id"
            element={<AdminProductEdit />}
          ></Route>
          {/* orders */}
          <Route path="/admin/order" element={<AdminOrders />}></Route>
        </Route>

        {/* for user route */}
        <Route element={<UserRoute />}>
          {/* cart */}
          <Route path="/cart" element={<Cart />}></Route>
          {/* orders */}
          <Route path="/order" element={<Order />}></Route>
          {/* profile Routes */}
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

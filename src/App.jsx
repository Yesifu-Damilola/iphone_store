// import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import { router } from "./routes";
import Root from "./pages/home/Root";
import Home from "./pages/home/index";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Account from "./components/account/Account";
import NotFound from "./pages/notfound/NotFound";
import { Cancellations } from "./components/account/Cancellations";
import { Logout } from "./components/account/Logout";
import { ManageAccount } from "./components/account/ManageAccount";
import { Order } from "./components/account/Order";
import { Reviews } from "./components/account/Reviews";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import MyAccount from "./pages/myaccount/MyAccount";
import ProductDetails from "./pages/productdetails/ProductDetails";
import ProductRoot from "./pages/products/Root";
import Products from "./pages/products/index";
// import { FlashSalesDetails } from "./pages/FlashSalesDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          {/* <Route path="flashSales/:id" element={<FlashSalesDetails />} /> */}
          <Route path="/flashSales/:id" element={<ProductDetails />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />}>
            <Route path="manage" element={<ManageAccount />} />
            <Route path="orders" element={<Order />} />
            <Route path="cancellations" element={<Cancellations />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="products" element={<ProductRoot />}>
            <Route index element={<Products />} />
            {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
          </Route>
        </Route>
        {/* <Route path="gamepad" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFound showHeaderFooter={true} />} />
      </Routes>
    </Router>
  );
};
export default App;

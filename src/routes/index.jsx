// import { Route, Router, Routes } from "react-router-dom";
// import Root from "../pages/home/Root";
// import Home from "./../pages/home/index";
// import SignUp from "./../pages/signup/SignUp";
// import Login from "./../pages/login/Login";
// import Contact from "../pages/contact/Contact";
// import About from "../pages/about/About";
// import MyAccount from "../pages/myaccount/MyAccount";
// import Cart from "../pages/cart/Cart";
// import WishList from "../pages/wishlist/WishList";
// import NotFound from "../pages/notfound/NotFound";
// import GamePad from "../pages/gamepad/GamePad";
// import ProductRoot from "../pages/products/Root";
// import Products from "../pages/products";
// import { router } from "./index";
// import App from "./../App";
// import { Account } from "../components/account/Account";

// export const router = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Root />}>
//           <Route index element={<Home />} />
//           <Route path="signup" element={<SignUp />} />
//           <Route path="login" element={<Login />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="about" element={<About />} />
//           <Route path="account" element={<Account />}>
//             <Route path="manage" element={<ManageAccount />} />
//             <Route path="orders" element={<Orders />} />
//             <Route path="cancellations" element={<Cancellations />} />
//             <Route path="reviews" element={<Reviews />} />
//             <Route path="logout" element={<Logout />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },

//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "myaccount",
//         element: <MyAccount />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "wishlist",
//         element: <WishList />,
//       },
//       {
//         path: "products",
//         element: <ProductRoot />,
//         children: [
//           {
//             index: true,
//             element: <Products />,
//           },
//           {
//             path: ":id",
//             element: <GamePad />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "gamepad",
//     element: <GamePad />,
//   },
//   {
//     path: "*",
//     element: <NotFound showHeaderFooter={true} />,
//   },
// ]);

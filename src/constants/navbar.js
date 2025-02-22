import { Cart } from "../assets/icons/Cart";
import { Heart } from "../assets/icons/Heart";

export const navRoutes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "./about",
  },
  // {
  //   name: "WishList",
  //   path: "./wishlist",
  // },
];

export const subMenuLists = [
  {
    name: "wishlist",
    icon: Heart,
    path: "/wishlist",
  },
  {
    name: "cart",
    icon: Cart,
    path: "/cart",
  },
];

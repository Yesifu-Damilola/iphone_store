import { Cart } from "../assets/icons/Cart";
import { Heart } from "../assets/icons/Heart";
import { Users } from "../assets/icons/Users";
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
  {
    name: "SignUp",
    path: "/signup",
  },
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
  {
    name: "users",
    icon: Users,
  },
];

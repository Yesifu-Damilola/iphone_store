import gamepad from "../assets/images/gamepad@3.png";
import keyboard from "../assets/images/keyboard@3.png";
import gaming_monitor from "../assets/images/gaming_monitor@3.png";
import chair from "../assets/images/chair@2.png";
import gaming_laptop from "../assets/images/gaming_laptop@3.png";
import coat from "../assets/images/coat@3.png";
import duffle_bag from "../assets/images/duffle_bag@3.png";
import cpu_cooler from "../assets/images/cpu_cooler@3.png";
import bookself from "../assets/images/bookself@3.png";
import jacket from "../assets/images/jacket@3.png";
import dogfood from "../assets/images/dogfood@3.png";
import camera from "../assets/images/camera@3.png";
import curologyproducts from "../assets/images/curologyproducts@3.png";
import electric_car from "../assets/images/electric_car@3.png";
import soccer_boot from "../assets/images/soccer_boot@3.png";
import game_pad from "../assets/images/game_pad@3.png";
import boombox from "../assets/images/boombox@3.png";
import gamepad1 from "../assets/images/gamepad1@3.png";
import gamepad2 from "../assets/images/gamepad2@3.png";
import gamepad3 from "../assets/images/gamepad3@3.png";
import gamepad4 from "../assets/images/gamepad4@3.png";
import heroiphone from "../assets/images/heroiphone.jpeg";
import horeiphone1 from "../assets/images/horeiphone1.webp";
import heroiphone2 from "../assets/images/heroiphone2@3.png";
import heroiphone3 from "../assets/images/horeiphone3.jpeg";
import heroiphone4 from "../assets/images/heroiphone4.jpeg";
import heroiphone5 from "../assets/images/heroiphone5.jpeg";
import heroiphone6 from "../assets/images/heroiphone6.jpeg";
import heroiphone8 from "../assets/images/heroiphone8.jpeg";
import heroiphone9 from "../assets/images/heroiphone9.jpeg";
import heroiphone10 from "../assets/images/heroiphone10.jpeg";
import heroiphone11 from "../assets/images/heroiphone11.jpeg";
import heroiphone12 from "../assets/images/heroiphone12.webp";
import heroiphone13 from "../assets/images/heroiphone13.jpeg";
import heroiphone14 from "../assets/images/heroiphone14.jpeg";
import heroiphone15 from "../assets/images/heroiphone15.jpeg";
import heroiphone16 from "../assets/images/heroiphone16.jpeg";
import heroiphone19 from "../assets/images/heroiphone19.jpeg";
import heroiphone20 from "../assets/images/heroiphone20.jpeg";
import heroiphone21 from "../assets/images/heroiphone21.jpeg";
import heroiphone22 from "../assets/images/heroiphone22.jpeg";

export const products = [
  {
    src: gamepad,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    rating: 5,
    wishList: false,
    reviews: 88,
    // hover: { hasCartButton: true },
  },
  {
    src: keyboard,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    originalPrice: "$1160",
    rating: 4.5,
    reviews: 75,
  },
  {
    src: gaming_monitor,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    originalPrice: "$400",
    rating: 5,
    reviews: 99,
  },
  {
    src: chair,
    title: "S-Series Comfort Chair",
    price: "$375",
    originalPrice: "$400",
    rating: 5,
    reviews: 99,
  },
  {
    src: gaming_laptop,
    title: "ASUS FHD Gaming Laptop",
    price: "$120",
    originalPrice: "$160",
    rating: 5,
    reviews: 88,
  },
];

export const sellingProducts = [
  {
    id: 1,
    src: coat,
    title: "The north coat",
    price: "260",
    originalPrice: "360",
    rating: 5,
    reviews: 65,
    discount: "-30%",
  },
  {
    id: 2,
    src: duffle_bag,
    title: "Gucci duffle bag",
    price: "960",
    originalPrice: "1160",
    rating: 4.5,
    reviews: 65,
    discount: "-10%",
  },
  {
    id: 3,
    src: cpu_cooler,
    title: "RGB liquid CPU Cooler",
    price: "160",
    originalPrice: "170",
    rating: 4.5,
    reviews: 65,
    discount: "-25%",
  },
  {
    id: 4,
    src: bookself,
    title: "Small BookSelf",
    price: "360",
    rating: 5,
    reviews: 65,
    discount: "-12%",
  },
  {
    id: 5,
    src: jacket,
    title: "Quilted Satin Jacket",
    price: "750",
    originalPrice: "550",
    rating: 5,
    reviews: 65,
    discount: null,
  },
];

export const exploreProducts = [
  {
    src: dogfood,
    title: "Breed Dry Dog Food",
    price: "$100",
    rating: 4.5,
    reviews: 35,
  },

  {
    src: camera,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4.5,
    reviews: 35,
    hasCartButton: true,
  },
  {
    src: gaming_monitor,
    title: "Monitor Smart Screen",
    price: "$800",
    rating: 4.5,
    reviews: 95,
  },
  {
    src: gaming_laptop,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    reviews: 325,
  },
  {
    src: curologyproducts,
    title: "Curology Product Set",
    price: "$500",
    rating: 5,
    reviews: 145,
  },
  {
    products: "New",
    src: electric_car,
    title: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
  },
  {
    src: soccer_boot,
    title: "Jr.Zoom Soccer Cleats",
    price: "$1160",
    rating: 5,
    reviews: 35,
  },
  {
    src: game_pad,
    title: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 5,
    reviews: 65,
  },
  {
    products: "New",
    src: jacket,
    title: "Quilted Satin Jacket",
    price: "$660",
    rating: 5,
    reviews: 65,
  },
  {
    src: boombox,
    title: "Boom Box Speaker",
    price: "$350",
    rating: 5,
    reviews: 65,
  },
];

export const WishLists = [
  {
    id: 1,
    src: duffle_bag,
    title: "Gucci duffle bag",
    price: "$960",
    originalPrice: "1160",
    discount: "-30%",
    hasCartButton: "true",
    rating: 5,
    reviews: 15,
  },
  {
    id: 2,
    src: cpu_cooler,
    title: "RGB liquid CPU Cooler",
    price: "$1960",
    discount: "",
    hasCartButton: "true",
    rating: 3,
    reviews: 30,
  },
  {
    id: 3,
    src: game_pad,
    title: "GP11 Shooter USB Gamepad",
    price: "$550",
    hasCartButton: "true",
    rating: 5,
    reviews: 35,
  },
  {
    id: 4,
    src: jacket,
    title: "Quilted Satin Jacket",
    price: "$750",
    hasCartButton: "true",
    rating: 4,
    reviews: 65,
  },
];
export const galleries = [
  { id: 1, src: gamepad1, title: "gamepad1 " },
  {
    id: 2,
    src: gamepad2,
    title: "gamepad2",
  },
  {
    id: 3,
    src: gamepad3,
    title: "gamepad3",
  },
  {
    id: 4,
    src: gamepad4,
    title: "gamepad4",
  },
];

export const iphoneImages = [
  heroiphone,
  horeiphone1,
  heroiphone2,
  heroiphone3,
  heroiphone4,
  heroiphone5,
  heroiphone6,
  heroiphone8,
  heroiphone9,
  heroiphone10,
  heroiphone11,
  heroiphone12,
  heroiphone13,
  heroiphone14,
  heroiphone15,
  heroiphone16,
  heroiphone19,
  heroiphone20,
  heroiphone21,
  heroiphone22,
];

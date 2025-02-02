import { ShoppingCart01Icon } from "hugeicons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const { cart } = useCart();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="flex items-center justify-between mr-6 py-4 md:px-8">
        <div className="text-blue-600 text-xl font-bold">
          <Link to="/">
            <img src="2.png" className="h-8 w-20 md:h-10 md:w-28" alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex items-center mr-7 space-x-6 lg:space-x-10">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-black rounded-md dark:text-white dark:bg-gray-800 placeholder:text-gray-500"
          />

          <Link
            to="/"
            className={`text-white text-sm lg:text-xl hover:text-customRed transition ${
              activeButton === "home"
                ? "text-red-500 lg:sm:md:xl:w-[56px] border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-white text-sm lg:text-xl hover:text-customRed transition ${
              activeButton === "products"
                ? "text-red-500 border-b-2 lg:sm:md:xl:w-[80px]  border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("products")}
          >
            Products
          </Link>
          <Link
            to="/login"
            className={`text-white text-sm lg:text-xl hover:text-customRed transition ${
              activeButton === "login"
                ? "text-red-500 border-b-2 lg:sm:md:xl:w-[56px] border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("login")}
          >
            Login
          </Link>
          <Link
            to="/cart"
            className="relative"
            onClick={() => handleButtonClick("cart")}
          >
            <button>
              <ShoppingCart01Icon
                size={24}
                color={isHovered ? "#F7446A" : "#FFFFFF"}
              />
            </button>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xl rounded-full px-2">
                {cart.length}
              </span>
            )}
            {activeButton === "cart" && (
              <hr className="border-t-2 lg:sm:md:xl:w-[26px] border-red-500 mt-2" />
            )}
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black px-4 py-2 space-y-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-black rounded-md dark:text-white dark:bg-gray-800 placeholder:text-gray-500"
          />

          <Link
            to="/"
            className={`block text-white text-sm hover:text-customRed transition ${
              activeButton === "home"
                ? "text-red-500 w-[40px] border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`block text-white text-sm hover:text-customRed transition ${
              activeButton === "products"
                ? "text-red-500 w-[55px] border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("products")}
          >
            Products
          </Link>
          <Link
            to="/login"
            className={`block text-white text-sm hover:text-customRed transition ${
              activeButton === "login"
                ? "text-red-500 w-[40px] border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleButtonClick("login")}
          >
            Login
          </Link>

          <Link
            to="/cart"
            className="relative block"
            onClick={() => handleButtonClick("cart")}
          >
            <button>
              <ShoppingCart01Icon size={24} color={"#FFFFFF"} />
            </button>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2  bg-red-500 text-white text-xs rounded-full px-2 ">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };

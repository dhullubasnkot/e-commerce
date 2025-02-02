import {
  Facebook02Icon,
  TwitterIcon,
  InstagramIcon,
  WhatsappIcon,
  MailOpenIcon,
} from "hugeicons-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";

const Footer = () => {
  const { cart } = useCart();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9 px-4">
        <div className="mr-12">
          <div className="h-16 w-32">
            <Link to="/">
              <img
                src="Logo.png"
                className="h-full w-full object-cover"
                alt="Logo"
              />
            </Link>
          </div>
          <p className="mt-2 text-sm">
            TryUs is a modern e-commerce platform offering high-quality products
            across various categories. Secure payments, fast delivery, and
            exclusive deals await you!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="leading-8">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/cart" className="relative">
                <button>Cart</button>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Get Support</h3>
          <ul className="leading-8">
            <li>
              <Link to="/help-center" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/order-status" className="hover:text-white">
                Check Order Status
              </Link>
            </li>
            <li>
              <Link to="/refunds" className="hover:text-white">
                Refunds
              </Link>
            </li>
            <li>
              <Link to="/report-abuse" className="hover:text-white">
                Report Abuse
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p>Email: support@myshop.com</p>
          <p>Phone: +977 9744355432</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook02Icon size={26} color={"#ffffff"} variant={"stroke"} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon size={26} color={"#ffffff"} variant={"stroke"} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon size={26} color={"#ffffff"} variant={"stroke"} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <WhatsappIcon size={26} color={"#ffffff"} variant={"stroke"} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <MailOpenIcon size={26} color={"#ffffff"} variant={"stroke"} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Payment Options</h3>
          <div className="flex space-x-4">
            <img src="esewa.png" alt="eSewa" className="h-8" />
            <img src="khalti.png" alt="Khalti" className="h-8" />
            <img src="ime.png" alt="iMepay" className="h-8" />
            <img src="pay.png" alt="PayTm" className="h-8" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} TryUs. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/terms" className="hover:text-white">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/returns" className="hover:text-white">
            Return Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

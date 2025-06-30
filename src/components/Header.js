import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white py-4 px-4 md:px-6 shadow-md fixed top-0 left-0 w-full z-50">
        {/* Logo Container */}
        <div className="logo-container mb-4 md:mb-0">
          <Link to="/">
            <img
              className="w-16 md:w-20 rounded-full hover:scale-105 transition-transform duration-300"
              alt="logo"
              src={LOGO_URL}
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="nav-items w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-y-2 gap-x-4 md:space-x-6 items-center text-sm md:text-lg">
            {/* Online Status (commented out as in your original code) */}
            {/* <li className="font-medium">
              Online Status:{" "}
              <span className={`font-bold ${onlineStatus ? "text-green-400" : "text-red-400"}`}>
                {onlineStatus ? "✅ Online" : "🔴 Offline"}
              </span>
            </li> */}
            <li className="nav-item">
              <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
            </li>
            {/* Corrected Cart Link with Icon and Badge */}
            <li className="nav-item relative">
              <Link to="/cart" className="flex items-center hover:text-blue-400 transition-colors duration-200">
                Cart
              </Link>
              {/* Cart item count badge - positioned absolutely relative to its parent li */}
              <span className="absolute -top-1.5 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
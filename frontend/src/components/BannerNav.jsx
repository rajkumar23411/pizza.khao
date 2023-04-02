import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/actions/cartActions";

const BannerNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(0);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };
  const toggleMenu = (index) => {
    setIsModelOpen(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowSearchBar(false);
      }
    };
    dispatch(getCartItems());
    window.addEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <>
      <nav className="flex items-center justify-evenly absolute w-full top-6 z-10">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-white rounded-full p-3">
            <PhoneEnabledOutlinedIcon fontSize="large" sx={{ color: "red" }} />
          </div>
          <p className="flex flex-col">
            <span className="uppercase font-bold text-white text-sm tracking-wider">
              ORDER IT NOW
            </span>
            <span className="text-white font-bold text-2xl">91333 46789</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 relative">
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            Home
          </Link>
          <Link
            className="uppercase tracking-wider text-white font-bold text-sm relative"
            onMouseEnter={() => toggleMenu(1)}
            onMouseLeave={() => toggleMenu(0)}
          >
            Pages
            <ul
              className={`${
                isModelOpen === 1 ? "nav-links active" : "nav-links"
              } bg-white`}
            >
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                About Us
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Our Serices
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Our team
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Book a table
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Contact Us
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Get in touch
              </li>
              <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                Coming Soon
              </li>
              {isAuthenticated && user && user.role === "admin" && (
                <NavLink to="/add/pizza">
                  <li className="tracking-wide font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 hover:font-semibold">
                    Add a pizza
                  </li>
                </NavLink>
              )}
            </ul>
          </Link>
          <Link
            className="uppercase tracking-wider text-white font-bold text-sm relative"
            onMouseEnter={() => toggleMenu(2)}
            onMouseLeave={() => toggleMenu(0)}
          >
            Menu
            <ul
              className={`${
                isModelOpen === 2 ? "nav-links active" : "nav-links"
              } h-12`}
            >
              <NavLink to="/menu">
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:font-semibold hover:text-red-600 text-gray-700">
                  All pizzas
                </li>
              </NavLink>
              <NavLink to="/resturent-menu" className="text-gray-700 ">
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:font-semibold hover:text-red-600">
                  Resturent Menu
                </li>
              </NavLink>
            </ul>
          </Link>
          <Link>
            <img src="/images/logo-light.png" alt="logo" className="h-16" />
          </Link>
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            Event
          </Link>
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            Blog
          </Link>
          {isAuthenticated ? (
            <Link className="uppercase tracking-wider text-white font-bold text-sm">
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="uppercase tracking-wider text-white font-bold text-sm"
            >
              Login
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-1 relative cursor-pointer">
            {cart && cart.items && (
              <span className="absolute -left-2 -top-1 bg-white text-red-600 font-extrabold h-4 w-4 rounded-full flex items-center justify-center text-xs">
                {cart.items.length === 0 ? 0 : cart.items.length}
              </span>
            )}
            <MopedOutlinedIcon sx={{ color: "white" }} fontSize="large" />
            <Link
              className="text-white uppercase tracking-wider font-bold text-sm"
              to="/cart"
            >
              Cart
            </Link>
          </div>
          <div
            className="flex items-center justify-center gap-1 cursor-pointer"
            onClick={handleShowSearchBar}
          >
            <SearchOutlinedIcon sx={{ color: "white" }} fontSize="large" />
            <span className="text-white uppercase tracking-wider font-bold text-sm">
              Search
            </span>
          </div>
        </div>
      </nav>
      {showSearchBar && <SearchBar onClose={() => setShowSearchBar(false)} />}
    </>
  );
};

export default BannerNav;

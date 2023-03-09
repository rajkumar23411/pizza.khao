import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBar from "./SearchBar";
const MainNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(0);

  const toggleMenu = (index) => {
    setIsModelOpen(index);
  };
  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowSearchBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="w-full flex items-center justify-between px-10 h-20">
        <div className="h-full">
          <ul className="flex items-center gap-12 h-full justify-center">
            <li>
              <img
                src="/images/logo.png"
                alt="logo"
                className="h-14 cursor-pointer"
              />
            </li>
            <li className="uppercase text-gray-700 font-bold tracking-widest h-full grid place-items-center text-xs cursor-pointer">
              Home
            </li>
            <li
              className="uppercase text-gray-700 font-bold tracking-widest relative cursor-pointer h-full grid place-items-center text-xs"
              onMouseEnter={() => toggleMenu(1)}
              onMouseLeave={() => toggleMenu(0)}
            >
              Pages
              <ul
                className={`${
                  isModelOpen === 1 ? "nav-links active" : "nav-links"
                }`}
              >
                <li className="tracking-wide font-medium text-sm">About Us</li>
                <li className="tracking-wide font-medium text-sm">
                  Our Serices
                </li>
                <li className="tracking-wide font-medium text-sm">Our team</li>
                <li className="tracking-wide font-medium text-sm">
                  Book a table
                </li>
                <li className="tracking-wide font-medium text-sm">
                  Contact Us
                </li>
                <li className="tracking-wide font-medium text-sm">
                  Get in touch
                </li>
                <li className="tracking-wide font-medium text-sm">
                  Coming Soon
                </li>
              </ul>
            </li>
            <li
              className="uppercase text-gray-700 font-bold tracking-widest relative cursor-pointer h-full grid place-items-center text-xs"
              onMouseEnter={() => toggleMenu(2)}
              onMouseLeave={() => toggleMenu(0)}
            >
              Menu
              <ul
                className={`${
                  isModelOpen === 2 ? "nav-links active" : "nav-links"
                } h-12`}
              >
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/menu">All Pizzas</Link>
                </li>
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/resturent-menu">Resturent Menu</Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => toggleMenu(3)}
              onMouseLeave={() => toggleMenu(0)}
              className="uppercase text-gray-700 font-bold tracking-widest h-full grid place-items-center text-xs cursor-pointer relative"
            >
              Shop
              <ul
                className={`${
                  isModelOpen === 3 ? "nav-links active" : "nav-links"
                } h-12`}
              >
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/menu">My Account</Link>
                </li>
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/resturent-menu">Cart</Link>
                </li>
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li className="tracking-wide font-medium text-sm">
                  <Link to="/my-order">My Orders</Link>
                </li>
              </ul>
            </li>
            <li className="uppercase text-gray-700 font-bold tracking-widest h-full grid place-items-center text-xs cursor-pointer">
              Event
            </li>
            <li className="uppercase text-gray-700 font-bold tracking-widest h-full grid place-items-center text-xs cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-12">
          <Link to="/cart">
            <div className="cursor-pointer uppercase text-xs text-gray-700 font-bold tracking-wide flex items-center justify-center gap-1">
              <MopedOutlinedIcon fontSize="medium" className="text-gray-600" />
              <span>Cart</span>
            </div>
          </Link>
          <div
            className="cursor-pointer uppercase text-xs text-gray-700 font-bold tracking-wide flex items-center justify-center gap-1"
            onClick={handleShowSearchBar}
          >
            <SearchOutlinedIcon fontSize="medium" className="text-gray-600" />
            <span>Search</span>
          </div>
        </div>
      </nav>
      {showSearchBar && <SearchBar onClose={() => setShowSearchBar(false)} />}
    </>
  );
};

export default MainNav;

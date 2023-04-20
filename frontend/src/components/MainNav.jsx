import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/actions/cartActions";
import { PagesSubMenu } from "../utils";

const MainNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(0);
  const { cart } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
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
    dispatch(getCartItems());
    window.addEventListener("scroll", handleScroll);
  }, [dispatch]);
  return (
    <>
      <nav className="w-full flex items-center justify-between px-10 h-20">
        <div className="h-full">
          <ul className="flex items-center h-full justify-center">
            <NavLink to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="h-14 cursor-pointer"
              />
            </NavLink>
            <NavLink
              to="/"
              className="uppercase text-gray-600 font-medium tracking-widest h-full grid place-items-center text-xs cursor-pointer pr-5 pl-10"
            >
              Home
            </NavLink>
            <li
              className="uppercase text-gray-600 font-medium tracking-widest relative cursor-pointer h-full grid place-items-center text-xs px-5"
              onMouseEnter={() => toggleMenu(1)}
              onMouseLeave={() => toggleMenu(0)}
            >
              Pages
              <ul
                className={`${
                  isModelOpen === 1 ? "nav-links active" : "nav-links"
                }`}
              >
                {PagesSubMenu.map((item, index) => (
                  <li
                    className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li
              className="uppercase text-gray-600 font-medium tracking-widest relative cursor-pointer h-full grid place-items-center text-xs px-5"
              onMouseEnter={() => toggleMenu(2)}
              onMouseLeave={() => toggleMenu(0)}
            >
              Menu
              <ul
                className={`${
                  isModelOpen === 2 ? "nav-links active" : "nav-links"
                } h-12`}
              >
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <NavLink to="/menu">Our popular pizzas</NavLink>
                </li>
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <NavLink to="/menu-light">Menu filter light</NavLink>
                </li>
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <NavLink to="/resturent-menu">Resturent Menu</NavLink>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => toggleMenu(3)}
              onMouseLeave={() => toggleMenu(0)}
              className="uppercase text-gray-600 font-medium tracking-widest h-full grid place-items-center text-xs cursor-pointer relative px-5"
            >
              Shop
              <ul
                className={`${
                  isModelOpen === 3 ? "nav-links active" : "nav-links"
                } h-12`}
              >
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <Link to="/account/settings">My Account</Link>
                </li>
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <Link to="/resturent-menu">Cart</Link>
                </li>
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li className="tracking-wide font-medium text-sm hover:bg-red-50 hover:text-red-600">
                  <Link to="/my-order">My Orders</Link>
                </li>
              </ul>
            </li>
            <li className="uppercase text-gray-600 font-medium tracking-widest h-full grid place-items-center text-xs cursor-pointer px-5">
              Event
            </li>
            <li className="uppercase text-gray-600 font-medium tracking-widest h-full grid place-items-center text-xs cursor-pointer px-5">
              Blog
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-12">
          <Link to="/cart">
            <div className="cursor-pointer uppercase text-xs text-gray-600 font-medium tracking-wide flex items-center justify-center gap-1 relative">
              {cart && cart.items && (
                <span className="absolute -left-3 -top-1 bg-gray-700 text-white h-4 w-4 rounded-full flex items-center justify-center text-xs">
                  {cart.items.length === 0 ? 0 : cart.items.length}
                </span>
              )}
              <MopedOutlinedIcon fontSize="medium" className="text-gray-600" />
              <span>Cart</span>
            </div>
          </Link>
          <div
            className="cursor-pointer uppercase text-xs text-gray-600 font-medium tracking-wide flex items-center justify-center gap-1"
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBar from "./SearchBar";

const BannerNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

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
        <div className="flex items-center justify-center gap-8">
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            Home
          </Link>
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            Pages
          </Link>
          <Link
            className="uppercase tracking-wider text-white font-bold text-sm"
            to="/menu"
          >
            Menu
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
          <Link className="uppercase tracking-wider text-white font-bold text-sm">
            My Orders
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-1">
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

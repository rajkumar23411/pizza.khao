import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="h-screen p-20 w-full">
      <div className="flex flex-col items-center gap-2">
        <p className="text-red-600 uppercase font-semibold text-sm tracking-wider">
          the magic of flavor
        </p>
        <h1 className="uppercase text-4xl font-roboto text-gray-600 font-semibold">
          स्वागतम् दोस्त
        </h1>
        <p className="w-1/2 text-center text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          commodi maxime debitis nam aliquid placeat minima excepturi quidem est
          iusto!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-14 pt-10">
        <div className="flex flex-col gap-2">
          <div>
            <img src="/images/asset1.jpg" alt="asset1" />
          </div>
          <h1 className="font-roboto uppercase tracking-wide text-gray-800 text-2xl font-bold">
            Order online
          </h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            quis,
          </p>
          <span className="text-golden tracking-widest uppercase font-bold text-xs font-roboto">
            <Link to="/menu">Order today</Link>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <img src="/images/asset2.jpg" alt="asset2" />
          </div>
          <h1 className="font-roboto uppercase tracking-wide text-gray-800 text-2xl font-bold">
            Our menu
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            maxime.
          </p>
          <span className="text-golden tracking-widest uppercase font-bold text-xs font-roboto">
            <Link to="resturent-menu">view menu</Link>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <img src="/images/asset3.jpg" alt="asset3" />
          </div>
          <h1 className="font-roboto uppercase tracking-wide text-gray-800 text-2xl font-bold">
            explore kitchen
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sit.
          </p>
          <span className="text-golden tracking-widest uppercase font-bold text-xs font-roboto">
            explore more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Options;

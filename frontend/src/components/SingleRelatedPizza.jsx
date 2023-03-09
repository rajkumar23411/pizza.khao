import React from "react";
import { Link } from "react-router-dom";

const SingleRelatedPizza = () => {
  return (
    <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden relative h-[25rem]">
      <Link to="/pizza/alpasto">
        <div className="pizza-image w-full flex items-center justify-center">
          <img
            src="/images/pizza-4.png"
            alt="pizza"
            className="h-60"
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-roboto text-yellow-700 uppercase font-medium tracking-wider text-base">
            Pizza AL Pesto
          </p>
          <p className="text-xl font-bold text-[#D2401E]">$45.00</p>
        </div>
      </Link>
      <div className=" w-full flex items-center justify-center gap-2 button-box">
        <span className="h-full bg-[#d2401e] flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold  text-xs tracking-widest text-white hover:bg-[#b9381b]">
          Add to cart
        </span>
        <span className="h-full bg-slate-100 flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold text-gray-800 text-xs tracking-widest hover:bg-slate-200">
          Quick view
        </span>
      </div>
    </div>
  );
};

export default SingleRelatedPizza;

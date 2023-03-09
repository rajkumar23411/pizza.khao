import React, { useState } from "react";
import QuickViewModel from "./QuickViewModel";

const SinglePizzaCard = ({ pizza }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleQuickView = (pizza) => {
    setIsModelOpen(true);
  };
  return (
    <>
      <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden relative h-[26rem]">
        <div className="pizza-image w-full flex items-center justify-center">
          <img
            src={pizza.path}
            alt={pizza.name}
            className="h-60"
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-roboto text-yellow-700 uppercase font-medium tracking-wider text-base">
            {pizza.name}
          </p>
          <p className="text-2xl font-bold text-[#D2401E]">${pizza.price}</p>
        </div>
        <div className=" w-full flex items-center justify-center gap-2 button-box">
          <span className="h-full  bg-[#d2401e] flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold  text-sm tracking-widest text-white hover:bg-[#b9381b]">
            Add to cart
          </span>
          <span
            className="h-full bg-slate-100 flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold text-gray-800 text-sm tracking-widest hover:bg-slate-200"
            onClick={() => handleQuickView(pizza)}
          >
            Quick view
          </span>
        </div>
      </div>
      {isModelOpen && (
        <QuickViewModel
          path={pizza.path}
          name={pizza.name}
          price={pizza.price}
          onClose={() => setIsModelOpen(false)}
          isModelOpen={isModelOpen}
        />
      )}
    </>
  );
};

export default SinglePizzaCard;

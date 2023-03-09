import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickViewModel from "../components/QuickViewModel";

const MenuPizzaCard = ({ pizza }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleQuickView = (pizza) => {
    setIsModelOpen(true);
  };
  return (
    <>
      <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden cursor-pointer">
        <Link to={`/pizza/${pizza.name.replace(/\s+/g, "")}`}>
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
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span className="bg-red-600 text-center py-2 px-6 cursor-pointer hover:bg-red-700 text-sm text-white uppercase font-medium font-roboto tracking-wide">
            Add to cart
          </span>
          <span
            onClick={() => handleQuickView(pizza)}
            className="bg-slate-200 text-center py-2 px-6 cursor-pointer hover:bg-slate-300 text-sm font-medium font-roboto tracking-wide text-gray-800 uppercase"
          >
            Quick View
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

export default MenuPizzaCard;

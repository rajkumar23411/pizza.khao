import React from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-center border-b-2 border-dotted gap-2 border-[#B7903C]">
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-semibold items-center justify-center"></div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center text-golden">
          Product
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center text-golden">
          Price
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center text-golden">
          Quantity
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center text-golden">
          Subtotal
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-1 text-center uppercase font-semibold items-center justify-center gap-2">
          <div className="text-sm bg-red-600 flex-1 py-2 text-white rounded-sm hover:bg-red-800  cursor-pointer">
            Remove
          </div>
          <div className="text-sm bg-blue-600 flex-1 py-2 text-white rounded-sm hover:bg-blue-800 cursor-pointer">
            Save for Later
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <img src="/images/pizza-3.png" alt="pizza" className="h-28" />
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-medium items-center justify-center text-gray-700">
          $50.00
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <div className="flex items-center justify-center w-min gap-1">
            <KeyboardArrowDownSharpIcon className="cursor-pointe" />
            <input
              type="text"
              value="1"
              className="w-8 border-2 border-gray-400 px-2 text-gray-600"
            />
            <KeyboardArrowUpSharpIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          $200.00
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-1 text-center uppercase font-semibold items-center justify-center gap-2">
          <div className="text-sm bg-red-600 flex-1 py-2 text-white rounded-sm hover:bg-red-800  cursor-pointer">
            Remove
          </div>
          <div className="text-sm bg-blue-600 flex-1 py-2 text-white rounded-sm hover:bg-blue-800 cursor-pointer">
            Save for Later
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <img src="/images/pizza-3.png" alt="pizza" className="h-28" />
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-medium items-center justify-center text-gray-700">
          $50.00
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <div className="flex items-center justify-center w-min gap-1">
            <KeyboardArrowDownSharpIcon className="cursor-pointe" />
            <input
              type="text"
              value="1"
              className="w-8 border-2 border-gray-400 px-2 text-gray-600"
            />
            <KeyboardArrowUpSharpIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          $200.00
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-1 text-center uppercase font-semibold items-center justify-center gap-2">
          <div className="text-sm bg-red-600 flex-1 py-2 text-white rounded-sm hover:bg-red-800  cursor-pointer">
            Remove
          </div>
          <div className="text-sm bg-blue-600 flex-1 py-2 text-white rounded-sm hover:bg-blue-800 cursor-pointer">
            Save for Later
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <img src="/images/pizza-3.png" alt="pizza" className="h-28" />
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-medium items-center justify-center text-gray-700">
          $50.00
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          <div className="flex items-center justify-center w-min gap-1">
            <KeyboardArrowDownSharpIcon className="cursor-pointe" />
            <input
              type="text"
              value="1"
              className="w-8 border-2 border-gray-400 px-2 text-gray-600"
            />
            <KeyboardArrowUpSharpIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 text-center uppercase text-lg tracking-wider font-bold items-center justify-center">
          $200.00
        </div>
      </div>
    </section>
  );
};

export default CartItem;

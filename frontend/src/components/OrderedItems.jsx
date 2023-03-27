import { Add, Remove } from "@mui/icons-material";
import React from "react";

const OrderedItems = () => {
  return (
    <>
      <div className="flex items-start gap-8 border-b-[1px] px-10 py-4">
        <div className="flex flex-col items-start justify-start gap-3 w-max">
          <div className="h-24">
            <img src="/images/pizza-3.png" alt="pizza" className="h-full" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center border-[1px] text-gray-600 cursor-pointer">
              <Remove />
            </span>
            <span className="h-6 flex items-center justify-center border-[1px] px-4">
              2
            </span>
            <span className="h-6 w-6 flex items-center justify-center border-[1px] text-gray-600 cursor-pointer">
              <Add />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="uppercase font-semibold text-golden tracking-wide">
            Margherita
          </p>
          <p className="text-sm text-gray-500">Size: regular</p>
          <div className="flex items-center gap-2 text-base">
            <span className="text-sm line-through text-gray-500">$25.00</span>
            <span className="font-semibold text-red-600">$19.67</span>
          </div>
          <p className="text-blue-600 font-semibold cursor-pointer mt-2">
            Remove
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderedItems;

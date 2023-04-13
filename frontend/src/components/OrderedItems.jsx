import { Add, Remove } from "@mui/icons-material";
import React from "react";

const OrderedItems = ({ items }) => {
  return items.map((item) => (
    <div className="flex items-start gap-8 border-b-[1px] px-8 py-4">
      <div className="flex flex-col items-start justify-start gap-3 w-max">
        <div className="h-24 w-24">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="h-full w-full object-cover"
          />
        </div>
        {/* <div className="flex items-center justify-center gap-1">
          <span className="h-6 w-6 flex items-center justify-center border-[1px] text-gray-600 cursor-pointer">
            <Remove />
          </span>
          <span className="h-6 flex items-center justify-center border-[1px] px-4">
            2
          </span>
          <span className="h-6 w-6 flex items-center justify-center border-[1px] text-gray-600 cursor-pointer">
            <Add />
          </span>
        </div> */}
      </div>
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col">
          <p className="uppercase font-semibold text-golden tracking-wide">
            {item.product.name}
          </p>
          <p className="text-sm text-gray-600"> {item.quantity}</p>
          <p className="text-sm text-gray-600">Size: {item.size}</p>
          <p className="text-red-600 font-semibold text-lg">
            ₹{item.quantity * item.product.prices[item.size]}
          </p>
        </div>
        <div className="text-blue-500 font-semibold cursor-pointer mt-2 uppercase hover:text-blue-700">
          Remove
        </div>
      </div>
    </div>
  ));
};

export default OrderedItems;

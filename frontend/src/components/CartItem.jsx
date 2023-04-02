import React, { useEffect, useState } from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { pizzaSize } from "../utils";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const CartItem = () => {
  return (
    <div className="flex flex-col gap-4 h-max border-b-2 py-5">
      <div className="flex items-start gap-6 h-full">
        <div className="flex items-center justify-center flex-col gap-4 h-full">
          <img alt="pizza" className="h-28" />
          <div className="flex items-center justify-between gap-4">
            <select
              className="capitalize border-2 border-gray-300 p-1 text-gray-600 rounded"
              // onChange={(e) =>
              //   handleSizeChange(
              //     item.productId._id,
              //     item.quantity,
              //     e.target.value
              //   )
              // }
            >
              {pizzaSize.map((size, i) => (
                <option value={size} key={i} className="capitalize">
                  {size}
                </option>
              ))}
            </select>
            <div className="flex gap-1 border-2 rounded py-1">
              <span
                // onClick={() =>
                //   increaseQty(item.productId._id, item.quantity, item.size)
                // }
                className="cursor-pointer"
              >
                <KeyboardArrowUpSharpIcon
                  fontSize="medium"
                  className="text-gray-600"
                />
              </span>
              <span className="px-1">1</span>
              <span
                // onClick={() =>
                //   decreaseQty(item.productId._id, item.quantity, item.size)
                // }
                className="cursor-pointer"
              >
                <KeyboardArrowDownSharpIcon
                  fontSize="medium"
                  className="text-gray-600"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between w-full h-full">
          <div className="flex flex-col gap-1">
            <span className="text-gray-800 font-semibold uppercase tracking-wider text-base">
              {/* {item.productId.name} */}
            </span>
            <span className="text-golden font-semibold">
              {/* ₹{item.productId.prices[item.size]} */}
            </span>
            <span className="capitalize text-gray-600">₹400</span>
            <span className="text-gray-600">Quantity: ₹400</span>
          </div>
          <div className="flex flex-col items-end justify-between h-40">
            <div className="text-red-600 text-xl font-semibold">₹400</div>
            <div className="flex items-center gap-4">
              <span className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer">
                <FavoriteBorderRoundedIcon fontSize="small" />
                Favourite
              </span>
              <span
                className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer"
                // onClick={() => removeCartItem(item.productId._id, item.size)}
              >
                <DeleteOutlineOutlinedIcon fontSize="small" />
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

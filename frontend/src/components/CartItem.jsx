import React, { useEffect, useState } from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { pizzaSize } from "../utils";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  getCartItems,
  updateCart,
} from "../redux/actions/cartActions";
import { useSnackbar } from "notistack";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { success, isUpdated } = useSelector((state) => state.myCart);
  const { enqueueSnackbar } = useSnackbar();

  const removeCartItem = (id, size) => {
    dispatch(deleteCartItem(id, size));
  };
  const increaseQty = (id, quantity, size) => {
    const newQty = quantity + 1;
    dispatch(updateCart(id, newQty, size));
  };
  const decreaseQty = (id, quantity, size) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCart(id, newQty, size));
    }
  };
  const handleSizeChange = (id, quantity, size) => {
    dispatch(updateCart(id, quantity, size));
  };

  useEffect(() => {
    if (isUpdated) {
      dispatch(getCartItems());
    }
    if (success) {
      enqueueSnackbar("Product removed from cart", { variant: "success" });
      dispatch(getCartItems());
    }
  }, [dispatch, success, enqueueSnackbar, isUpdated]);
  return cart.map((item, index) => (
    <div className="flex flex-col gap-4 h-max border-b-2 py-5" key={index}>
      <div className="flex items-start gap-6 h-full">
        <div className="flex items-center justify-center flex-col gap-4 h-full">
          <img src={item.productId.image} alt="pizza" className="h-28" />
          <div className="flex items-center justify-between gap-4">
            <select
              className="capitalize border-2 border-gray-300 p-1 text-gray-600 rounded"
              onChange={(e) =>
                handleSizeChange(
                  item.productId._id,
                  item.quantity,
                  e.target.value
                )
              }
            >
              {pizzaSize.map((size, i) => (
                <option value={size} key={i} className="capitalize">
                  {size}
                </option>
              ))}
            </select>
            <div className="flex gap-1 border-2 rounded py-1">
              <span
                onClick={() =>
                  increaseQty(item.productId._id, item.quantity, item.size)
                }
                className="cursor-pointer"
              >
                <KeyboardArrowUpSharpIcon
                  fontSize="medium"
                  className="text-gray-600"
                />
              </span>
              <span className="px-1">{item.quantity}</span>
              <span
                onClick={() =>
                  decreaseQty(item.productId._id, item.quantity, item.size)
                }
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
            <span className="text-gray-800 font-semibold uppercase tracking-wider text-xl">
              {item.productId.name}
            </span>
            <span className="text-golden font-semibold">
              ₹{item.productId.prices[item.size]}
            </span>
            <span className="capitalize text-gray-600">{item.size}</span>
            <span className="text-gray-600">Quantity: {item.quantity}</span>
          </div>
          <div className="flex flex-col items-end justify-between h-40">
            <div className="text-red-600 text-xl font-semibold">
              ₹{item.quantity * item.productId.prices[item.size]}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer">
                <FavoriteBorderRoundedIcon fontSize="small" />
                Favourite
              </span>
              <span
                className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer"
                onClick={() => removeCartItem(item.productId._id, item.size)}
              >
                <DeleteOutlineOutlinedIcon fontSize="small" />
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default CartItem;

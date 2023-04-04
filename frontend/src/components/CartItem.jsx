import React, { useEffect } from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { pizzaSize } from "../utils";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../redux/actions/cartActions";
import {
  ADD_TO_CART_RESET,
  REMOVE_CART_ITEM_RESET,
} from "../redux/constants/cartConstant";
import { useSnackbar } from "notistack";
const CartItem = () => {
  const { loading, cart, success, message } = useSelector(
    (state) => state.myCart
  );
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSizeChange = (id, quantity, size) => {
    dispatch(addToCart(id, quantity, size));
  };
  const increaseQty = (id, quantity, size, e) => {
    e.preventDefault();
    const newQty = quantity + 1;
    dispatch(addToCart(id, newQty, size));
  };
  const decreaseQty = (id, quantity, size, e) => {
    e.preventDefault();
    let newQty = 0;
    if (quantity > 1) {
      newQty = quantity - 1;
    }
    dispatch(addToCart(id, newQty, size));
  };
  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  };
  useEffect(() => {
    if (success) {
      dispatch({ type: ADD_TO_CART_RESET });
      dispatch(getCartItems());
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch({ type: REMOVE_CART_ITEM_RESET });
      dispatch(getCartItems());
    }
  }, [dispatch, success, enqueueSnackbar, message]);

  return loading ? (
    <div className="flex justify-center items-center h-96">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
  ) : (
    <>
      {cart &&
        cart.items &&
        cart.items.map((item) => (
          <div
            className="flex flex-col gap-4 h-max border-b-2 py-5"
            key={item.product._id}
          >
            <div className="flex items-start gap-6 h-full">
              <div className="flex items-center justify-center flex-col gap-4 h-full">
                <img src={item.product.image} alt="pizza" className="h-28" />
                <div className="flex items-center justify-between gap-4">
                  <select
                    className="capitalize border-2 border-gray-300 p-1 text-gray-600 rounded"
                    onChange={(e) =>
                      handleSizeChange(
                        item.product._id,
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
                      onClick={(e) =>
                        increaseQty(
                          item.product._id,
                          item.quantity,
                          item.size,
                          e
                        )
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
                      onClick={(e) =>
                        decreaseQty(
                          item.product._id,
                          item.quantity,
                          item.size,
                          e
                        )
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
                  <span className="text-gray-800 font-semibold uppercase tracking-wider text-base">
                    {item.product.name}
                  </span>
                  {item && item.product && item.product.prices && (
                    <span className="text-golden font-semibold">
                      ₹{item.product.prices[item.size]}
                    </span>
                  )}
                  <span className="capitalize text-gray-600">{item.size}</span>
                  <span className="text-gray-600">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className="flex flex-col items-end justify-between h-40">
                  {item.product && item.product.prices && (
                    <div className="text-red-600 text-xl font-semibold">
                      {item.quantity * item.product.prices[item.size]}
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <span className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer">
                      <FavoriteBorderRoundedIcon fontSize="small" />
                      Favourite
                    </span>
                    <span
                      className="text-base flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded cursor-pointer"
                      onClick={() => removeItem(item.product._id)}
                    >
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CartItem;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuickViewModel from "../components/QuickViewModel";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearError } from "../redux/actions/cartActions";
import { useSnackbar } from "notistack";
import { getCartItems } from "../redux/actions/cartActions";
import { ADD_TO_CART_RESET } from "../redux/constants/cartConstant";
const MenuPizzaCard = ({ pizza }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { success, error, cart } = useSelector((state) => state.myCart);
  const [handleAddtoCartStatus, setHandleAddToCartStatus] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleQuickView = () => {
    setIsModelOpen(true);
  };

  const handleAddtoCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(pizza._id, 1, "regular"));
    showMessage();
    setHandleAddToCartStatus(!handleAddtoCartStatus);
  };

  const showMessage = () => {
    if (success) {
      enqueueSnackbar("Pizza added to cart", { variant: "success" });
      dispatch({ type: ADD_TO_CART_RESET });
    }
  };
  return (
    <>
      <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden cursor-pointer">
        <Link to={`/pizza/${pizza._id}`}>
          <div className="pizza-image w-full flex items-center justify-center">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="h-60"
              draggable="false"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-roboto text-yellow-700 uppercase font-medium tracking-wider text-base">
              {pizza.name}
            </p>
            <p className="text-2xl font-bold text-[#D2401E]">
              ₹{pizza.prices.regular} - ₹{pizza.prices.extralarge}
            </p>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span
            className="bg-red-600 text-center py-2 px-6 cursor-pointer hover:bg-red-700 text-sm font-semibold text-white uppercase font-roboto tracking-wider"
            onClick={handleAddtoCart}
          >
            Add to cart
          </span>
          <span
            onClick={() => handleQuickView(pizza)}
            className="bg-slate-200 text-center py-2 px-6 cursor-pointer hover:bg-slate-300 text-sm font-semibold font-roboto tracking-wider text-gray-800 uppercase"
          >
            Quick View
          </span>
        </div>
      </div>
      {isModelOpen && (
        <QuickViewModel
          path={pizza.image}
          name={pizza.name}
          prices={pizza.prices}
          description={pizza.description}
          onClose={() => setIsModelOpen(false)}
          isModelOpen={isModelOpen}
        />
      )}
    </>
  );
};

export default MenuPizzaCard;

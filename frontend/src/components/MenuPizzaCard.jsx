import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuickViewModel from "../components/QuickViewModel";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import {
  addRemoveFromWishlist,
  getWishlist,
} from "../redux/actions/wishListAction";
import { RESET_ADD_TO_FAVOURITE } from "../redux/constants/wishListConstant";
import { ADD_TO_CART_RESET } from "../redux/constants/cartConstant";
import { addToCart, getCartItems } from "../redux/actions/cartActions";

const MenuPizzaCard = ({ pizza }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { success } = useSelector((state) => state.myCart);
  const { wishlist, message } = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const dispatch = useDispatch();

  const handleQuickView = () => {
    setIsModelOpen(true);
  };
  const handleAddtoCart = (id, count, size) => {
    dispatch(addToCart(id, count, size));
  };
  const handleAddtoFavourite = (id) => {
    dispatch(addRemoveFromWishlist(id));
  };

  const isItemInWishlist = (id) => {
    return wishlist.items?.find((item) => item.product._id === id);
  };

  useEffect(() => {
    if (success) {
      enqueueSnackbar("Pizza added to cart", { variant: "success" });
      dispatch({ type: ADD_TO_CART_RESET });
      dispatch(getCartItems());
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch({ type: RESET_ADD_TO_FAVOURITE });
    }
    dispatch(getWishlist());
  }, [success, dispatch, message, enqueueSnackbar]);
  return (
    <div className="grid grid-cols-3 place-items-center place-content-start h-full">
      {pizza &&
        pizza.map((item) => (
          <div key={item._id}>
            <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden cursor-pointer relative">
              <div
                className={`absolute top-0 right-0 font-light cursor-pointer`}
                onClick={() => handleAddtoFavourite(item._id)}
              >
                {isItemInWishlist(item._id) ? (
                  <FavoriteRoundedIcon className="text-red-500" />
                ) : (
                  <FavoriteBorderRoundedIcon className="text-gray-400" />
                )}
              </div>
              <Link to={`/pizza/${item._id}`}>
                <div className="pizza-image w-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-60"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="font-roboto text-yellow-700 uppercase font-medium tracking-wider text-base">
                    {item.name}
                  </p>
                  <p className="text-2xl font-bold text-[#D2401E]">
                    ₹{item.prices.regular} - ₹{item.prices.extralarge}
                  </p>
                </div>
              </Link>
              <div className="flex items-center justify-center gap-2">
                <span
                  className="bg-red-600 text-center py-2 px-6 cursor-pointer hover:bg-red-700 text-sm font-semibold text-white uppercase font-roboto tracking-wider"
                  onClick={() => handleAddtoCart(item._id, 1, "regular")}
                >
                  Add to cart
                </span>
                <span
                  onClick={() => handleQuickView(item)}
                  className="bg-slate-200 text-center py-2 px-6 cursor-pointer hover:bg-slate-300 text-sm font-semibold font-roboto tracking-wider text-gray-800 uppercase"
                >
                  Quick View
                </span>
              </div>
            </div>
            {isModelOpen && (
              <QuickViewModel
                path={item.image}
                name={item.name}
                prices={item.prices}
                description={item.description}
                onClose={() => setIsModelOpen(false)}
                isModelOpen={isModelOpen}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default MenuPizzaCard;

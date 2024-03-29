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
import {
  addToCart,
  clearError,
  getCartItems,
} from "../redux/actions/cartActions";

const MenuPizzaCard = ({ pizza }) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { success, error } = useSelector((state) => state.myCart);
  const { wishlist, message } = useSelector((state) => state.wishlist);
  const [modelItem, setModelItem] = useState({});
  const dispatch = useDispatch();

  const handleAddtoCart = (id, count, size) => {
    dispatch(addToCart(id, count, size));
  };
  const handleAddtoFavourite = (id) => {
    dispatch(addRemoveFromWishlist(id));
  };
  const handleClickOpen = (item) => {
    setModelItem(item);
    setOpen(true);
  };

  const isItemInWishlist = (id) => {
    return wishlist?.items?.find((item) => item.product._id === id);
  };

  useEffect(() => {
    if (success) {
      enqueueSnackbar("Pizza added to cart", { variant: "success" });
      dispatch({ type: ADD_TO_CART_RESET });
      setOpen(false);
      dispatch(getCartItems());
    }

    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch({ type: RESET_ADD_TO_FAVOURITE });
    }

    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }
    dispatch(getWishlist());
  }, [success, dispatch, error, message, enqueueSnackbar]);
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
                  <div className="w-60 h-60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      draggable="false"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-yellow-700 uppercase font-medium tracking-wider text-base">
                    {item.name}
                  </p>
                  <p className="text-xl font-medium text-[#D2401E]">
                    ₹{item.prices.regular} - ₹{item.prices.extralarge}
                  </p>
                </div>
              </Link>
              <div className="flex items-center justify-center gap-2">
                <span
                  className="bg-red-600 text-center py-2 px-6 rounded cursor-pointer hover:bg-red-700 text-sm font-normal text-white uppercase tracking-widest"
                  onClick={() => handleAddtoCart(item._id, 1, "regular")}
                >
                  Add to cart
                </span>
                <span
                  onClick={() => handleClickOpen(item)}
                  className="bg-slate-200 text-center py-2 px-6 cursor-pointer rounded hover:bg-slate-300 text-sm font-normal tracking-widest text-gray-800 uppercase"
                >
                  Quick View
                </span>
              </div>
            </div>
            {open && (
              <QuickViewModel
                pizza={modelItem}
                onClose={() => setOpen(false)}
                isItemInWishlist={isItemInWishlist(item._id)}
                wishListItems={wishlist?.items}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default MenuPizzaCard;

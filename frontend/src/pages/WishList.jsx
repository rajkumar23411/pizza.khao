import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import AccountNav from "../components/AccountNav";
import SingleWishListItem from "../components/SingleWishListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addRemoveFromWishlist,
  getWishlist,
} from "../redux/actions/wishListAction";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { RESET_ADD_TO_FAVOURITE } from "../redux/constants/wishListConstant";
import { ADD_TO_CART_RESET } from "../redux/constants/cartConstant";
import { addToCart, clearError } from "../redux/actions/cartActions";
import PageHead from "../components/PageHead";

const WishList = () => {
  const { loading, wishlist, message } = useSelector((state) => state.wishlist);
  const { success, error } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleRemoveFromWishlist = (id) => {
    dispatch(addRemoveFromWishlist(id));
  };
  const handleAddtoCart = (id, count, size) => {
    dispatch(addToCart(id, count, size));
  };
  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch({ type: RESET_ADD_TO_FAVOURITE });
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }
    if (success) {
      enqueueSnackbar("Item added to cart", { variant: "success" });
      dispatch({ type: ADD_TO_CART_RESET });
    }
    dispatch(getWishlist());
  }, [dispatch, message, error, success, enqueueSnackbar]);

  return (
    <>
      <section>
        <div>
          <MainNav />
        </div>
        <PageHead pageName={"My Account / Favourites"} />
      </section>
      <section className="flex items-start gap-4 p-20 bg-slate-50 h-screen">
        <AccountNav />
        <div className="flex-1 bg-white shadow-md p-10 flex flex-col min-h-full gap-6 rounded-md">
          <h1 className="uppercase text-golden font-semibold tracking-wider text-xl">
            Favourites ({wishlist?.items?.length})
          </h1>
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <p className="font-light text-gray-600 animate-pulse">
                Hang on! Fetching your data...
              </p>
            </div>
          ) : wishlist && wishlist.items && wishlist.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h1 className="text-gray-500 font-semibold text-xl">
                No Favourites
              </h1>
              <Link to="/menu">
                <p className="bg-red-500 text-white uppercase font-semibold tracking-wider p-3 rounded text-sm hover:bg-red-600 cursor-pointer">
                  Add items
                </p>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-8">
              {wishlist?.items?.map((item) => (
                <SingleWishListItem
                  key={item._id}
                  item={item}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                  handleAddtoCart={handleAddtoCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WishList;

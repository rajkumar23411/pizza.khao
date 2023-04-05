import { Delete } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addRemoveFromWishlist,
  getWishlist,
} from "../redux/actions/wishListAction";
import { useSnackbar } from "notistack";
import { RESET_ADD_TO_FAVOURITE } from "../redux/constants/wishListConstant";

const SingleWishListItem = ({ wishlist }) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.wishlist);
  const { enqueueSnackbar } = useSnackbar();
  const handleRemoveFromWishlist = (id) => {
    console.log("calling....");
    dispatch(addRemoveFromWishlist(id));
  };
  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch({ type: RESET_ADD_TO_FAVOURITE });
      dispatch(getWishlist());
    }
  }, [dispatch, message]);
  return (
    <>
      {wishlist?.items?.map((item) => (
        <div className="bg-slate-50 w-[70%] flex justify-between p-4">
          <Link to={`/pizza/${item.product._id}`}>
            <div className="flex items-start gap-4 rounded">
              <img src={item.product.image} alt="pizza" className="h-24" />
              <div>
                <h1 className="uppercase font-semibold text-gray-800 tracking-wider text-sm">
                  {item.product.name}
                </h1>
                <div>
                  <Rating value={item.product.ratings} size="small" />
                </div>
                <p className="text-red-600 font-semibold">{`₹${item.product.prices.regular} - ₹${item.product.prices.extralarge}`}</p>
              </div>
            </div>
          </Link>
          <Delete
            className="text-gray-300 cursor-pointer hover:text-gray-500"
            onClick={() => handleRemoveFromWishlist(item.product._id)}
          />
        </div>
      ))}
    </>
  );
};

export default SingleWishListItem;

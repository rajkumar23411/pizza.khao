import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Rating } from "@mui/material";
import { useSnackbar } from "notistack";
import {
  addNewReview,
  clearError,
  getProductDetails,
  getProductReviews,
} from "../redux/actions/productAction";

const CommentBox = ({ onClose, pizza }) => {
  const { success, error } = useSelector((state) => state.addReview);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewReview(pizza._id, Number(rating), comment));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }

    if (success) {
      enqueueSnackbar("Review has been submitted", { variant: "success" });
      onClose();
      dispatch(getProductReviews(pizza._id));
      dispatch(getProductDetails(pizza._id));
    }
  }, [dispatch, error, enqueueSnackbar, success, pizza]);
  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 right-0 z-20 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50`}
    >
      <div className="flex bg-white rounded-md relative overflow-hidden p-10 shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={reviewSubmitHandler}>
          <h1 className="text-golden uppercase font-bold font-roboto text-lg tracking-wider text-center">
            Add your review
          </h1>
          <p className="w-full text-center text-gray-500">
            Share your valuable feedback with us!
          </p>
          <div className="flex flex-col">
            <label className="text-gray-400">Your rating*</label>
            <span>
              <Rating
                value={rating}
                size="large"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                className="text-red-600"
              />
            </span>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Your review*</label>
            <textarea
              id=""
              cols="50"
              rows="3"
              className="border-2 resize-none border-gray-400 rounded pl-2 focus:border-blue-400 text-gray-700"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-red-500 py-3 uppercase font-bold tracking-wider text-white cursor-pointer hover:bg-red-700 rounded"
          />
        </form>
        <CloseIcon
          className="absolute right-3 top-3 text-gray-400 hover:text-red-600 cursor-pointer"
          fontSize="large"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default CommentBox;

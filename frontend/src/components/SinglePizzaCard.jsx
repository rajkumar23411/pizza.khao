import React, { useState } from "react";
import { Dialog } from "@mui/material";
import DialogBoxData from "./DialogBoxData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const SinglePizzaCard = ({ pizza }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddtoCart = (id, count, size) => {
    dispatch(addToCart(id, count, size));
  };
  return (
    <>
      <div className="flex flex-col w-80 py-6 gap-6 pizza-box overflow-hidden relative h-[26rem]">
        <div className="pizza-image w-full flex items-center justify-center">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="h-60"
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-roboto text-yellow-700 uppercase font-semibold tracking-wider text-lg">
            {pizza.name}
          </p>
          <p className="text-lg font-bold text-[#D2401E]">
            ₹{pizza.prices.regular} - ₹{pizza.prices.large}
          </p>
        </div>
        <div className=" w-full flex items-center justify-center gap-2 button-box">
          <span
            onClick={() => handleAddtoCart(pizza._id, 1, "regular")}
            className="h-full  bg-[#d2401e] flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold  text-sm tracking-widest text-white hover:bg-[#b9381b]"
          >
            Add to cart
          </span>
          <span
            className="h-full bg-slate-100 flex items-center cursor-pointer justify-center px-3 uppercase font-roboto font-semibold text-gray-800 text-sm tracking-widest hover:bg-slate-200"
            onClick={handleClickOpen}
          >
            Quick view
          </span>
        </div>
      </div>
      {
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
          maxWidth="lg"
        >
          <DialogBoxData pizza={pizza} onClose={handleClose} />
        </Dialog>
      }
    </>
  );
};

export default SinglePizzaCard;

import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addRemoveFromWishlist } from "../redux/actions/wishListAction";
import { addToCart } from "../redux/actions/cartActions";
import { pizzaSize } from "../utils";
import { Link } from "react-router-dom";

const QuickViewModel = ({ pizza, onClose, wishListItems }) => {
  const [size, setSize] = React.useState("");
  const dispatch = useDispatch();
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleAddtoCart = (id, count, size) => {
    dispatch(addToCart(id, count, size));
  };
  const handleAddtoFavourite = (id) => {
    dispatch(addRemoveFromWishlist(id));
  };
  const isInWishlist = wishListItems?.find(
    (item) => item.product._id === pizza._id
  );
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 right-0 z-50 flex items-center justify-center`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex bg-white w-4/5 h-[92vh] rounded-md relative overflow-hidden">
        <div className="qucikViewClose" onClick={onClose}></div>
        <div className="flex-1 flex items-center justify-center bg-gray-100 m-10">
          <img src={pizza.image} alt={pizza.name} draggable="false" />
        </div>
        <div className="flex-1 flex flex-col m-10">
          <h1 className="font-sans uppercase text-2xl font-bold text-gray-700">
            {pizza.name}
          </h1>
          <div className="flex items-center gap-4 py-4">
            <Rating precision={0.5} value={pizza.ratings} readOnly={true} />
            <div>
              {pizza.ratings === 0 ? (
                <div className="text-base text-gray-700">
                  ( No reviews yet )
                </div>
              ) : (
                <div>({pizza.numOfReviews} customer review)</div>
              )}
            </div>
          </div>
          <p className="text-xl text-red-600 font-bold">
            ₹{pizza.prices?.regular} - ₹{pizza.prices?.extralarge}
          </p>
          <p className="text-base text-gray-500 pt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            obcaecati dicta soluta tempore iure blanditiis ullam harum explicabo
            aliquid.
          </p>
          <div className="flex flex-col pt-10">
            <h1 className="uppercase font-bold text-golden">
              NUTRITIONAL VALUE PER 100G:
            </h1>
            <div className="flex pt-2">
              <span className="flex-[0.8] text-base text-gray-500">
                Calories
              </span>
              <span className="flex-1 text-red-700 font-semibold font-sans">
                800 kcal
              </span>
            </div>
            <div className="flex">
              <span className="flex-[0.8] text-base text-gray-500">
                Carbohydrates
              </span>
              <span className="flex-1 text-red-700 font-semibold font-sans">
                20 g
              </span>
            </div>
            <div className="flex ">
              <span className="flex-[0.8] text-base text-gray-500">Fats</span>
              <span className="flex-1 text-red-700 font-semibold font-sans">
                50.9 g
              </span>
            </div>
            <div className="flex">
              <span className="flex-[0.8] text-base text-gray-500">
                Protien
              </span>
              <span className="flex-1 text-red-700 font-semibold font-sans">
                120 g
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center py-6">
            <div className="text-base font-bold uppercase text-golden">
              Pick Size:
            </div>
            <div>
              <FormControl
                variant="outlined"
                sx={{ minWidth: 200 }}
                size="medium"
              >
                <InputLabel id="demo-simple-select-label">
                  Select size
                </InputLabel>
                <Select
                  value={size}
                  label="Select size"
                  onChange={handleSizeChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pizzaSize.map((size, i) => (
                    <MenuItem key={i} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          {size === "" ? (
            <div className="text-2xl text-red-600 font-bold pb-8">
              ₹{pizza.prices?.regular}
            </div>
          ) : (
            <div className="text-2xl text-red-600 font-bold pb-8">
              ₹{pizza.prices && pizza.prices[size]}
            </div>
          )}
          <div className="flex gap-2">
            <div
              onClick={() => handleAddtoCart(pizza._id, 1, size)}
              className="flex-1 text-center bg-red-600 text-white p-3 uppercase text-sm font-semibold tracking-wide cursor-pointer rounded hover:bg-red-700"
            >
              Add to cart
            </div>
            {isInWishlist ? (
              <Link
                to="/account/favourites"
                className="flex-1 text-center border-2 border-gray-300 text-gray-600 p-3 uppercase text-sm font-semibold tracking-wide cursor-pointer rounded"
              >
                Go to favourites
              </Link>
            ) : (
              <div
                onClick={() => handleAddtoFavourite(pizza._id)}
                className="flex-1 text-center bg-gray-200 text-gray-800 p-3 uppercase text-sm font-semibold tracking-wide cursor-pointer rounded hover:"
              >
                Save to Favourite
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;

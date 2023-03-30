import React, { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import HomeFooter from "../components/HomeFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PizzaInformation from "../components/PizzaInformation";
import RelatedProducts from "../components/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  getRelatedProducts,
} from "../redux/actions/productAction";
import { pizzaSize } from "../utils";
import { Rating } from "@mui/material";
import PlaceHolderCard from "../components/PlaceHolderCard";
import SinglePizzaLoader from "../components/SinglePizzaLoader";
const SinglePizza = () => {
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const {
    loading: relatedProductLoading,
    relatedProducts,
    error: relatedProductError,
  } = useSelector((state) => state.relatedProducts);

  const [price, setPrice] = useState();
  const [size, setSize] = useState("");
  const { id } = useParams();

  const handleSelectSize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "Regular") {
      setPrice(product.prices.regular);
    } else if (e.target.value === "Medium") {
      setPrice(product.prices.medium);
    } else if (e.target.value === "Large") {
      setPrice(product.prices.large);
    } else if (e.target.value === "Extra Large") {
      setPrice(product.prices.extralarge);
    }
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getRelatedProducts(id));
  }, [id, dispatch]);

  return (
    <>
      <MainNav />
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          Shop / {product && product.name}
        </h1>
      </div>
      <section className="flex flex-col p-20">
        {loading ? (
          <SinglePizzaLoader />
        ) : (
          <>
            <section className="h-screen flex gap-10">
              <div className="flex-1 flex bg-gray-100 items-center justify-center relative">
                <span className="h-20 w-20 bg-yellow-400 absolute top-4 left-4 text-lg text-white font-bold rounded-full flex items-center justify-center">
                  -14%
                </span>
                <img
                  src={product && product.image}
                  alt="pizza"
                  className="w-full h-[70%] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <p className="font-semibold text-gray-800 uppercase text-2xl font-roboto tracking-wider">
                  {product && product.name}
                </p>
                <div className="flex items-center gap-2">
                  <Rating
                    size="medium"
                    precision={0.5}
                    value={product && product.ratings ? product.ratings : 0}
                    name="controlled-rating"
                    readOnly
                  />
                  {product && product.numOfReviews === 0 ? (
                    `(No reviews yet)`
                  ) : (
                    <div className="text-gray-700">
                      ({product && product.numOfReviews} Customer review)
                    </div>
                  )}
                </div>
                <p className="flex items-center gap-6">
                  {product && product.prices && (
                    <span className="text-2xl font-semibold font-roboto text-golden">
                      ₹{product.prices.regular} - ₹{product.prices.extralarge}
                    </span>
                  )}
                </p>
                <p className=" text-gray-500 pt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima ipsum rerum, voluptatum earum provident recusandae
                  fugit dignissimos rem sint sit facere neque nesciunt porro
                  fugiat id, quisquam et! Nihil, corporis?
                </p>
                <div>
                  <h1 className="uppercase text-golden pt-4 font-bold tracking-wide">
                    Nutritional value per 100g:
                  </h1>
                  <div className="flex w-1/2 justify-between mt-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-600">Calories</span>
                      <span className="text-gray-600">Calories</span>
                      <span className="text-gray-600">Calories</span>
                      <span className="text-gray-600">Calories</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-red-600">20g</span>
                      <span className="font-bold text-red-600">20g</span>
                      <span className="font-bold text-red-600">20g</span>
                      <span className="font-bold text-red-600">20g</span>
                    </div>
                  </div>
                  <div className="pt-6 flex items-center gap-2">
                    <span className="text-golden uppercase font-bold tracking-wide">
                      Pick Size:
                    </span>
                    <div className="bg-gray-100 w-40 flex items-center justify-between h-12">
                      <select
                        className="bg-transparent appearance-none w-full text-gray-600 h-full cursor-pointer px-2"
                        onChange={handleSelectSize}
                      >
                        <option defaultValue>Select Size</option>
                        {pizzaSize.map((size, index) => (
                          <option key={index} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <ExpandMoreIcon fontSize="small" sx={{ color: "gray" }} />
                    </div>
                  </div>
                  {size && (
                    <div className="pt-6 flex items-center gap-2">
                      <span className="text-red-700 font-bold text-3xl">
                        ₹{price}
                      </span>
                    </div>
                  )}
                  <div className="mt-6 flex items-center gap-6 w-max justify-center h-12 overflow-hidden">
                    <div className="h-full flex items-center justify-between w-20 border-[1px] border-gray-700">
                      <input
                        type="number"
                        className="w-full h-full pl-2 text-xl outer"
                        value="1"
                        readOnly={true}
                      />
                      <div className="flex flex-col justify-between items-center ">
                        <KeyboardArrowUpIcon
                          className="cursor-pointer"
                          sx={{ color: "brown" }}
                        />
                        <KeyboardArrowDownIcon
                          className="cursor-pointer"
                          sx={{ color: "brown" }}
                        />
                      </div>
                    </div>
                    <div className="bg-red-600 text-white uppercase tracking-wide font-semibold h-full flex items-center justify-center px-6 hover:bg-red-700 cursor-pointer">
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {product && <PizzaInformation id={id} pizza={product} />}
          </>
        )}

        {relatedProductLoading ? (
          <div className=" w-full grid grid-cols-5 gap-4 place-items-center place-content-start h-full">
            {Array(5).fill(<PlaceHolderCard />)}
          </div>
        ) : (
          relatedProducts && <RelatedProducts product={relatedProducts} />
        )}
      </section>
      <HomeFooter />
    </>
  );
};

export default SinglePizza;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import SinglePizzaCard from "./SinglePizzaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../utils/Arrows";
import ItemSkeleton from "./ItemSkeleton";
import { ADD_TO_CART_RESET } from "../redux/constants/cartConstant";
import { useSnackbar } from "notistack";
const HomeMenu = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);
  const { success } = useSelector((state) => state.myCart);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (success) {
      enqueueSnackbar("Pizza added to cart", { variant: "success" });
      dispatch({ type: ADD_TO_CART_RESET });
    }
  }, [success, enqueueSnackbar]);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="min-h-screen pt-20">
      <div className="w-full flex items-center justify-center flex-col gap-1 pb-10">
        <h3 className="text-base uppercase tracking-wider text-[#D1411E] font-bold">
          Choose your flavor
        </h3>
        <h1 className="text-4xl uppercase font-bold text-gray-700 font-sans">
          The best pizza menu in town
        </h1>
        <p className="w-2/5 text-gray-500 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          quidem dolore iure sequi cupiditate atque? Veritatis non labore
          obcaecati consequatur?
        </p>
      </div>
      {loading ? (
        <ItemSkeleton />
      ) : (
        <Slider {...settings} className="overflow-hidden">
          {products?.map((pizza) => (
            <SinglePizzaCard pizza={pizza} key={pizza.path} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default HomeMenu;

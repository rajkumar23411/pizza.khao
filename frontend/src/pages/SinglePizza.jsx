import React, { useState } from "react";
import MainNav from "../components/MainNav";
import HomeFooter from "../components/HomeFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PizzaInformation from "../components/PizzaInformation";
import RelatedProducts from "../components/RelatedProducts";
const SinglePizza = () => {
  return (
    <>
      <MainNav />
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          Shop
        </h1>
      </div>
      <section className="flex flex-col p-20">
        <section className="h-screen flex gap-10">
          <div className="flex-1 flex bg-gray-100 items-center justify-center relative">
            <span className="h-20 w-20 bg-yellow-400 absolute top-4 left-4 text-lg text-white font-bold rounded-full flex items-center justify-center">
              -14%
            </span>
            <img
              src="/images/pizza-1.png"
              alt="pizza"
              className="w-full h-[75%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-semibold text-gray-800 uppercase text-2xl font-roboto tracking-wider">
              Liguria Pizza
            </p>
            <div className="flex items-center gap-2">
              <div>
                <StarIcon sx={{ color: "brown" }} />
                <StarIcon sx={{ color: "brown" }} />
                <StarIcon sx={{ color: "brown" }} />
                <StarHalfIcon sx={{ color: "brown" }} />
              </div>
              <div>(1 customer review)</div>
            </div>
            <p className="flex items-center gap-6">
              <span className="text-xl font-semibold font-roboto text-gray-400 line-through">
                $35.00
              </span>
              <span className="text-xl font-semibold font-roboto text-red-700">
                $30.00
              </span>
            </p>
            <p className=" text-gray-500 pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              ipsum rerum, voluptatum earum provident recusandae fugit
              dignissimos rem sint sit facere neque nesciunt porro fugiat id,
              quisquam et! Nihil, corporis?
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
                  <select className="bg-transparent appearance-none w-full text-gray-600 h-full cursor-pointer px-2">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                  </select>
                  <ExpandMoreIcon fontSize="small" sx={{ color: "gray" }} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6 w-max justify-center h-12 overflow-hidden">
                <div className="h-full flex items-center justify-between w-20 border-[1px] border-gray-700">
                  <input
                    type="number"
                    className="w-full h-full pl-2 text-xl outer"
                    value="1"
                    readOnly="true"
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
        <PizzaInformation />
        <RelatedProducts />
      </section>
      <HomeFooter />
    </>
  );
};

export default SinglePizza;

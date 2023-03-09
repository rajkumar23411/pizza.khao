import React from "react";
import MainNav from "../components/MainNav";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pizza from "../pizza";
import MenuPizzaCard from "../components/MenuPizzaCard";
import { Slider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeFooter from "../components/HomeFooter";

const Menu = () => {
  const Categories = [
    "Cheese",
    "For Kids",
    "Light",
    "Piquant",
    "Savory",
    "Sea food",
    "Sweet",
    "Veggie",
  ];
  return (
    <>
      <div>
        <MainNav />
      </div>
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          Menu
        </h1>
      </div>
      <section className="flex m-20">
        <div className="flex-[0.2]">
          <div className="flex flex-col border-b-2 border-golden border-dashed pb-10">
            <h1 className="uppercase text-golden text-lg font-roboto font-semibold tracking-wider">
              Products
            </h1>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-2">
                <img src="/images/pizza-1.png" alt="pizza" className="h-16" />
                <div className="flex justify-center flex-col">
                  <p className="uppercase text-golden font-semibold font-roboto tracking-wider">
                    LIGURIA PIZZA
                  </p>
                  <p className="flex gap-2">
                    <span className="line-through text-gray-400 font-semibold">
                      $35.00
                    </span>
                    <span className="text-red-700 font-extrabold">$30.00</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src="/images/pizza-1.png" alt="pizza" className="h-16" />
                <div className="flex justify-center flex-col">
                  <p className="uppercase text-golden font-semibold font-roboto tracking-wider">
                    LIGURIA PIZZA
                  </p>
                  <p className="flex gap-2">
                    <span className="line-through text-gray-400 font-semibold">
                      $35.00
                    </span>
                    <span className="text-red-700 font-extrabold">$30.00</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src="/images/pizza-1.png" alt="pizza" className="h-16" />
                <div className="flex justify-center flex-col">
                  <p className="uppercase text-golden font-semibold font-roboto tracking-wider">
                    LIGURIA PIZZA
                  </p>
                  <p className="flex gap-2">
                    <span className="line-through text-gray-400 font-semibold">
                      $35.00
                    </span>
                    <span className="text-red-700 font-extrabold">$30.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 border-b-2 border-golden border-dashed">
            <h1 className="uppercase text-golden text-lg font-roboto font-semibold tracking-wider">
              Product Categories
            </h1>
            <div className="flex flex-col gap-1 pt-4">
              {Categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col border-b-2 border-golden border-dashed py-10">
            <h1 className="uppercase text-golden text-lg font-roboto font-semibold tracking-wider">
              Filter by price
            </h1>
            <div className="pt-4">
              <Slider
                valueLabelDisplay="auto"
                min={0}
                max={8000}
                getAriaLabel={() => "Price range slider"}
                size="small"
                sx={{ color: "brown" }}
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="uppercase font-bold text-golden">Price:</span>
              <span className="text-red-700 font-bold">$0 - $100</span>
            </div>
          </div>
          <div className="flex flex-col py-10">
            <h1 className="uppercase text-golden text-lg font-roboto font-semibold tracking-wider">
              Search
            </h1>
            <div className="mt-4 border-[1px] p-3 border-gray-800 flex items-center justify-between">
              <input type="text" placeholder="Search Products..." />
              <button>
                <SearchIcon className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex w-full justify-between px-10">
            <div className="text-gray-500">Showing 1-12 out of 34 result </div>
            <div className="bg-gray-200 w-72 flex items-center justify-between h-14 px-4">
              <select className="bg-transparent appearance-none w-full text-gray-600 h-full">
                <option value="">Default Sorting</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by average rating</option>
                <option value="">Sort by latest</option>
                <option value="">Sort by latest</option>
                <option value="">Sort by latest</option>
              </select>
              <ExpandMoreIcon fontSize="small" />
            </div>
          </div>
          <div className="grid grid-cols-3 place-content-center place-items-center">
            {pizza.map((pizza) => (
              <MenuPizzaCard pizza={pizza} key={pizza.path} />
            ))}
          </div>
        </div>
      </section>
      <HomeFooter />
    </>
  );
};

export default Menu;

import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuPizzaCard from "../components/MenuPizzaCard";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import HomeFooter from "../components/HomeFooter";
import { Categories, sortingOptions } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ALL_PRODUCT_RESET } from "../redux/constants/productConstant";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";

const Menu = () => {
  const { loading, products, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  const [category, setCategory] = useState("");
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [price, setPrice] = useState([0, 1000]);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const setCurrentPageNo = (e, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getAllProducts(keyword, category, price, currentPage));
  }, [dispatch, keyword, category, price, currentPage]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const totalPages = Math.ceil(productsCount / resultPerPage);
  useEffect(() => {
    sortProducts();
  }, [sort]);

  const sortProducts = () => {
    const sortedProducts = [...products];

    if (sort === "Price Low to High") {
      sortedProducts.sort((a, b) => a.prices.regular - b.prices.regular);
    } else if (sort === "Price High to Low") {
      sortedProducts.sort((a, b) => b.prices.regular - a.prices.regular);
    } else if (sort === "Name A to Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "Name Z to A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "Newest first") {
      sortedProducts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } else if (sort === "Oldest first") {
      sortedProducts.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    } else if (sort === "Average Rating") {
      sortedProducts.sort((a, b) => b.ratings - a.ratings);
    }

    dispatch({ type: "ALL_PRODUCT_RESET", payload: sortedProducts });
  };

  useEffect(() => {
    sortProducts();
  }, [dispatch, keyword, category, price]);
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
                  onClick={() => setCategory(products && cat)}
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
                getAriaLabel={() => "Temperature range"}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={() => "Price range slider"}
                size="small"
                sx={{ color: "brown" }}
                value={price}
                min={0}
                max={1000}
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="uppercase font-bold text-golden">Price:</span>
              <span className="text-red-700 font-bold">
                ₹{price[0]} - ₹{price[1]}
              </span>
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
              <select
                className="bg-transparent appearance-none w-full text-gray-600 h-full"
                value={sort}
                onChange={handleSortChange}
              >
                <option defaultValue>Default Sorting</option>
                {sortingOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ExpandMoreIcon fontSize="small" />
            </div>
          </div>

          {products && products.length === 0 ? (
            <div className="flex items-center justify-center h-96 flex-col gap-5">
              <img src="/images/sad-cry.gif" alt="pizza gif" className="h-56" />
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-golden">
                  Sorry, no results found!
                </h1>
                <p className="text-base text-gray-500">
                  Please check the spelling or try searching for something else
                </p>
              </div>
              <Link
                to="/menu"
                className="bg-emerald-600 cursor-pointer uppercase font-semibold text-white p-4 text-sm rounded tracking-wider hover:bg-emerald-700"
              >
                Back to Menu
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 place-items-center place-content-start h-full">
                {products &&
                  products.map((pizza, i) => (
                    <MenuPizzaCard pizza={pizza} key={i} />
                  ))}
              </div>
              {resultPerPage < productsCount && (
                <div className="grid place-items-center ">
                  <Stack>
                    <Pagination
                      onChange={setCurrentPageNo}
                      page={currentPage}
                      count={totalPages}
                    />
                  </Stack>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <HomeFooter />
    </>
  );
};

export default Menu;

import React, { useState } from "react";
import MainNav from "../components/MainNav";
import AddIcon from "@mui/icons-material/Add";
import { LocationOn } from "@mui/icons-material";

const CheckOut = () => {
  const [viewOptions, setViewOptions] = useState(1);

  const handleViewOption = (index) => {
    setViewOptions(index);
  };
  return (
    <section className="min-h-full w-full">
      <div>
        <MainNav />
      </div>
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          Checkout
        </h1>
      </div>
      <div className="py-20 px-40 flex gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-xl uppercase font-semibold text-gray-800">
            Biling Details
          </h1>
          <div
            className="mt-6 text-lg border-b-2 border-dashed uppercase text-golden font-semibold tracking-wider flex items-center"
            onClick={() => handleViewOption(1)}
          >
            <LocationOn /> Select Address
          </div>
          <div
            className={`${
              viewOptions === 1 ? "h-max transition-[0.5s]" : "hidden h-0"
            } flex flex-col gap-6`}
          >
            <div className="flex items-start gap-6">
              <span>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-3 w-3 rounded-full"
                />
              </span>
              <span className="text-gray-700">
                Ghy, Assam, Nalbari <br /> 781339, India, 9101121717 <br />
                Hajo-Nalbari Road
              </span>
            </div>
            <div className="flex items-start gap-6">
              <span>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-3 w-3 rounded-full"
                />
              </span>
              <span className="text-gray-700">
                Ghy, Assam, Nalbari <br /> 781339, India, 9101121717 <br />
                Hajo-Nalbari Road
              </span>
            </div>
          </div>
          <div
            className={`mt-6 cursor-pointer hover:text-blue-800 ${
              viewOptions === 2
                ? "text-lg border-b-2 border-dashed uppercase text-golden font-semibold tracking-wider flex items-center"
                : "text-blue-700 font-semibold"
            }`}
            onClick={() => handleViewOption(2)}
          >
            <AddIcon /> <span>Add address</span>
          </div>
          <div
            className={`${
              viewOptions === 2 ? "block h-max" : "hidden h-0 "
            } w-full pt-6`}
          >
            <form action="#" className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm">Full Name*</label>
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm">Phone no.*</label>
                <input
                  type="number"
                  className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm">Email*</label>
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm">Country*</label>
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm">Address*</label>
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                />
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm">Zip Code*</label>
                  <input
                    type="text"
                    className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm">Town / Country*</label>
                  <input
                    type="text"
                    className="w-full border-[1px] border-gray-500 py-3 px-2 text-lg focus:border-red-600"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <span className="text-gray-600">Save this address</span>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-[0.5] flex flex-col gap-2">
          <h1 className="text-xl uppercase font-semibold text-gray-800">
            Your Items
          </h1>
          <div className="pt-8">
            <div className="flex gap-3 items-start justify-start border-b-[1px] border-gray-300 py-5">
              <div className="h-20 w-20 border-[1px] border-gray-300 grid place-items-center">
                <img
                  src="/images/pizza-5.png"
                  alt="pizza5"
                  className="h-[85%]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-gray-600 text-sm">
                  Margherita Pizza
                </p>
                <p className="flex items-center gap-2">
                  <span className="line-through font-semibold text-gray-400 text-sm">
                    $22.25
                  </span>
                  <span className="font-semibold text-red-600 text-sm">
                    $15.67
                  </span>
                </p>
                <span className="text-gray-500 text-xs">Qty: 1</span>
              </div>
            </div>
            <div className="flex gap-3 items-start justify-start border-b-[1px] border-gray-300 py-5">
              <div className="h-20 w-20 border-[1px] border-gray-300 grid place-items-center">
                <img
                  src="/images/pizza-5.png"
                  alt="pizza5"
                  className="h-[85%]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-gray-600 text-sm">
                  Margherita Pizza
                </p>
                <p className="flex items-center gap-2">
                  <span className="line-through font-semibold text-gray-400 text-sm">
                    $22.25
                  </span>
                  <span className="font-semibold text-red-600 text-sm">
                    $15.67
                  </span>
                </p>
                <span className="text-gray-500 text-xs">Qty: 1</span>
              </div>
            </div>
            <div className="flex gap-3 items-start justify-start border-b-[1px] border-gray-300 py-5">
              <div className="h-20 w-20 border-[1px] border-gray-300 grid place-items-center">
                <img
                  src="/images/pizza-5.png"
                  alt="pizza5"
                  className="h-[85%]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-gray-600 text-sm">
                  Margherita Pizza
                </p>
                <p className="flex items-center gap-2">
                  <span className="line-through font-semibold text-gray-400 text-sm">
                    $22.25
                  </span>
                  <span className="font-semibold text-red-600 text-sm">
                    $15.67
                  </span>
                </p>
                <span className="text-gray-500 text-xs">Qty: 1</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 py-10 justify-center">
            <span className="capitalize font-semibold text-gray-700 text-lg">
              Total:
            </span>
            <span className="text-red-600 font-bold text-lg">$100.67</span>
          </div>
          <div className="bg-red-500 text-center py-2 uppercase text-white tracking-wider font-semibold hover:bg-red-700 cursor-pointer">
            Proceed to payment
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;

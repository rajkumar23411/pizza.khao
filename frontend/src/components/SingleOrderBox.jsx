import React, { useState } from "react";
import ViewOrderDetailsBox from "./ViewOrderDetailsBox";

const SingleOrderBox = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOrderDetialsBox = () => {
    setIsModelOpen(true);
  };
  return (
    <div className="w-[27rem] h-max border-2 rounded p-6 m-auto">
      <div className="flex items-start justify-between border-b-2 pb-4">
        <div className="flex items-start gap-2">
          <div className="h-20">
            <img
              src="/images/pizza-5.png"
              alt="valdostana"
              className="h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="uppercase font-semibold text-gray-800">
              Fiori DI zucca
            </span>
            <span className="text-base text-gray-500">Karia, Nalbari</span>
          </div>
        </div>
        <div className="text-golden">Delivered</div>
      </div>
      <div className="pt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-wide text-gray-700 font-semibold">
            Order Id
          </span>
          <span className="text-golden font-semibold">2836483wqut21478t</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-wide text-gray-700 font-semibold">
            Order Amount
          </span>
          <span className="text-golden font-semibold">$ 45.77</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-wide text-gray-700 font-semibold">
            items
          </span>
          <div className="flex gap-1 items-center">
            <span className="text-golden font-medium">1 x Valodastana,</span>
            <span className="text-golden font-medium">1 x More E Monti</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-wide text-gray-700 font-semibold">
            Ordered on
          </span>
          <span className="text-golden font-semibold">
            10 March 2023 at 09:32 pm
          </span>
        </div>
      </div>
      <div className="pt-4 flex w-full items-end justify-end">
        <span
          onClick={handleOrderDetialsBox}
          className="border-[1px] border-red-600 text-red-600 px-4 py-2 rounded font-normal hover:bg-red-600 hover:text-white cursor-pointer"
        >
          View Details
        </span>
      </div>
      {isModelOpen && (
        <ViewOrderDetailsBox
          isModelOpen={isModelOpen}
          onClose={() => setIsModelOpen(false)}
        />
      )}
    </div>
  );
};

export default SingleOrderBox;

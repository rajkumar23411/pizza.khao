import React from "react";

const OrderPriceDetails = () => {
  return (
    <div className="p-4">
      <h1 className="text-golden font-semibold text-base uppercase tracking-wider border-b-2 border-dashed">
        Price Details
      </h1>
      <div className="flex flex-col gap-2 w-full mt-4">
        <div className="w-full flex items-end justify-between">
          <span className="text-gray-700 font-medium  text-base">
            Item total
          </span>
          <span className="text-gray-600 font-semibold">$80.67</span>
        </div>
        <div className="w-full flex items-end justify-between">
          <span className="text-gray-700 font-medium  text-base">Tax</span>
          <span className="text-gray-600">$15.67</span>
        </div>
        <div className="w-full flex items-end justify-between">
          <span className="text-gray-700 font-medium  text-base">
            Delivery Charge
          </span>
          <span className="text-gray-600">$3.67</span>
        </div>
        <div className="w-full flex items-center justify-between border-t-2 pt-2">
          <span className="text-gray-800 text-base uppercase font-semibold">
            Grand Total
          </span>
          <span className="text-gray-800 text-base font-semibold">$110.98</span>
        </div>
      </div>
    </div>
  );
};

export default OrderPriceDetails;

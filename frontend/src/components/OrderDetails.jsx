import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";

const OrderDetails = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center border-b-2 border-dashed py-2">
        <h1 className="text-golden font-semibold text-base uppercase tracking-wider">
          Order Details
        </h1>
        <p className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 hover:underline">
          <span>Download Invoice</span>
          <DescriptionIcon fontSize="small" />
        </p>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex items-center gap-1">
          <span className=" font-semibold text-gray-800 text-sm">
            Order ID:
          </span>
          <span className="text-gray-700">3i4872t73gqsy217</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="capitalize font-semibold text-gray-800 text-sm">
            order date:
          </span>
          <span className="text-gray-700">11 March 2023 at 09:30 pm</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="capitalize font-semibold text-gray-800 text-sm">
            Deliverd to:
          </span>
          <span className="text-gray-700">Karia, Nalbari, 781339</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="capitalize font-semibold text-gray-800">
            Order Status:
          </span>
          <span className="text-red-700 font-semibold">Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

import { Close } from "@mui/icons-material";
import React from "react";
import OrderDetails from "./OrderDetails";
import OrderItemBox from "./OrderItemBox";
import OrderPriceDetails from "./OrderPriceDetails";

const ViewOrderDetailsBox = ({ isModelOpen, onClose }) => {
  return (
    <>
      <section className="fixed top-0 left-0 right-0 backdrop-brightness-50 backdrop-blur-sm flex items-center justify-center min-h-screen">
        <div className=" bg-white w-[40%] relative shadow-lg rounded">
          <div
            className="absolute -right-9 -top-1 cursor-pointer text-white hover:text-red-400 transition-none"
            onClick={isModelOpen && onClose}
          >
            <Close fontSize="large" />
          </div>
          <OrderDetails />
          <div className="p-4 ">
            <h1 className="text-golden font-semibold text-base uppercase tracking-wider mb-4 border-b-2 border-dashed">
              Ordered Item
            </h1>
            <div>
              <OrderItemBox />
              <OrderItemBox />
            </div>
          </div>
          <OrderPriceDetails />
        </div>
      </section>
    </>
  );
};

export default ViewOrderDetailsBox;

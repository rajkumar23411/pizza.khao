import React from "react";

const OrderItemBox = () => {
  return (
    <div className="flex items-center justify-between border-b-2 p-4 w-full">
      <div className="flex items-start justify-center gap-4">
        <img src="/images/pizza-3.png" alt="pizza" className="h-20" />
        <div className="flex flex-col">
          <span className="uppercase font-semibold text-sm tracking-wide text-golden">
            Margherita
          </span>
          <span className="text-gray-600 font-semibold text-sm">$40.87</span>
          <span className="text-xs text-gray-500">Size: Regular</span>
          <span className="text-xs text-gray-500">Quantity: 2</span>
        </div>
      </div>
      <div className="text-base text-gray-600 font-semibold">2 x $40.89</div>
      <div className="font-semibold text-red-600">$80.79</div>
    </div>
  );
};

export default OrderItemBox;

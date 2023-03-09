import React from "react";
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import HomeFooter from "../components/HomeFooter";
const Cart = () => {
  return (
    <div className="min-h-screen w-full">
      <div>
        <MainNav />
      </div>
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide">
          CART
        </h1>
      </div>
      <section className="px-16 pt-10 flex flex-col gap-10">
        <section className="w-full">
          <div className="flex items-center justify-between">
            <div className="h-12 flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="h-full border-2 border-gray-400 pl-2"
              />
              <span className="bg-red-600 text-white uppercase h-12 text-base tracking-wider font-medium flex items-center justify-center w-max px-4 cursor-pointer hover:bg-red-700">
                Apply Coupon
              </span>
            </div>
            <Link className="bg-red-600 text-white uppercase h-12 text-base tracking-wider font-medium w-max flex items-center justify-center px-4 cursor-pointer hover:bg-red-700">
              Update Cart
            </Link>
          </div>
        </section>
        <CartItem />
        <section className="w-full">
          <h1 className="text-4xl font-roboto uppercase font-bold text-gray-800">
            Cart Total
          </h1>
          <div className="flex gap-10 py-10">
            <div className="flex flex-col gap-4">
              <div className="text-lg uppercase">Subtotal</div>
              <div className="text-lg uppercase">Shipping</div>
              <div className="text-lg uppercase">Tax</div>
              <div className="text-lg uppercase font-bold">Total</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold">$200</div>
              <div className="text-lg font-semibold">$5.00</div>
              <div className="text-lg font-semibold">$2.00</div>
              <div className="text-lg font-bold">$207.00</div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="bg-red-600 text-white font-roboto uppercase w-max p-3 tracking-wider cursor-pointer hover:bg-red-800 font-medium">
            Proceed to checkout
          </div>
        </section>
      </section>
      <HomeFooter />
    </div>
  );
};

export default Cart;

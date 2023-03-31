import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getCartItems } from "../redux/actions/cartActions";
import { useSnackbar } from "notistack";
const Cart = () => {
  const { loading, error, cart } = useSelector((state) => state.myCart);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }
    dispatch(getCartItems());
  }, [dispatch, error]);

  return (
    <>
      <section>
        <MainNav />
      </section>
      <section className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide">
          CART
        </h1>
      </section>
      {loading ? (
        <div>
          <img src="/images/pizza_loader.gif" alt="loader" />
        </div>
      ) : (
        <>
          <section className="px-10 pt-10 flex flex-col h-full">
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
          <section className="flex gap-4 p-10">
            <div className="flex-1">
              <h1 className="text-2xl font-roboto uppercase font-bold text-gray-800 mb-6">
                Cart Items
              </h1>
              {cart && <CartItem cart={cart.items} />}
            </div>
            <div className="flex-[0.6] flex items-center flex-col h-max">
              <div>
                <h1 className="text-2xl font-roboto uppercase font-bold text-gray-800">
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
                <div className="bg-red-600 text-white font-roboto uppercase w-max p-3 tracking-wider cursor-pointer hover:bg-red-800 font-medium">
                  Proceed to checkout
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Cart;

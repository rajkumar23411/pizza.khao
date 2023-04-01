import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getCartItems } from "../redux/actions/cartActions";
import { useSnackbar } from "notistack";
import HomeFooter from "../components/HomeFooter";
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
  }, [dispatch, error, enqueueSnackbar]);
  const totalPrice = cart && cart.totalPrice;
  const tax = cart && Number((cart.totalPrice / 100) * 5);
  const shipping = cart && Number(cart.totalPrice <= 300 ? 50 : 0);
  const total = Number(totalPrice + tax + shipping).toFixed(2);
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
          {cart && cart.items && cart.items.length === 0 ? (
            <div className="w-full flex items-center justify-center flex-col py-20 gap-4">
              <img
                src="/images/empty_cart.jpg"
                alt="empty_cart"
                className="h-96"
              />
              <p className="uppercase text-gray-700 font-semibold text-3xl">
                Your cart is empty
              </p>
              <Link
                to="/menu"
                className="bg-red-600 text-white rounded-sm px-4 py-2 uppercase tracking-wider text-sm cursor-pointer hover:bg-red-700"
              >
                Update Cart
              </Link>
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
                  <Link
                    to="/menu"
                    className="bg-red-600 text-white uppercase h-12 text-base tracking-wider font-medium w-max flex items-center justify-center px-4 cursor-pointer hover:bg-red-700"
                  >
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
                    <div className="flex gap-20 py-10">
                      <div className="flex flex-col gap-4">
                        <div className="text-lg uppercase">Subtotal</div>
                        <div className="text-lg uppercase">Shipping</div>
                        <div className="text-lg uppercase">Tax</div>
                        <div className="text-lg uppercase font-bold">Total</div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="text-lg font-semibold">
                          ₹{cart && cart.totalPrice}
                        </div>
                        <div className="text-lg font-semibold">₹{shipping}</div>
                        <div className="text-lg font-semibold">
                          ₹{tax.toFixed(2)}
                        </div>
                        <div className="text-lg font-bold">₹{total}</div>
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
      )}
      <HomeFooter />
    </>
  );
};

export default Cart;

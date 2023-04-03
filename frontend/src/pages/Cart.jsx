import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/actions/cartActions";
import HomeFooter from "../components/HomeFooter";
const Cart = () => {
  const { loading, cart } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

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
          MY CART
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
                    Cart Items ({cart && cart.items && cart.items.length})
                  </h1>
                  <CartItem />
                </div>
                <div className="flex-[0.6] flex items-center flex-col h-max">
                  <div>
                    <h1 className="text-2xl font-roboto uppercase font-bold text-gray-800">
                      Cart Total
                    </h1>
                    <div className="flex gap-20 py-10">
                      <div className="flex flex-col gap-4">
                        <div className="text-lg capitalize text-gray-900">
                          Subtotal
                        </div>
                        <div className="text-lg capitalize text-gray-900">
                          Shipping
                        </div>
                        <div className="text-lg capitalize text-gray-900">
                          Tax
                        </div>
                        <div className="text-lg capitalize font-bold text-red-600">
                          Total
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="text-lg text-gray-700">
                          ₹
                          {cart &&
                            cart.totalPrice &&
                            cart.totalPrice.toFixed(2)}
                        </div>
                        {shipping === 0 ? (
                          <div className="text-lg text-gray-700 flex items-center justify-center gap-2">
                            <span className="line-through text-gray-700">
                              ₹50
                            </span>
                            <span className="text-green-600 text-sm font-semibold">
                              Free Shipping
                            </span>
                          </div>
                        ) : (
                          <div className="text-lg text-gray-700">
                            ₹{shipping}
                          </div>
                        )}
                        <div className="text-lg text-gray-700">
                          ₹{cart && tax.toFixed(2)}
                        </div>
                        <div className="text-lg font-bold text-red-600">
                          ₹{total}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-green-600 text-center text-white rounded-lg py-3 uppercase font-semibold text-sm tracking-wider hover:bg-green-700 cursor-pointer">
                        Proceed to checkout
                      </div>
                      <div className="text-center text-blue-600 rounded-lg py-3 uppercase font-semibold text-sm tracking-wider  border-2 border-blue-600 hover:text-blue-700 hover:border-blue-700 cursor-pointer">
                        Continue Shopping
                      </div>
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

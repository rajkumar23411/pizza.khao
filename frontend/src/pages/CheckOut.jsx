import React, { useEffect, useRef, useState } from "react";
import MainNav from "../components/MainNav";
import OrderedItems from "../components/OrderedItems";
import AddressForm from "../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import CheckoutLoginForm from "../components/CheckoutLoginForm";
import { myAddresses } from "../redux/actions/addressAction";
import { Radio } from "@mui/material";
const CheckoutStep = (props) => {
  return (
    <div className="bg-white shadow-sm w-full">
      <div
        onClick={props.onClick}
        className={`w-full ${props.active && "bg-red-600"}`}
      >
        <div className="flex items-center gap-6 px-10 py-3 ">
          <p
            className={`h-6 w-6 flex items-center justify-center font-semibold ${
              props.active ? "text-red-700" : "text-gray-600"
            }  rounded bg-slate-100`}
          >
            {props.stepNumber}
          </p>
          <p
            className={`uppercase tracking-wider text-gray-800 font-semibold ${
              props.active && "text-white"
            }`}
          >
            {props.title}
          </p>
        </div>
      </div>
      <div className={props.body && "px-10 py-3"}>
        {props.body && props.body}
      </div>
    </div>
  );
};
const Address = ({ address, confirmDeliveryAddress, selectAddress }) => {
  return (
    <div
      className={`flex flex-col gap-6 ${address.length > 1 && "border-b-2"}`}
    >
      <div className="flex items-start justify-start gap-6">
        <Radio onClick={() => selectAddress(address)} />
        <div className="flex flex-col gap-4">
          <div className="flex gap-5">
            <p className="text-gray-800 font-semibold">{address.name}</p>
            <p className="text-gray-800 font-semibold">{address.contact}</p>
          </div>
          <div className="text-gray-800">
            {address.locality}, {address.address}, {address.landMark},{" "}
            {address.alternateContact} <br /> {address.state} -{" "}
            {address.pinCode}
          </div>
          {address.selected && (
            <button
              className="text-red-500 border-2 border-red-500 font-medium hover:bg-red-500 hover:text-white cursor-pointer w-max px-4 py-1 rounded-sm"
              onClick={() => confirmDeliveryAddress(address)}
            >
              Deliver here
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
const CheckOut = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.myAddresses);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelctedAddress] = useState({});
  const [address, setAddress] = useState([]);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [selectPaymentOption, setSelectPaymentOption] = useState("");

  const totalPrice = cart?.totalPrice;
  const tax = cart && Number((cart.totalPrice / 100) * 5);
  const shipping = cart && Number(cart.totalPrice <= 300 ? 50 : 0);
  const total = Number(totalPrice + tax + shipping).toFixed(2);

  const selectAddress = (adrs) => {
    const address = addresses.map((adr) =>
      adr._id === adrs._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(address);
  };

  const confirmDeliveryAddress = (addr) => {
    setConfirmAddress(true);
    setSelctedAddress(addr);
    setOrderSummary(true);
  };

  const proceedNext = () => {
    setOrderSummary(false);
    setOrderConfirmed(true);
    setShowOrderSummary(true);
    setPaymentOption(true);
  };
  const confirmOrder = () => {
    setPaymentOption(false);
    if (paymentOption === "cod") {
      alert("Order Confirmed");
    }
    if (paymentOption === "online") {
      //do further process
    }
  };
  useEffect(() => {
    dispatch(myAddresses());
  }, []);

  useEffect(() => {
    const address = addresses.map((adr) => ({ ...adr, selected: false }));
    setAddress(address);
  }, [addresses]);
  return (
    <>
      <MainNav />
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          CheckOut
        </h1>
      </div>
      <div className="min-h-screen w-full bg-slate-50 py-20 px-40 flex gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <CheckoutStep
            stepNumber={1}
            title="Login"
            active={!isAuthenticated}
            body={
              isAuthenticated ? (
                <div className="flex items-center gap-4 font-semibold">
                  <span className="capitalize">
                    {user.firstname} {user.lastname}
                  </span>
                  <span>{user.contact}</span>
                </div>
              ) : (
                <CheckoutLoginForm />
              )
            }
          />
          <CheckoutStep
            stepNumber={2}
            title="Delivery Address"
            active={!confirmAddress && isAuthenticated}
            body={
              confirmAddress
                ? selectedAddress && (
                    <div className="flex flex-col gap-2 pl-12">
                      <p className="text-gray-700 font-semibold">
                        {selectedAddress.name} - {selectedAddress.contact}
                      </p>
                      <p className="text-gray-600">
                        {selectedAddress.locality}, {selectedAddress.address},{" "}
                        {selectedAddress.landMark},{" "}
                        {selectedAddress.alternateContact} <br />{" "}
                        {selectedAddress.state} - {selectedAddress.pinCode}
                      </p>
                    </div>
                  )
                : address.map((address) => (
                    <Address
                      address={address}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      selectAddress={selectAddress}
                    />
                  ))
            }
          />
          <CheckoutStep
            stepNumber={3}
            title="ORDER SUMMARY"
            active={orderSummary}
            body={
              <>
                {orderSummary ? (
                  <>
                    <OrderedItems items={cart.items} />
                    <div className="mt-4 flex items-center justify-end">
                      <button
                        className="text-white bg-green-600 font-medium capitalize hover:bg-green-700 cursor-pointer w-max px-4 py-2 rounded-sm"
                        onClick={proceedNext}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                ) : null}
                {showOrderSummary && (
                  <div className="flex-col gap-6 flex">
                    {cart.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-6 px-10"
                      >
                        <div className="h-24 w-24">
                          <img
                            src={item.product.image}
                            alt={item.product.image}
                            className="h-full w-full"
                          />
                        </div>
                        <div className="leading-5">
                          <p className="text-gray-800 font-semibold uppercase tracking-wide">
                            {item.product.name}
                          </p>
                          <p className="capitalize text-gray-600">
                            {item.size}
                          </p>
                          <p className="text-gray-600">{item.quantity}</p>
                          <p className="font-semibold text-red-600 text-lg">
                            ₹{item.quantity * item.product.prices[item.size]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            }
          />
          <CheckoutStep
            stepNumber={4}
            title="Payment Options"
            active={paymentOption}
            body={
              paymentOption ? (
                <div className="flex flex-col gap-4 pl-12">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      className="h-4 w-4"
                      onChange={(e) => setSelectPaymentOption(e.target.value)}
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      className="h-4 w-4"
                      onChange={(e) => setSelectPaymentOption(e.target.value)}
                    />
                    <label htmlFor="online">Online Payment</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="wallet"
                      className="h-4 w-4"
                      onChange={(e) => setSelectPaymentOption(e.target.value)}
                    />
                    <label htmlFor="wallet">Wallet</label>
                  </div>
                  {selectPaymentOption !== "" && (
                    <button
                      className="bg-purple-600 font-medium uppercase text-white  py-2 rounded-sm w-max px-4 mt-4 mx-auto hover:bg-purple-700"
                      onClick={confirmOrder}
                    >
                      Confirm Order
                    </button>
                  )}
                </div>
              ) : null
            }
          />
        </div>
        <div className="flex-[0.5] bg-white h-max shadow-md">
          <h1 className="uppercase font-semibold tracking-wide text-golden w-full border-b-2 border-golden border-dashed px-4 py-2">
            Price Details
          </h1>
          <div className="flex flex-col gap-2 border-b-[1px] p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Price ({cart?.items.length})
              </span>
              <span className="text-gray-800 font-semibold">
                ₹{totalPrice?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Charge</span>
              <span className="text-gray-800 font-semibold">
                ₹{shipping?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800 font-semibold">
                ₹{tax?.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b-[1px]">
            <span className="text-lg font-semibold text-gray-800">
              Total Payable:
            </span>
            <span className="text-red-600 font-semibold text-lg">₹{total}</span>
          </div>
          <div className="flex justify-between items-center p-4 text-golden font-semibold">
            *Your total savings in this order is $45.98
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

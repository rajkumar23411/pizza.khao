import React, { useEffect, useRef, useState } from "react";
import MainNav from "../components/MainNav";
import OrderedItems from "../components/OrderedItems";
import AddressForm from "../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import CheckoutLoginForm from "../components/CheckoutLoginForm";
import { myAddresses } from "../redux/actions/addressAction";
const CheckoutStep = (props) => {
  return (
    <div className="bg-white shadow-sm w-full">
      <div
        onClick={props.onClick}
        className={`w-full ${props.active && "bg-red-600"}`}
      >
        <div className="flex items-center gap-6 px-10 py-3 ">
          <p className="h-6 w-6 flex items-center justify-center font-semibold text-gray-600 rounded bg-slate-100 ">
            {props.stepNumber}
          </p>
          <p className="uppercase tracking-wider text-gray-800 font-semibold">
            {props.title}
          </p>
        </div>
      </div>
      <div className="px-10 py-3">{props.body && props.body}</div>
    </div>
  );
};
const Address = () => {
  return (
    <div>
      <p>{}</p>
    </div>
  );
};
const CheckOut = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.myAddresses);
  const [confirmAddress, setConfirmAddress] = useState(false);

  useEffect(() => {
    dispatch(myAddresses());
  }, [address]);
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
          <CheckOut
            stepNumber={2}
            title="Delivery Address"
            active={!confirmAddress && isAuthenticated}
            body={
              confirmAddress
                ? null
                : address?.map((adr) => <Address address={adr} />)
            }
          />
          <div className="flex bg-white gap-4 cursor-pointer shadow-md flex-col">
            <div className="flex items-center gap-4 bg-red-600 px-10 py-3">
              <div className="h-6 w-6 bg-slate-100 rounded-sm flex items-center justify-center">
                <span className="text-red-600 font-semibold">3</span>
              </div>
              <span className="text-white font-semibold uppercase tracking-wide">
                Order Summary
              </span>
            </div>
            <div className="w-full flex gap-6 flex-col">
              <OrderedItems />
              <OrderedItems />
              <OrderedItems />
              <OrderedItems />
            </div>
          </div>
          <div className="flex items-center bg-white px-10 py-3 gap-4 cursor-pointer shadow-md">
            <div className="h-6 w-6 bg-slate-100 rounded-sm flex items-center justify-center">
              <span className="text-red-600 font-semibold">4</span>
            </div>
            <span className="text-red-600 font-semibold uppercase tracking-wide">
              Payment options
            </span>
          </div>
        </div>
        <div className="flex-[0.5] bg-white h-max shadow-md">
          <h1 className="uppercase font-semibold tracking-wide text-golden w-full border-b-2 border-golden border-dashed px-4 py-2">
            Price Details
          </h1>
          <div className="flex flex-col gap-2 border-b-[1px] p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Price (4 items)</span>
              <span className="text-gray-800 font-semibold">$ 190.67</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Charge</span>
              <span className="text-gray-800 font-semibold">$ 5.34</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b-[1px]">
            <span className="text-lg font-semibold text-gray-800">
              Total Payable:
            </span>
            <span className="text-red-600 font-semibold text-lg">$ 400.56</span>
          </div>
          <div className="flex justify-between items-center p-4 text-golden font-semibold">
            *Your total savings in this order is $45.98
          </div>
        </div>
      </div>
    </>
  );
};
const DeliverButton = () => {
  return (
    <div className="bg-red-500 text-white uppercase w-max text-sm tracking-wider px-4 py-2 rounded-sm font-semibold mt-4 hover:bg-red-600 cursor-pointer">
      Deliver here
    </div>
  );
};
export default CheckOut;

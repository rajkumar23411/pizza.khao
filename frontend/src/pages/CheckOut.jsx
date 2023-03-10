import React, { useRef, useState } from "react";
import MainNav from "../components/MainNav";
import AddIcon from "@mui/icons-material/Add";
import { Done, LocationOn } from "@mui/icons-material";
import OrderedItems from "../components/OrderedItems";
import AddressForm from "../components/AddressForm";
const CheckOut = () => {
  const [showDeliverButton, setShowDeliverButton] = useState();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showOrderedItems, setShowOrderedItems] = useState(false);
  const radioRef = useRef(true);
  const handleOptionChange = (index) => {
    setShowDeliverButton(index);
  };
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
          <div className="flex gap-6 items-start justify-start bg-white px-10 py-5 shadow-md">
            <div className="h-6 w-6 bg-slate-100 rounded-sm flex items-center justify-center">
              <span className="text-red-600 font-semibold">1</span>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex items-center gap-3">
                <span className="uppercase text-gray-500 font-semibold">
                  login
                </span>
                <span>
                  <Done fontSize="small" className="text-blue-600" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Rajkumar Kalita</span>
                <span>9101121717</span>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <div className="bg-white">
              <div className="bg-red-600 px-10 py-3 flex gap-6">
                <span className="h-6 w-6 bg-slate-100 text-red-600 font-semibold flex items-center justify-center rounded-sm">
                  2
                </span>
                <span className="uppercase font-semibold text-white tracking-wide">
                  Delivery Address
                </span>
              </div>
              <div className="flex px-10 py-4 gap-6 border-b-[1px]">
                <div>
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="address"
                    onChange={() => {
                      handleOptionChange(1);
                      setShowAddressForm(false);
                    }}
                    ref={radioRef}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Rajkumar Kalita</span>
                    <span className="font-semibold">9101121717</span>
                  </div>
                  <div className="text-gray-600">
                    Karia, Hajo-Nalbari Road, Near Shirmanta Sankardev Vidalay,
                    Nalbari <br />
                    Assam - 781339
                  </div>
                  {showDeliverButton === 1 && <DeliverButton />}
                </div>
              </div>
              <div className="flex px-10 py-4 gap-6 border-b-[1px]">
                <div>
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="address"
                    onChange={() => {
                      handleOptionChange(2);
                      setShowAddressForm(false);
                    }}
                    ref={radioRef}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Rajkumar Kalita</span>
                    <span className="font-semibold">9101121717</span>
                  </div>
                  <div className="text-gray-600">
                    Karia, Hajo-Nalbari Road, Near Shirmanta Sankardev Vidalay,
                    Nalbari <br />
                    Assam - 781339
                  </div>
                  {showDeliverButton === 2 && <DeliverButton />}
                </div>
              </div>
              <div className="flex px-10 py-4 gap-6 border-b-[1px]">
                <div>
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="address"
                    onChange={() => {
                      handleOptionChange(3);
                      setShowAddressForm(false);
                    }}
                    ref={radioRef}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Rajkumar Kalita</span>
                    <span className="font-semibold">9101121717</span>
                  </div>
                  <div className="text-gray-600">
                    Karia, Hajo-Nalbari Road, Near Shirmanta Sankardev Vidalay,
                    Nalbari <br />
                    Assam - 781339
                  </div>
                  {showDeliverButton === 3 && <DeliverButton />}
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="flex flex-col w-full px-10 py-4">
                <div className="flex justify-between">
                  <div
                    className="flex items-center  gap-4 cursor-pointer"
                    onClick={() => {
                      radioRef.current.checked = false;
                      setShowAddressForm(true);
                      handleOptionChange(0);
                    }}
                  >
                    <AddIcon className="text-blue-600" fontSize="small" />
                    <span className="text-blue-600 font-semibold">
                      Add a new address
                    </span>
                  </div>
                  <div
                    className={`uppercase text-red-500 font-semibold tracking-wide cursor-pointer hover:text-red-700 ${
                      showAddressForm === true ? "block" : "hidden"
                    }`}
                    onClick={() => setShowAddressForm(false)}
                  >
                    Cancel
                  </div>
                </div>
                {showAddressForm && (
                  <div className="w-full bg-white">
                    <AddressForm />
                  </div>
                )}
              </div>
            </div>
          </div>
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

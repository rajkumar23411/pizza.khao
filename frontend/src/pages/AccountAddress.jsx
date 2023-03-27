import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import AccountNav from "../components/AccountNav";
import AddressBox from "../components/AddressBox";
import AddressForm from "../components/AddressForm";
import MainNav from "../components/MainNav";

const AccountAddress = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  return (
    <>
      <section>
        <div>
          <MainNav />
        </div>
        <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
          <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
            My Account
          </h1>
        </div>
      </section>
      <section className="flex items-start gap-4 p-20 bg-slate-50 h-screen">
        <AccountNav />
        <div className="flex-1 bg-white shadow-md p-10 flex flex-col min-h-full gap-6">
          <h1 className="uppercase text-golden font-semibold tracking-wider text-xl">
            Manage Address
          </h1>

          <div className="border-[1px] flex flex-col">
            <div
              className={`flex items-center justify-between ${
                showAddressForm ? "px-8 py-2" : "p-2"
              }`}
            >
              <div
                className={`flex items-center gap-4 border-gray-300 cursor-pointer`}
                onClick={() => setShowAddressForm(true)}
              >
                {showAddressForm === false && <Add className="text-blue-600" />}
                <span
                  className={`tracking-wide text-blue-600 font-semibold uppercase`}
                >
                  Add a new address
                </span>
              </div>
              {showAddressForm && (
                <div
                  onClick={() => setShowAddressForm(false)}
                  className={`cursor-pointer text-red-600 font-semibold capitalize`}
                >
                  Cancel
                </div>
              )}
            </div>

            {showAddressForm && <AddressForm />}
          </div>

          <div className="flex flex-col items-center gap-4 border-[1px] border-gray-300 w-full border-b-[1px]">
            <AddressBox />
            <AddressBox />
            <AddressBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountAddress;

import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountNav from "../components/AccountNav";
import AddressBox from "../components/AddressBox";
import AddressForm from "../components/AddressForm";
import MainNav from "../components/MainNav";
import { myAddresses } from "../redux/actions/addressAction";
import { useSnackbar } from "notistack";

const AccountAddress = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { loading, addresses } = useSelector((state) => state.myAddresses);
  const { success, error } = useSelector((state) => state.newAddress);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (success) {
      enqueueSnackbar("Address added successfully", { variant: "success" });
      setShowAddressForm(false);
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
    dispatch(myAddresses());
  }, [dispatch, success, error, enqueueSnackbar]);
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

          <div className="flex flex-col">
            <div
              className={`flex items-center justify-between ${
                showAddressForm
                  ? "bg-none"
                  : "bg-red-600 w-max rounded hover:bg-red-700"
              }  ${showAddressForm ? "px-8 py-2" : "p-2"}`}
            >
              <div
                className={`flex items-center gap-2 cursor-pointer`}
                onClick={() => setShowAddressForm(true)}
              >
                {showAddressForm === false && <Add className="text-white" />}
                <span
                  className={`tracking-wide ${
                    showAddressForm ? "text-gray-700" : "text-white"
                  } font-semibold uppercase`}
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

            {showAddressForm && <AddressForm button={"Save Address"} />}
          </div>

          {addresses.length === 0 ? (
            <div
              className={`h-96 w-full ${
                showAddressForm ? "hidden" : "flex"
              } items-center justify-center`}
            >
              <p className="text-gray-600 text-lg">
                You have not any addresses to show yet
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 border-gray-300 w-full">
              {addresses &&
                addresses.map((address) => (
                  <AddressBox key={address._id} address={address} />
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AccountAddress;

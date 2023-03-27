import React, { useState } from "react";
import AccountNav from "../components/AccountNav";
import MainNav from "../components/MainNav";
import PromptModel from "../components/PromptModel";
import { useSelector } from "react-redux";
const MyAccount = () => {
  const { user } = useSelector((state) => state.user);

  const [readOnly, setReadOnly] = useState({
    name: true,
    email: true,
    contact: true,
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [phoneNo, setPhoneNo] = useState(user.contact);
  const [email, setEmail] = useState(user.email);

  console.log(user.firstname);

  const handleEditClick = (filed) => {
    setReadOnly({ ...readOnly, [filed]: false });
  };
  const handleCancelClick = (filed) => {
    setReadOnly({ ...readOnly, [filed]: true });
  };

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
            Personal Information
          </h1>
          <div className="max-w-xl flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full items-center justify-between">
                <label className="text-gray-500 text-base">Name</label>
                {readOnly.name ? (
                  <div
                    onClick={() => handleEditClick("name")}
                    className={`uppercase text-base text-blue-500 font-semibold cursor-pointer`}
                  >
                    Edit
                  </div>
                ) : (
                  <div
                    onClick={() => handleCancelClick("name")}
                    className={`uppercase text-base text-red-500 font-semibold cursor-pointer`}
                  >
                    Cancel
                  </div>
                )}
              </div>
              <div className="flex w-full items-center justify-between gap-6">
                <div
                  className={`flex items-center w-full justify-center h-12 rounded border-2 ${
                    readOnly.name ? "border-blue-100" : "border-blue-300"
                  } overflow-hidden`}
                >
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    readOnly={readOnly.name}
                    className={`h-full ${
                      readOnly.name
                        ? "bg-slate-100 text-gray-600"
                        : "bg-transparent text-gray-700"
                    } w-full px-4`}
                    placeholder="Your first and middle name here*"
                  />
                </div>
                <div
                  className={`flex items-center w-full justify-center h-12 rounded border-2 ${
                    readOnly.name ? "border-blue-100" : "border-blue-300"
                  } overflow-hidden`}
                >
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    readOnly={readOnly.name}
                    className={`h-full ${
                      readOnly.name
                        ? "bg-slate-100 text-gray-600"
                        : "bg-transparent text-gray-700"
                    } w-full px-4`}
                    placeholder="Your last name here*"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full items-center justify-between">
                <label className="text-gray-500 text-base">Email</label>
                {readOnly.email ? (
                  <div
                    onClick={() => handleEditClick("email")}
                    className={`uppercase text-base text-blue-500 font-semibold cursor-pointer`}
                  >
                    Edit
                  </div>
                ) : (
                  <div
                    onClick={() => handleCancelClick("email")}
                    className={`uppercase text-base text-red-500 font-semibold cursor-pointer`}
                  >
                    Cancel
                  </div>
                )}
              </div>
              <div
                className={`flex items-center w-full justify-center h-12 rounded border-2 ${
                  readOnly.email ? "border-blue-100" : "border-blue-300"
                } overflow-hidden`}
              >
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={readOnly.email}
                  className={`h-full ${
                    readOnly.email
                      ? "bg-slate-100 text-gray-600"
                      : "bg-transparent text-gray-700"
                  } w-full px-4`}
                  placeholder="Your email id here*"
                />
              </div>
            </div>
          </div>
          <div className="max-w-xl flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full items-center justify-between">
                <label className="text-gray-500 text-base">
                  Contact number
                </label>
                {readOnly.contact ? (
                  <div
                    onClick={() => handleEditClick("contact")}
                    className={`uppercase text-base text-blue-500 font-semibold cursor-pointer`}
                  >
                    Edit
                  </div>
                ) : (
                  <div
                    onClick={() => handleCancelClick("contact")}
                    className={`uppercase text-base text-red-500 font-semibold cursor-pointer`}
                  >
                    Cancel
                  </div>
                )}
              </div>
              <div
                className={`flex items-center w-full justify-center h-12 rounded border-2 ${
                  readOnly.contact ? "border-blue-100" : "border-blue-300"
                } overflow-hidden`}
              >
                <input
                  type="number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  readOnly={readOnly.contact}
                  className={`h-full ${
                    readOnly.contact
                      ? "bg-slate-100 text-gray-600"
                      : "bg-transparent text-gray-700"
                  } w-full px-4`}
                  placeholder="Your phone number here*"
                />
              </div>
            </div>
          </div>
          <div className="max-w-xl flex flex-col gap-4">
            <label className="text-gray-500 text-base">Joined on</label>
            <span
              className={`flex items-center w-full px-4 h-12 rounded border-2 border-blue-100" overflow-hidden bg-slate-50 text-gray-600`}
            >
              28 July 2001
            </span>
          </div>
          <div
            className="text-red-500 font-semibold cursor-pointer hover:text-red-600"
            onClick={() => setShowPrompt(true)}
          >
            Delete Account
          </div>
          {showPrompt && (
            <div className="h-screen w-screen top-0 left-0 right-0 fixed flex items-center justify-center backdrop-blur-md backdrop-brightness-50">
              <PromptModel
                displayText={"Are you sure you want to leave?"}
                buttonText={"Yes, Confirm"}
                caneclText={"No, Let me stay"}
                onClose={() => setShowPrompt(false)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyAccount;

import React, { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditAddressForm from "./EditAddressForm";
import PromptModel from "./PromptModel";

const AddressBox = () => {
  const [showMenu, setShowMenu] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleAddressModel = () => {
    setIsModelOpen(true);
  };
  const toggleMenu = (index) => {
    setShowMenu(index);
  };
  const togglePrompt = () => {
    setShowPrompt(true);
  };
  return (
    <div className="w-full flex flex-col border-b-2">
      <div className="flex items-center justify-between p-4">
        <p className="flex items-center gap-4">
          <span className="font-semibold text-gray-800">Rajkumar Kalita</span>
          <span className="font-semibold text-gray-800">9101121717</span>
        </p>
        <div className="cursor-pointer" onMouseEnter={() => toggleMenu(1)}>
          <div className="relative">
            <DragIndicatorIcon className="text-gray-600" />
            <div
              className={`absolute bg-white shadow-md right-0 top-0 w-20 ${
                showMenu === 1 ? "block" : "hidden"
              }`}
              onMouseEnter={() => toggleMenu(1)}
              onMouseLeave={() => toggleMenu(0)}
            >
              <p
                className="p-2 hover:bg-slate-50 hover:text-blue-600 cursor-pointer"
                onClick={handleAddressModel}
              >
                Edit
              </p>
              <p
                className="p-2 hover:bg-slate-50 hover:text-blue-600 cursor-pointer"
                onClick={togglePrompt}
              >
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 w-[65%] p-4">
        Tripura road, jayanagar (Khanapara), Jwaharnagar Housefeed Apartment,
        Guwahati, Assam - <spa>781022</spa>
      </p>
      {isModelOpen && (
        <div className="h-screen w-screen backdrop-blur-sm backdrop-brightness-50 top-0 left-0 right-0 fixed flex items-center justify-center">
          <div className="w-1/2 bg-white rounded-md shadow-md">
            <EditAddressForm onClose={() => setIsModelOpen(false)} />
          </div>
        </div>
      )}
      {showPrompt && (
        <div className="h-screen w-screen top-0 left-0 right-0 fixed flex items-center justify-center backdrop-blur-md backdrop-brightness-50">
          <PromptModel
            displayText={"Are you sure you want to delete this address?"}
            buttonText={"Yes, Delete"}
            caneclText={"Cancel"}
            onClose={() => setShowPrompt(false)}
          />
        </div>
      )}
    </div>
  );
};

export default AddressBox;

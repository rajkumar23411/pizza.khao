import React from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../redux/actions/addressAction";
const PromptModel = ({ displayText, buttonText, onClose, caneclText, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAddress(id));
    onClose();
  };
  return (
    <div className="bg-white rounded-md shadow-lg p-8 flex flex-col gap-10">
      <p className="text-gray-700 font-semibold text-lg">{displayText}</p>
      <div className="flex items-center flex-col gap-3">
        <span
          className="bg-red-500 text-white px-4 py-2 rounded-sm font-medium cursor-pointer hover:bg-red-600"
          onClick={handleDelete}
        >
          {buttonText}
        </span>
        <span
          className="text-blue-600 font-semibold cursor-pointer"
          onClick={onClose}
        >
          {caneclText}
        </span>
      </div>
    </div>
  );
};

export default PromptModel;

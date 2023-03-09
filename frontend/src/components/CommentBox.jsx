import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CloseIcon from "@mui/icons-material/Close";
const CommentBox = ({ onClose }) => {
  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 right-0 z-20 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50`}
    >
      <div className="flex bg-white rounded-md relative overflow-hidden p-10 shadow-lg">
        <form action="#" className="flex flex-col gap-4">
          <h1 className="text-golden uppercase font-bold font-roboto text-lg tracking-wider text-center">
            Add your review
          </h1>
          <div className="flex flex-col">
            <label className="text-gray-400">Your rating*</label>
            <span>
              <StarOutlineIcon sx={{ color: "yellow" }} fontSize="medium" />
              <StarOutlineIcon sx={{ color: "yellow" }} fontSize="medium" />
              <StarOutlineIcon sx={{ color: "yellow" }} fontSize="medium" />
              <StarOutlineIcon sx={{ color: "yellow" }} fontSize="medium" />
              <StarOutlineIcon sx={{ color: "yellow" }} fontSize="medium" />
            </span>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Your review*</label>
            <textarea
              id=""
              cols="50"
              rows="3"
              className="border-2 resize-none border-gray-400 rounded pl-2 focus:border-blue-400"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Your name*</label>
            <input
              type="text"
              className="border-2 border-gray-400 h-12 pl-2 text-lg rounded focus:border-blue-400"
              autoComplete="false"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Your email*</label>
            <input
              type="email"
              className="border-2 border-gray-400 h-12 pl-2 text-lg rounded focus:border-blue-400"
              autoComplete="false"
            />
          </div>
          <input
            type="button"
            value="Submit"
            className="bg-red-500 py-3 uppercase font-bold tracking-wider text-white cursor-pointer hover:bg-red-700 rounded"
          />
        </form>
        <CloseIcon
          className="absolute right-3 top-3 text-gray-400 hover:text-red-600 cursor-pointer"
          fontSize="large"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default CommentBox;

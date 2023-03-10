import React from "react";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Full Name*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
        <input
          type="number"
          placeholder="Phone number*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Pincode*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
        <input
          type="number"
          placeholder="Locality*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
      </div>
      <div className="w-full">
        <textarea
          id=""
          cols="30"
          rows="3"
          className="resize-none w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          placeholder="Address (area and street)"
        ></textarea>
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="City/District/Town*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
        <input
          type="text"
          placeholder="State*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Landmark (Optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
        <input
          type="number"
          placeholder="Alternate Phone (optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
        />
      </div>
      <input
        type="submit"
        value="Save and deliver here"
        className="uppercase bg-red-600 text-white p-4 font-semibold tracking-wider hover:bg-red-700 cursor-pointer rounded"
      />
    </div>
  );
};

export default AddressForm;

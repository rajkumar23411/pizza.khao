import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, clearError } from "../redux/actions/addressAction";
import { useSnackbar } from "notistack";
import { NEW_ADDRESS_RESET } from "../redux/constants/addressConstant";

const AddressForm = ({ button }) => {
  const { error, success } = useSelector((state) => state.newAddress);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [pincode, setPincode] = useState();
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [altContact, setAltContact] = useState();

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAddress(
        name,
        contact,
        pincode,
        locality,
        address,
        city,
        state,
        landmark,
        altContact
      )
    );
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }

    if (success) {
      enqueueSnackbar("Address added successfully", { variant: "success" });
    }
  }, [dispatch, error, success, enqueueSnackbar]);
  return (
    <form className="flex flex-col gap-4 p-10" onSubmit={handleAddressSubmit}>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Full Name*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Phone number*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setContact(e.target.value)}
          valuec={contact}
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Pincode*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setPincode(e.target.value)}
          value={pincode}
        />
        <input
          type="text"
          placeholder="Locality*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setLocality(e.target.value)}
          value={locality}
        />
      </div>
      <div className="w-full">
        <textarea
          cols="30"
          rows="3"
          className="resize-none w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          placeholder="Address (area and street)*"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        ></textarea>
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="City/District/Town*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <input
          type="text"
          placeholder="State*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Landmark (Optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setLandmark(e.target.value)}
          value={landmark}
        />
        <input
          type="number"
          placeholder="Alternate Phone (optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          onChange={(e) => setAltContact(e.target.value)}
          value={altContact}
        />
      </div>
      <input
        type="submit"
        value={button}
        className="uppercase bg-red-600 text-white p-4 font-semibold tracking-wider hover:bg-red-700 cursor-pointer rounded"
      />
    </form>
  );
};

export default AddressForm;

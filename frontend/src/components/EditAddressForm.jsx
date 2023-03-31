import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  myAddresses,
  updateAddress,
  clearError,
} from "../redux/actions/addressAction";
import { useSnackbar } from "notistack";

const EditAddressForm = ({ onClose, address }) => {
  const { error, isUpdated } = useSelector((state) => state.updateAddress);
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [pinCode, setPinCode] = useState();
  const [locality, setLocality] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [altContact, setAltContact] = useState();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (address) {
      setName(address.name);
      setContact(address.contact);
      setPinCode(address.pinCode);
      setLocality(address.locality);
      setUserAddress(address.address);
      setCity(address.city);
      setState(address.state);
      setLandmark(address.landmark);
      setAltContact(address.altContact);
    }

    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }
    if (isUpdated) {
      onClose();
      enqueueSnackbar("Address updated successfully", { variant: "success" });
      dispatch(myAddresses());
    }
  }, [address, dispatch, isUpdated, onClose, enqueueSnackbar]);

  const updateAddressSubmit = (e) => {
    e.preventDefault();

    const myFom = new FormData();
    myFom.set("name", name);
    myFom.set("contact", contact);
    myFom.set("pinCode", pinCode);
    myFom.set("locality", locality);
    myFom.set("address", userAddress);
    myFom.set("city", city);
    myFom.set("state", state);
    myFom.set("landmark", landmark);
    myFom.set("altContact", altContact);

    dispatch(updateAddress(address._id, myFom));
  };
  return (
    <form className="flex flex-col gap-4 p-10" onSubmit={updateAddressSubmit}>
      <h1 className="uppercase text-golden font-semibold text-lg">
        Edit Address
      </h1>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Full Name*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Pincode*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Locality*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
        />
      </div>
      <div className="w-full">
        <textarea
          id=""
          cols="30"
          rows="3"
          className="resize-none w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          placeholder="Address (area and street)"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="City/District/Town*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State*"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Landmark (Optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
        <input
          type="number"
          placeholder="Alternate Phone (optional)"
          className="w-full border-[1px] border-gray-400 p-3 bg-transparent focus:border-red-600 focus:placeholder:text-red-400 rounded"
          value={altContact}
          onChange={(e) => setAltContact(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Save address"
        className="uppercase bg-blue-600 text-white p-3 text-sm font-semibold tracking-wider hover:bg-green-700 cursor-pointer rounded"
      />
      <input
        type="button"
        value="Cancel"
        className="uppercase bg-red-600 text-white p-3 text-sm font-semibold tracking-wider hover:bg-red-700 cursor-pointer rounded"
        onClick={onClose}
      />
    </form>
  );
};

export default EditAddressForm;

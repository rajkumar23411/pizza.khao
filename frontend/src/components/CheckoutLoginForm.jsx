import React from "react";

const CheckoutLoginForm = () => {
  return (
    <div className="checkout_login_form w-[70%] mt-4 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="contact" className="text-sm">
          Contact No.*
        </label>
        <input
          type="number"
          className="border-2 py-2 rounded pl-2 focus:border-red-300"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm">
          Password*
        </label>
        <input
          type="password"
          className="border-2 py-2 rounded pl-2 focus:border-red-300"
        />
      </div>
      <input
        type="button"
        value="Login"
        className="bg-red-500 text-white py-2 uppercase tracking-wider font-semibold rounded cursor-pointer hover:bg-red-600"
      />
    </div>
  );
};

export default CheckoutLoginForm;

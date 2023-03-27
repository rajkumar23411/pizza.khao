import React from "react";
import MainNav from "../components/MainNav";
import SingleOrderBox from "../components/SingleOrderBox";

const MyOrder = () => {
  return (
    <section className="min-h-full w-full">
      <div>
        <MainNav />
      </div>
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          My orders
        </h1>
      </div>
      <div className="px-10 py-20 grid grid-cols-3 gap-4 w-max place-items-center justify-items-center m-auto">
        <SingleOrderBox />
        <SingleOrderBox />
        <SingleOrderBox />
        <SingleOrderBox />
      </div>
    </section>
  );
};

export default MyOrder;

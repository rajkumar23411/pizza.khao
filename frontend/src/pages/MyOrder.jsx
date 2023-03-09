import React from "react";
import MainNav from "../components/MainNav";

const MyOrder = () => {
  return (
    <section className="min-h-full w-full">
      <div>
        <MainNav />
      </div>
      <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
        <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
          My orders (0)
        </h1>
      </div>
    </section>
  );
};

export default MyOrder;

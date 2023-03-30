import React from "react";
import SingleRelatedPizza from "./SingleRelatedPizza";

const RelatedProducts = ({ product }) => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-bold text-golden text-2xl font-roboto tracking-wide uppercase">
        Related products
      </h1>
      <div className="grid grid-cols-5">
        {product.map((prod) => (
          <SingleRelatedPizza product={prod} key={prod._id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

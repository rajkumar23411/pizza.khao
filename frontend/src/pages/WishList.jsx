import React, { useEffect } from "react";
import MainNav from "../components/MainNav";
import AccountNav from "../components/AccountNav";
import SingleWishListItem from "../components/SingleWishListItem";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../redux/actions/wishListAction";
import { Link } from "react-router-dom";
const WishList = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  return (
    <>
      <section>
        <div>
          <MainNav />
        </div>
        <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
          <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
            My Account / Favourites
          </h1>
        </div>
      </section>
      <section className="flex items-start gap-4 p-20 bg-slate-50 h-screen">
        <AccountNav />
        <div className="flex-1 bg-white shadow-md p-10 flex flex-col min-h-full gap-6">
          <h1 className="uppercase text-golden font-semibold tracking-wider text-xl">
            Favourites ({wishlist?.items?.length})
          </h1>
          {wishlist && wishlist.items && wishlist.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h1 className="text-gray-500 font-semibold text-xl">
                No Favourites
              </h1>
              <Link to="/menu">
                <p className="bg-red-500 text-white uppercase font-semibold tracking-wider p-3 rounded text-sm hover:bg-red-600 cursor-pointer">
                  Add items
                </p>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {wishlist && <SingleWishListItem wishlist={wishlist} />}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WishList;

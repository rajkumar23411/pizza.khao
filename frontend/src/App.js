import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import SinglePizza from "./pages/SinglePizza";
import { useEffect } from "react";
import Blog from "./pages/Blog";
import ResturentMenu from "./pages/ResturentMenu";
import MyOrder from "./pages/MyOrder";
import CheckOut from "./pages/CheckOut";
const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/pizza/:name" element={<SinglePizza />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resturent-menu" element={<ResturentMenu />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default App;

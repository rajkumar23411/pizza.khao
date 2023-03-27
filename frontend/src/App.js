import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import SinglePizza from "./pages/SinglePizza";
import { useEffect } from "react";
import Blog from "./pages/Blog";
import ResturentMenu from "./pages/ResturentMenu";
import MyOrder from "./pages/MyOrder";
import CheckOut from "./pages/CheckOut";
import MyAccount from "./pages/MyAccount";
import AccountAddress from "./pages/AccountAddress";
import store from "./redux/store";
import { loadUser } from "./redux/actions/userAction";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddPizza from "./pages/AddPizza";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/pizza/:id" element={<SinglePizza />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resturent-menu" element={<ResturentMenu />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/account/settings" element={<MyAccount />} />
      <Route path="/account/address" element={<AccountAddress />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add/pizza" element={<AddPizza />} />
      <Route path="/menu/:keyword" element={<Menu />} />
      <Route path="/pizza/:keyword" element={<Menu />} />
    </Routes>
  );
};

export default App;

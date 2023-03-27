import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearError, login } from "../redux/actions/userAction";
import { useSnackbar } from "notistack";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(phone, password));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, navigate, isAuthenticated, enqueueSnackbar]);
  return (
    <section className="signUp">
      <div className="backdrop-blur-md w-max form flex items-center justify-center flex-col gap-10 rounded-lg p-10">
        <div className="flex items-end gap-1">
          <h1 className="text-3xl font-extrabold text-white">
            Welcome Back Mate !
          </h1>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="h-12 overflow-hidden inputDiv w-[22rem]">
            <input
              type="number"
              placeholder="Contact number*"
              className="w-full h-full bg-transparent px-2 text-white"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="h-12 overflow-hidden inputDiv w-[22rem]">
            <input
              type="password"
              placeholder="Password*"
              className="w-full h-full bg-transparent px-2 text-white"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full h-12 bg-red-700 cursor-pointer rounded-md overflow-hidden hover:bg-red-800 shadow-inner shadow-red-800">
            <input
              type="submit"
              value="Login"
              className="h-full w-full uppercase text-white font-semibold tracking-wider cursor-pointer"
            />
          </div>
          <div className="w-full h-12 bg-blue-600 cursor-pointer rounded-md overflow-hidden hover:bg-blue-800 shadow-inner shadow-blue-800">
            <input
              type="submit"
              value="Request OTP"
              className="w-full h-full text-white uppercase tracking-wider font-semibold cursor-pointer"
            />
          </div>
          <div className="w-full text-center text-white">
            <span className="font-normal">Don't have an account? </span>
            <Link
              to="/register"
              className="font-normal text-yellow-300 cursor-pointer hover:text-yellow-600"
            >
              Register now
            </Link>
          </div>
          <div className="w-full text-center text-slate-100 cursor-pointer hover:text-sky-300">
            <span>Forgot password ?</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

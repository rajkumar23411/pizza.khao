import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const protectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && isAuthenticated === false ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </>
  );
};

export default protectedRoute;

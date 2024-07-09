import React from "react";
import { Outlet, Navigate } from "react-router-dom"; 
import Sidebar from "../components/Sidebar";

const PrivateRoutes = () => {
  
  const userIsAuthenticated = true; // This should ideally be replaced with actual authentication logic

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-[80vw] h-screen">
        {userIsAuthenticated ? <Outlet /> : <Navigate to="/" />}
      </main>
    </div>
  );
};

export default PrivateRoutes;
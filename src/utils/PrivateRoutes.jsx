import React from "react";
import { Outlet, Navigate } from "react-router-dom"; 
import Sidebar from "../components/Sidebar";
import SidebarMed from "../components/SidebarMed";

const PrivateRoutes = () => {
  
  const userIsAuthenticated = true; // This should ideally be replaced with actual authentication logic
  const isDoctor = false; // This should ideally be replaced with actual authentication logic

  return (
    <div className="flex">
      {isDoctor ? <SidebarMed /> : <Sidebar />}
      <main className="w-screen h-screen">
        {userIsAuthenticated ? <Outlet /> : <Navigate to="/" />}
      </main>
    </div>
  );
};

export default PrivateRoutes;
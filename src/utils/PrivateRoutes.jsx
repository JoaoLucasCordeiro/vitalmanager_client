import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarMed from "../components/SidebarMed";

const PrivateRoutes = () => {
  // Retrieve user type and authentication status from localStorage
  const userType = localStorage.getItem("tipo");
  const isAuthenticated = localStorage.getItem("token") !== null; // Consider user authenticated if token exists

  // Determine if the user is a doctor based on the userType
  const isDoctor = userType === "M"; // Assuming 'doctor' is the userType value for doctors

  return (
    <div className="flex">
      {isDoctor ? <SidebarMed /> : <Sidebar />}
      <main className="w-screen h-screen">
        {isAuthenticated ? <Outlet /> : <Navigate to="/signin" />} 
      </main>
    </div>
  );
};

export default PrivateRoutes;
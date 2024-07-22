import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPills } from 'react-icons/fa';

const SidebarMed = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Adjusted function for logout to use navigate
  const handleLogout = () => {
    localStorage.removeItem("tipo");
    localStorage.removeItem("id");
    localStorage.removeItem("token");

    toggleSidebar(); // Optionally close the sidebar
    navigate("/"); // Use navigate for redirection
  };

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <button
        className="md:hidden text-3xl text-white p-3 absolute top-0 right-0 z-20"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <AiOutlineClose className="text-purple-500 text-3xl mr-5 mt-7" />
        ) : (
          <AiOutlineMenu className="text-purple-500 text-3xl mr-5 mt-7" />
        )}
      </button>
      <nav
        className={`w-40 h-full fixed bg-purple p-3 top-0 ${
          isOpen ? "left-0" : "-left-60"
        } transition-left duration-300 ease-in-out z-10 md:left-0 md:translate-x-0`}
      >
        <div className="flex flex-col items-center justify-start gap-10 p-4 rounded-2xl py-6 h-full">
          <div className="flex flex-col items-center justify-start gap-10">
            <img
              src="/sidebarlogo.svg"
              alt="Logo VitalManager"
              className="w-full"
            />
            <Link
              to="/inicio-medico"
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Home"
              onClick={toggleSidebar}
            >
             <AiOutlineCalendar />
            </Link>
            {/* <Link
              to="/agenda-pacientes"
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Agendamentos"
              onClick={toggleSidebar}
            >
              <AiOutlineCalendar />
            </Link> */}
            <Link
              to="/exames-pacientes"
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Prontuário Médico"
              onClick={toggleSidebar}
            >
              <MdOutlineMedicalServices />
            </Link>

            <Link
              to="/items-hospitalares"
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Items hospitalares"
              onClick={toggleSidebar}
            >
             <FaPills />
            </Link>

            
          </div>
          <div className="mt-auto">
            <Link
              to="/"
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Sair/Logout"
              onClick={handleLogout}
              
            >
              <AiOutlineLogout />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SidebarMed;

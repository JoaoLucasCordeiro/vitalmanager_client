import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden text-3xl text-white p-3 absolute top-0 right-0 z-20"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu className="text-purple-500 text-3xl mr-5 mt-12"/>
      </button>
      <nav
        className={`w-40 h-full fixed bg-purple p-3 top-0 ${isOpen ? "left-0" : "-left-60"} transition-left duration-300 ease-in-out z-10 md:left-0 md:translate-x-0`}
      >
        <div className="flex flex-col items-center justify-start gap-10 p-4 rounded-2xl py-6 h-full">
          <div className="flex flex-col items-center justify-start gap-10">
            <img src="/sidebarlogo.svg" alt="Logo VitalManager" className="w-full" />
            <Link to="/inicio" className="text-3xl text-white cursor-pointer font-extrabold" title="Home" onClick={toggleSidebar}>
              <AiOutlineHome />
            </Link>
            <Link to="/agenda" className="text-3xl text-white cursor-pointer font-extrabold" title="Agendamentos" onClick={toggleSidebar}>
              <AiOutlineCalendar />
            </Link>
            <Link to="/prontuarios" className="text-3xl text-white cursor-pointer font-extrabold" title="Prontuário Médico" onClick={toggleSidebar}>
              <MdOutlineMedicalServices />
            </Link>
          </div>
          <div className="mt-auto">
            <Link to="/" className="text-3xl text-white cursor-pointer font-extrabold" title="Sair/Logout" onClick={toggleSidebar}>
              <AiOutlineLogout />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
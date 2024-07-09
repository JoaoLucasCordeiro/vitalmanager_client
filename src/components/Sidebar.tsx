import React from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-[7vw] h-screen p-3">
      <div className="w-full h-full flex flex-col items-center justify-start gap-10 p-4 bg-purple rounded-2xl py-6">
        <div className="flex flex-col items-center justify-start gap-10">

        <img src="/sidebarlogo.svg" alt="Logo VitalManager" className="w-full"/>

          <Link to="/inicio">
            <AiOutlineHome
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Home"
            />
          </Link>

          <Link to="/agenda">
            <AiOutlineCalendar
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Agendamentos"
            />
          </Link>

          <Link to="/prontuarios">
            <MdOutlineMedicalServices
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Prontuário Médico"
            />
          </Link>
        </div>
        <div className="mt-auto">
          <Link to="/">
            <AiOutlineLogout
              className="text-3xl text-white cursor-pointer font-extrabold"
              title="Sair/Logout"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

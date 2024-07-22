import React from "react";
import { FaStethoscope } from "react-icons/fa"; // Importando o ícone de estetoscópio
import { MdDateRange } from "react-icons/md"; // Importando o ícone de data

const CardExam = ({ dataExame, tipoExame }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 py-10 max-w-md w-full text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
      <FaStethoscope className="mx-auto text-3xl text-purple-500" />{" "}
      {/* Adicionando o ícone com estilização */}
      <h2 className="text-xl font-semibold mt-5">{tipoExame}</h2>
      <div className="flex items-center justify-center gap-2">
        <MdDateRange className="text-purple-500" />
        {/* Adicionando o ícone de data com estilização */}
        <p className=" text-purple-500 font-semibold">{dataExame}</p>
      </div>
    </div>
  );
};

export default CardExam;

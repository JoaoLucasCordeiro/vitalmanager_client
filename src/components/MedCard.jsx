import React from "react";
import { FaUserMd } from "react-icons/fa";

// Adiciona idMedico como prop
const MedCard = ({ nome, especialidade, onMarcarConsulta, idMedico }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 py-10 max-w-md w-full text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
      <FaUserMd className="mx-auto text-6xl text-gray-400" />
      <h2 className="mt-2 text-lg font-semibold">{nome}</h2>
      <p className="text-gray-600">{especialidade}</p>
      <button
        // Modifica o evento onClick para chamar onMarcarConsulta com idMedico
        onClick={() => onMarcarConsulta(idMedico)}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors outline-none"
      >
        Marcar Consulta
      </button>
    </div>
  );
};

export default MedCard;
import React from "react";

const CardAppointment = ({ data, hora, observacoes, status }) => {
  // Formata a data e hora para exibição
  const dataFormatada = new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const horaFormatada = new Date(`1970-01-01T${hora}`).toLocaleTimeString(
    "pt-BR",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-4 rounded-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-500">Consulta</div>
        <p className=" text-base text-purple-500 font-bold">
          Data: <span className="text-black font-normal">{dataFormatada}</span>{" "}
        </p>
        <p className=" text-base text-purple-500 font-bold">
          Hora: <span className="text-black font-normal"> {horaFormatada}</span>
        </p>
        <p className=" text-base text-purple-500 font-bold">
          Observações: <span className="text-black font-normal">{observacoes}</span>{" "}
        </p>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #{status}
        </span>
      </div>
    </div>
  );
};

export default CardAppointment;
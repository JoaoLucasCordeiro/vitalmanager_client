import React from "react";

const CardAppointment = ({
  data,
  hora,
  observacoes,
  status,
  idProntuario,
  onClick,
}) => {
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

  // idProntuario é recebido mas não exibido no componente

  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white my-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-500">Consulta</div>
        <p className=" text-base text-purple-500 font-bold">
          Data: <span className="text-black font-normal">{dataFormatada}</span>{" "}
        </p>
        <p className=" text-base text-purple-500 font-bold">
          Hora: <span className="text-black font-normal"> {horaFormatada}</span>
        </p>
        <p className=" text-base text-purple-500 font-bold">
          Observações:{" "}
          <span className="text-black font-normal">{observacoes}</span>{" "}
        </p>
      </div>
      <div className="px-6 pb-2">
        {/* <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #{status}
        </span> */}

        <button
          className="bg-purple-500 hover:bg-purple-600 rounded-2xl py-1 px-4 outline-none border-none text-base font-bold text-white"
          onClick={() => onClick(idProntuario)}
        >
          Marcar Exame
        </button>
      </div>
    </div>
  );
};

export default CardAppointment;

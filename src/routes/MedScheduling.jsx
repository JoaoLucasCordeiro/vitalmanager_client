import React from "react";
import Searcher from "../components/Searcher";

const MedScheduling = () => {
  return (
    <section className="h-screen">
      <div className="p-10">
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl ml-5 py-5">Consultas marcadas</h2>
        <div className="flex items-center mt-10 space-x-4">
          <Searcher placeholder="Procurar por consulta espeficica" />
        </div>

        <div className="flex items-center justify-center mt-[10%]">
          <h1 className="ml-20 text-purple-400 font-bold text-4xl">Nenhuma consulta marcada</h1>
        </div>
      </div>
    </section>
  );
};

export default MedScheduling;

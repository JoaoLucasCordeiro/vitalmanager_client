import React from "react";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";

const MedicalRecords = () => {
  return (
    <section className="h-screen">
      <div className="p-10">
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl ml-5 py-5">
          Prontuários
        </h2>
        <div className="flex items-center mt-10 space-x-4">
          <Searcher placeholder="Pesquisar por prontuário especifico" />
          <SelectDocType />
        </div>

        <div className="flex items-center justify-center mt-[10%]">
          <h1 className="ml-20 text-purple-400 font-bold text-4xl">
            Nenhum prontuário
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MedicalRecords;

import React, { useState, useEffect } from "react";
import MedicalRecordCard from "../components/MedicalRecordCard";
import ModalAddMedicalRecords from "../components/ModalAddMedicalRecords";
import { ClipLoader } from "react-spinners";

const MedicalRecords = () => {
  const [record, setRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const idFk = localStorage.getItem("id_fk");
    if (id) {
      fetch(`https://vital-manager-eyk4.onrender.com/prontuarios/${idFk}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        // Supondo que a API retorne um objeto vazio ou null caso não exista prontuário
        if (data && Object.keys(data).length !== 0) {
          setRecord(data);
        } else {
          setRecord(null);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  }, []);

  const addRecord = () => {
    setShowModal(true);
  };

  const handleAddRecord = (recordData) => {
    setRecord(recordData);
    setShowModal(false);
  };

  const hasRecordData = record && (
    record.idade ||
    record.tipoSanguineo ||
    record.altura ||
    record.peso ||
    record.temperatura ||
    record.pressao ||
    record.descricao
  );

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
    <div className="flex flex-col mt-5">
      <img src="/loggedlogo.png" alt="VitalManager Logo" />
      <h2 className="text-purple-400 font-bold text-3xl text-center py-5">
        Seu Prontuário
      </h2>
    </div>

    <div className="flex items-center justify-center w-screen max-w-[80vw] h-[50vh] mt-20">
      {hasRecordData ? (
        <MedicalRecordCard
          idade={record.idade}
          tipoSanguineo={record.tipoSanguineo}
          altura={record.altura}
          peso={record.peso}
          temperatura={record.temperatura}
          pressao={record.pressao}
          descricao={record.descricao}
        />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-purple-400 font-bold md:text-4xl text-2xl text-center mb-5">
            Nenhum prontuário
          </h1>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl"
            onClick={addRecord}
          >
            Adicionar Prontuário
          </button>
        </div>
      )}
    </div>
    {showModal && <ModalAddMedicalRecords onClose={() => setShowModal(false)} onSubmit={handleAddRecord} />}
  </section>
  );
};

export default MedicalRecords;
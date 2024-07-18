import React, { useEffect, useState } from "react";
import MedCard from "../components/MedCard";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";
import AppointmentModal from "../components/AppointmentModal"; // Importe o AppointmentModal

const Home = () => {
  const [medicos, setMedicos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [selectedMedicoId, setSelectedMedicoId] = useState(null); // Estado para armazenar o ID do médico selecionado

  const handleMarcarConsulta = (idMedico) => {
    console.log(idMedico); // Log do ID do médico
    setSelectedMedicoId(idMedico); // Salva o ID do médico no estado
    setIsModalOpen(true); // Abre o modal
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log the token
    fetch("https://vital-manager-eyk4.onrender.com/medicos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMedicos(data);
      })
      .catch((error) => {
        console.error("Error fetching médicos:", error); // Log the error
      });
  }, []);

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Marque sua consulta
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <Searcher placeholder="Procurar por um médico" />
          <SelectDocType />
        </div>
        <div className="flex items-center flex-wrap gap-3 py-5">
          {medicos.map((medico) => (
            <MedCard
              key={medico.idMedico}
              nome={`${medico.usuario.nome} ${medico.usuario.sobrenome}`}
              especialidade={medico.especialidade}
              idMedico={medico.idMedico}
              onMarcarConsulta={() => handleMarcarConsulta(medico.idMedico)} // Correção aqui
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <AppointmentModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={() => {}}
          idMedico={selectedMedicoId}
        />
      )}
    </section>
  );
};

export default Home;

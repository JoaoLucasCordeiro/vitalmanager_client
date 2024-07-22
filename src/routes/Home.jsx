import React, { useEffect, useState } from "react";
import MedCard from "../components/MedCard";
import AppointmentModal from "../components/AppointmentModal";

const Home = () => {
  const [medicos, setMedicos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedicoId, setSelectedMedicoId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Adicionado estado para o termo de busca

  const handleMarcarConsulta = (idMedico) => {
    setSelectedMedicoId(idMedico);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://vital-manager-eyk4.onrender.com/medicos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMedicos(data))
      .catch((error) => console.error("Error fetching médicos:", error));
  }, []);

  const filteredMedicos = medicos.filter((medico) =>
    (`${medico.usuario.nome} ${medico.usuario.sobrenome}`).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Marque sua consulta
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <input
            type="text"
            placeholder="Procurar por um médico"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-purple-400 w-[80vw] max-w-[650px] bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center flex-wrap w-[80vw] gap-3 py-5">
          {filteredMedicos.map((medico) => (
            <MedCard
              key={medico.idMedico}
              nome={`${medico.usuario.nome} ${medico.usuario.sobrenome}`}
              especialidade={medico.especialidade}
              idMedico={medico.idMedico}
              onMarcarConsulta={() => handleMarcarConsulta(medico.idMedico)}
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
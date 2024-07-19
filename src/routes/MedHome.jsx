import React, { useEffect, useState } from 'react';
import MedCard from "../components/MedCard";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";
import CardAppointment from "../components/CardAppointment"; // Importando o componente CardAppointment

const MedHome = () => {
  const [consultas, setConsultas] = useState([]); // Estado para armazenar as consultas

  useEffect(() => {
    const id = localStorage.getItem("id_fk");
    const token = localStorage.getItem("token");

    if (id && token) {
      fetch(`https://vital-manager-eyk4.onrender.com/medicos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Dados recebidos do médico:", data);
        setConsultas(data.consultas); // Atualizando o estado com as consultas recebidas
      })
      .catch(error => {
        console.error("Erro na requisição:", error);
      });
    }
  }, []);

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">Consultas marcadas</h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <Searcher placeholder="Procurar consulta" />
        </div>
        <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
          {/* Mapeando os dados recebidos para exibir os CardAppointment */}
          {consultas.map((consulta) => (
            <CardAppointment
              key={consulta.idConsulta}
              data={consulta.data}
              hora={consulta.hora}
              observacoes={consulta.observacoes}
              status={consulta.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedHome;
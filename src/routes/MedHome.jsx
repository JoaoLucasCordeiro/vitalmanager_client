import React, { useEffect, useState } from "react";
import MedCard from "../components/MedCard";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";
import CardAppointment from "../components/CardAppointment"; // Importando o componente CardAppointment
import ModalExame from "../components/ModalExame";

const MedHome = () => {
  const [consultas, setConsultas] = useState([]); // Estado para armazenar as consultas
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filtro, setFiltro] = useState("todas"); // Estado para controlar o filtro selecionado

  function showModalExame() {
    setIsModalVisible(true);
  }

  function hideModalExame() {
    setIsModalVisible(false);
  }

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
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dados recebidos do médico:", data);
          setConsultas(data.consultas); // Atualizando o estado com as consultas recebidas
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  }, []);

  function handleMarcarConsulta(idProntuario) {
    fetch(
      `https://vital-manager-eyk4.onrender.com/prontuarios/${idProntuario}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Prontuário do paciente:", data);
        localStorage.setItem(
          "idPacienteConsulta",
          data.idPacienteFK.toString()
        );
        // Exibir o modal aqui
        showModalExame();
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }

  function ordenarConsultas(consultas) {
    switch (filtro) {
      case "maisRecentes":
        return consultas.sort((a, b) => new Date(b.data) - new Date(a.data));
      case "maisAntigas":
        return consultas.sort((a, b) => new Date(a.data) - new Date(b.data));
      default:
        return consultas; // No caso de "todas", não aplica nenhuma ordenação
    }
  }

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Consultas marcadas
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)} className="p-2 rounded-xl shadow-lg outline-none border-none">
            <option value="todas">Todas</option>
            <option value="maisRecentes">Mais Recentes</option>
            <option value="maisAntigas">Mais Antigas</option>
          </select>
        </div>
        <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
          {/* Mapeando os dados recebidos para exibir os CardAppointment */}
          {ordenarConsultas([...consultas]).map((consulta) => (
            <CardAppointment
              key={consulta.idConsulta}
              data={consulta.data}
              hora={consulta.hora}
              observacoes={consulta.observacoes}
              status={consulta.status}
              idProntuario={consulta.idProntuario}
              onClick={handleMarcarConsulta} // Passando a função handleCheckProntuario para o componente CardAppointment
            />
          ))}
          {isModalVisible && <ModalExame onClose={hideModalExame} />}
        </div>
      </div>
    </section>
  );
};

export default MedHome;

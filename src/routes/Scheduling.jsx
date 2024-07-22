import React, { useEffect, useState } from "react";
import SelectDocType from "../components/SelectDocType";
import Searcher from "../components/Searcher";
import CardAppointment from "../components/CardAppointment";

const Scheduling = () => {
  const [consultas, setConsultas] = useState([]); // Estado para armazenar as consultas

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    if (id) {
      fetch(`https://vital-manager-eyk4.onrender.com/consultas/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro HTTP: status ${response.status}`);
          }
          return response.text();
        })
        .then((text) => {
          return text ? JSON.parse(text) : {};
        })
        .then((data) => {
          setConsultas(Array.isArray(data) ? data : [data]);
          console.log(`consultas desse usuário:`, data);
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  }, []);
  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Suas Consultas
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          {/* <Searcher placeholder="Procurar por uma consulta" /> */}

        </div>

        {consultas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultas.map((consulta) => (
              <CardAppointment
                key={consulta.observacoes}
                data={consulta.data}
                hora={consulta.hora}
                status={consulta.status}
                observacoes={consulta.observacoes}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[30vh]">
            <h1 className="text-purple-400 font-bold md:text-4xl text-2xl md:ml-[25%] ml-0">
              Nenhuma consulta marcada
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Scheduling;

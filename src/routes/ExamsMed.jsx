import React, { useEffect, useState } from "react";
import Searcher from "../components/Searcher";
import CardExam from "../components/CardExam"; // Import the CardExam component

const ExamsMed = () => {
  const [exams, setExams] = useState([]); // State to store exams data

  useEffect(() => {
    const id = localStorage.getItem("id_fk");
    const token = localStorage.getItem("token");

    if (id && token) {
      fetch(`https://vital-manager-eyk4.onrender.com/exames/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Dados recebidos do médico:", data);

          // Adicione um log para verificar a estrutura dos dados
          console.log("Tipo de dados recebidos:", typeof data);
          console.log("Estrutura dos dados recebidos:", data);

          if (Array.isArray(data)) {
            setExams(data);
          } else if (data && typeof data === "object") {
            // Coloque o objeto em um array
            setExams([data]);
          } else {
            console.error("Formato inesperado de dados:", data);
            setExams([]); // Define exams como um array vazio ou trata conforme necessário
          }
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
          setExams([]); // Garante que exams seja definido como um array vazio em caso de erro
        });
    }
  }, []);

  function formatDate(dateString) {
    const parts = dateString.split("-"); // Separa a data em [ano, mês, dia]
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // Reorganiza para DD/MM/YYYY
  }

  // No componente ExamsMed, ao renderizar CardExam:
  {
    exams.map((exam) => (
      <CardExam
        key={exam.idExame}
        dataExame={formatDate(exam.dataExame)} // Formata a data antes de passar
        tipoExame={exam.tipoExame}
      />
    ));
  }

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Exames marcados
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <Searcher placeholder="Procurar exame" />
        </div>
        <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
          {exams.map((exam) => (
            <CardExam
              key={exam.idExame}
              dataExame={formatDate(exam.dataExame)} // Formata a data antes de passar
              tipoExame={exam.tipoExame}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsMed;

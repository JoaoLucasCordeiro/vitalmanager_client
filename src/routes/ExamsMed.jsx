import React, { useEffect, useState } from "react";
import CardExam from "../components/CardExam"; // Import the CardExam component

const ExamsMed = () => {
  const [exams, setExams] = useState([]); // State to store exams data
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  useEffect(() => {
    const id = localStorage.getItem("id_fk");
    const token = localStorage.getItem("token");
  
    console.log("Token:", token); // Log Token
    
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
          console.log("Dados recebidos da API:", data); // Log API Response
  
          if (Array.isArray(data)) {
            console.log("Atualizando exames com um array de dados"); // Before updating state
            setExams(data);
          } else if (data && typeof data === "object") {
            console.log("Atualizando exames com um único objeto de dados"); // Before updating state
            setExams([data]);
          } else {
            console.error("Formato inesperado de dados:", data);
            setExams([]);
          }
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
          setExams([]);
        });
    }
  }, []);
  
  // Ensure filteredExams is declared and initialized before using it
  const filteredExams = exams.filter((exam) =>
    exam.tipoExame.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Now it's safe to log filteredExams after its declaration
  console.log("Termo de busca:", searchTerm);
  console.log("Exames filtrados:", filteredExams);

  function formatDate(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

 ;
  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
          Exames marcados
        </h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <input
            type="text"
            placeholder="Procurar exame"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-purple-400 w-[80vw] max-w-[650px] bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <CardExam
                key={exam.idExame}
                dataExame={formatDate(exam.dataExame)}
                tipoExame={exam.tipoExame}
              />
            ))
          ) : (
            <h1 className="text-purple-500 text-3xl font-bold text-center">
              Sem exames encontrados
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExamsMed;
import React, { useState } from "react";

const ModalExame = ({ onClose }) => {
  const [tipoExame, setTipoExame] = useState("");
  const [resultado, setResultado] = useState("");
  const [dataExame, setDataExame] = useState("");

  const idPacienteConsulta = localStorage.getItem("idPacienteConsulta");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      idPaciente: idPacienteConsulta,
      tipoExame,
      resultado : "",
      dataExame,
    };
    const token = localStorage.getItem("token");
    fetch("https://vital-manager-eyk4.onrender.com/exames", {
      method: "POST", // Método HTTP adequado para criar um novo recurso
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody), // Converte os dados do formulário para string JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição: " + response.statusText);
        }
        return response.json(); // Processa a resposta para obter o JSON
      })
      .then((data) => {
        console.log("Exame cadastrado com sucesso:", data);
        onClose(); // Fechar o modal após o sucesso da operação
      })
      .catch((error) => {
        console.error("Falha ao cadastrar o exame:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border shadow-lg rounded-xl bg-white w-[30vw]">
        <div className="mt-3 text-center flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col items-center justify-center gap-3"
          >
            <input
              type="text"
              placeholder="Tipo de Exame"
              value={tipoExame}
              onChange={(e) => setTipoExame(e.target.value)}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            {/* <input
              type="text"
              placeholder="Resultado"
              value={resultado}
              onChange={(e) => setResultado(e.target.value)}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            /> */}
            <input
              type="date"
              value={dataExame}
              onChange={(e) => setDataExame(e.target.value)}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <div className="flex flex-col items-center justify-center ">
              <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-xl w-[350px]"
              >
                Marcar Exame
              </button>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-xl w-[350px]"
              >
                Fechar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalExame;

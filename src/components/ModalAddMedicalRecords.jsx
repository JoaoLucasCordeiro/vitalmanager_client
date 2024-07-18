import React, { useState, useEffect } from "react";

const ModalAddMedicalRecords = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    idProntuario: null,
    idPacienteFK: "",
    idade: "",
    tipoSanguineo: "",
    altura: "",
    peso: "",
    temperatura: "",
    pressao: "",
    descricao: "",
  });

  useEffect(() => {
    const idPacienteFK = localStorage.getItem("id_fk");
    console.log("idPacienteFK obtido do localStorage:", idPacienteFK); // Log do idPacienteFK
    if (idPacienteFK) {
      setFormData((formData) => {
        console.log("Atualizando formData com idPacienteFK:", idPacienteFK); // Log antes de atualizar o formData
        return { ...formData, idPacienteFK: idPacienteFK };
      });
    }
  }, []);

  const handleChange = (e) => {
    console.log(`Alterando ${e.target.name} para`, e.target.value); // Log na mudança de cada campo
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Dados do formulário sendo enviados:", formData); // Log dos dados do formulário antes do envio
    const token = localStorage.getItem("token");

    fetch("https://vital-manager-eyk4.onrender.com/prontuarios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("Resposta do servidor:", response); // Log da resposta do servidor
        return response.json();
      })
      .then((data) => {
        console.log("Dados recebidos após o envio do formulário:", data); // Log dos dados recebidos
        onSubmit(); // Assuming onSubmit will handle post-submit logic, like closing the modal or showing a success message
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error); // Log de erro
        // Handle error (show error message, etc.)
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border shadow-lg rounded-xl bg-white w-[30vw]">
        <div className="mt-3 text-center flex flex-col">

          <h3 className="text-3xl font-bold leading-6 text-purple-500 py-5">
            Adicionar Prontuário
          </h3>

          <form onSubmit={handleSubmitForm} className="mt-2 flex flex-col items-center justify-center gap-3">
            <input
              type="text"
              name="idade"
              placeholder="Idade"
              onChange={handleChange}
              value={formData.idade}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="tipoSanguineo"
              placeholder="Tipo Sanguíneo"
              onChange={handleChange}
              value={formData.tipoSanguineo}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="altura"
              placeholder="Altura"
              onChange={handleChange}
              value={formData.altura}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="peso"
              placeholder="Peso"
              onChange={handleChange}
              value={formData.peso}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="temperatura"
              placeholder="Temperatura"
              onChange={handleChange}
              value={formData.temperatura}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="pressao"
              placeholder="Pressão"
              onChange={handleChange}
              value={formData.pressao}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              onChange={handleChange}
              value={formData.descricao}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />
            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-xl w-[350px]"
              >
                Adicionar Prontuário
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

export default ModalAddMedicalRecords;

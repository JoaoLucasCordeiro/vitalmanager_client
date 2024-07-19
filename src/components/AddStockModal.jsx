import React, { useState, useEffect } from "react";

const AddStockModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    quantidade: 100,
    nome: "",
    data_atualizacao: "",
  });

  useEffect(() => {
    const idProntuario = localStorage.getItem("prontuario_id");
    if (idProntuario) {
      setFormData((formData) => {
        return { ...formData, idProntuario: idProntuario };
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Obtém a data atual
    const dataAtual = new Date();
    // Formata a data para YYYY-MM-DD
    const dataFormatada = dataAtual.toISOString().split("T")[0];

    // Atualiza formData com a data_atualizacao antes de enviar
    const formDataAtualizado = { ...formData, data_atualizacao: dataFormatada };

    console.log("Dados do formulário antes do envio:", formDataAtualizado);
    const token = localStorage.getItem("token");

    fetch("https://vital-manager-eyk4.onrender.com/estoque/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formDataAtualizado),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data);
        onSubmit(); // Chama a função onSubmit passada como prop
      })
      .catch((error) => {
        console.error("Erro ao enviar formulário:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border shadow-lg rounded-xl bg-white w-[30vw]">
        <div className="mt-3 text-center flex flex-col">
          <h3 className="text-3xl font-bold leading-6 text-purple-500 py-5">
            Criar novo estoque
          </h3>

          <form
            onSubmit={handleSubmitForm}
            className="mt-2 flex flex-col items-center justify-center gap-3"
          >
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
              value={formData.nome}
              className="w-[90%] border border-gray-300 rounded-md p-2 outline-none"
            />

            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-xl w-[350px]"
              >
                Adicionar novo estoque
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

export default AddStockModal;

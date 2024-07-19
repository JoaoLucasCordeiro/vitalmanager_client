import React, { useState, useEffect } from "react";

const AddItemModal = ({ stockId, onClose }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState();
  const [descricao, setDescricao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [quantidade, setQuantidade] = useState();
  const [idFornecedor, setIdFornecedor] = useState(1); // Valor inicial como string vazia
  const [isLoading, setIsLoading] = useState(false);
  const [fornecedores, setFornecedores] = useState([]); // Inicialize como um array vazio

  useEffect(() => {
    const fetchFornecedores = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://vital-manager-eyk4.onrender.com/fornecedores", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFornecedores(data);
      } catch (error) {
        console.error("Erro ao buscar fornecedores:", error);
      }
    };

    fetchFornecedores();
  }, []);

  const handleSubmit = async () => {
    if (idFornecedor === "") {
      alert("Por favor, selecione um fornecedor.");
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem("token");
    const newItem = {
      idEstoque: stockId,
      idPrescricao: 1,
      nome,
      preco,
      descricao,
      dataValidade,
      quantidade,
      idFornecedor: Number(idFornecedor),
    };

    console.log("Dados do novo item:", newItem);

    try {
      const response = await fetch("https://vital-manager-eyk4.onrender.com/item-hospitalar/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newItem),
      });

      const responseData = await response.json();

      console.log("Resposta da API:", responseData);

      if (response.ok) {
        onClose();
      } else {
        console.error("Erro ao adicionar item:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative p-5 border shadow-lg rounded-xl bg-white w-[30vw]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <div className="mt-3 text-center flex flex-col">
          <h3 className="text-2xl font-bold leading-6 text-purple-500 py-2">
            Adicionar novo item
          </h3>
          <div className="text-left">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Preço:</label>
              <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Descrição:</label>
              <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Data de Validade:</label>
              <input
                type="date"
                value={dataValidade}
                onChange={(e) => setDataValidade(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Quantidade:</label>
              <input
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Fornecedor:</label>
              <select
                value={idFornecedor}
                onChange={(e) => setIdFornecedor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Selecione um fornecedor</option>
                {Array.isArray(fornecedores) && fornecedores.map((fornecedor) => (
                  <option key={fornecedor.id} value={fornecedor.id}>
                    {fornecedor.nome}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-purple-400 p-2 w-full rounded-xl shadow-xl font-bold text-white hover:bg-purple-500 mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Adicionando..." : "Adicionar item"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;

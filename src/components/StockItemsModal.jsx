import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import AddItemModal from "../components/AddItemModal"; // Ajuste o caminho de importação conforme necessário

const StockItemsModal = ({ stockId, onClose }) => {
  const [stockDetails, setStockDetails] = useState(null);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  useEffect(() => {
    const fetchStockDetails = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://vital-manager-eyk4.onrender.com/estoque/${stockId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setStockDetails(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do estoque:", error);
      }
    };

    fetchStockDetails();
  }, [stockId]);

  if (!stockDetails) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-10 overflow-y-auto h-full w-full flex justify-center items-center">
        <ClipLoader color="#BD7DFB" size={120} />
      </div>
    );
  }

  const openAddItemModal = () => setIsAddItemModalOpen(true);
  const closeAddItemModal = () => setIsAddItemModalOpen(false);

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
          <h3 className="text-3xl font-bold leading-6 text-purple-500 py-5">
            Estoque de {stockDetails.nome}
          </h3>
          <div className="text-left">
            {stockDetails.itensHospitalares.length > 0 ? (
              stockDetails.itensHospitalares.map((item) => (
                <div key={item.idItensHospitalares} className="mb-4">
                  <h4 className="font-bold">{item.nome}</h4>
                  <p>Descrição: {item.descricao}</p>
                  <p>Preço: {item.preco}</p>
                  <p>Quantidade: {item.quantidade}</p>
                  <p>Data de Validade: {item.dataValidade}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700 font-bold">Não há itens neste estoque.</p>
            )}
          </div>
          <button 
            onClick={openAddItemModal}
            className="bg-purple-400 p-2 w-full rounded-xl shadow-xl font-bold text-white hover:bg-purple-500 mt-4">
            Adicionar novo item
          </button>
        </div>
      </div>
      {isAddItemModalOpen && <AddItemModal stockId={stockId} onClose={closeAddItemModal} />}
    </div>
  );
};

export default StockItemsModal;

import React, { useState, useEffect } from "react";
import AddStockModal from "../components/AddStockModal"; // Ajuste o caminho de importação conforme necessário
import StockCard from "../components/StockCard"; // Ajuste o caminho de importação conforme necessário
import StockItemsModal from "../components/StockItemsModal"; // Ajuste o caminho de importação conforme necessário

const Items = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [selectedStockId, setSelectedStockId] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://vital-manager-eyk4.onrender.com/estoque/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Erro ao buscar estoques:", error);
      }
    };

    fetchStocks();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeStockItemsModal = () => setSelectedStockId(null);

  const handleModalSubmit = () => {
    closeModal(); // Fecha o modal após o envio
  };

  const handleViewItems = (idEstoque) => {
    setSelectedStockId(idEstoque);
  };

  return (
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <img src="/loggedlogo.png" alt="VitalManager Logo" />
      <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">
        Estoque de itens hospitalares
      </h2>

      <div className="pt-10">
        <button
          className="bg-purple-400 p-2 w-[200px] rounded-xl shadow-xl font-bold text-white hover:bg-purple-500"
          onClick={openModal}
        >
          Criar estoque
        </button>
      </div>
      <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
        {stocks.map(stock => (
          <StockCard
            key={stock.idEstoque}
            idEstoque={stock.idEstoque}
            nome={stock.nome}
            hora={stock.hora}
            observacoes={stock.observacoes}
            status={stock.status}
            onViewItems={handleViewItems}
          />
        ))}
      </div>
      {isModalOpen && <AddStockModal onClose={closeModal} onSubmit={handleModalSubmit} />}
      {selectedStockId && <StockItemsModal stockId={selectedStockId} onClose={closeStockItemsModal} />}
    </section>
  );
};

export default Items;

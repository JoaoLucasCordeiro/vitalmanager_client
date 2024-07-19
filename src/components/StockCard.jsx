import React from "react";
import { FaPills } from "react-icons/fa";

const StockCard = ({ nome, idEstoque, onViewItems }) => {
  const handleViewItems = () => {
    onViewItems(idEstoque);
  };

  return (
    <div className="w-[350px] h-[270px] overflow-hidden shadow-lg bg-white my-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">
      <div className="px-6 py-4 flex items-center gap-3">
        <h2 className="font-bold text-xl mb-2 text-purple-500">{nome}</h2>
        <FaPills className="text-purple-500 text-3xl" />
      </div>
      <button onClick={handleViewItems} className="bg-purple-400 p-2 w-[200px] rounded-xl shadow-xl font-bold text-white hover:bg-purple-500">
        Ver itens
      </button>
    </div>
  );
};

export default StockCard;

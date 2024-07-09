import React from "react";

const SelectDocType = () => {
  return (
    <select className="pl-4 pr-10 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-purple-400 bg-transparent">
      <option value="todos">Todos</option>
      <option value="cardiologia">Cardiologia</option>
      <option value="dermatologia">Dermatologia</option>
      <option value="endocrinologia">Endocrinologia</option>
      <option value="neurologia">Neurologia</option>
    </select>
  );
};

export default SelectDocType;

import React from "react";

const SelectDocType = () => {
  return (
    <select className="py-[0.65rem] border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-purple-400 bg-transparent w-[80vw] max-w-[450px]">
      <option value="todos">Todos</option>
      <option value="cardiologia">Cardiologia</option>
      <option value="dermatologia">Dermatologia</option>
      <option value="endocrinologia">Endocrinologia</option>
      <option value="neurologia">Neurologia</option>
    </select>
  );
};

export default SelectDocType;

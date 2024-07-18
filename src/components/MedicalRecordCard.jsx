import React from "react";
import {
  FaHeartbeat,
  FaRulerVertical,
  FaWeight,
  FaThermometerHalf,
  FaTint,
  FaBirthdayCake,
  FaEdit,
  FaUser,
} from "react-icons/fa";

const MedicalRecordCard = ({
  idade,
  tipoSanguineo,
  altura,
  peso,
  temperatura,
  pressao,
  descricao,
  onEdit,
}) => {
  return (
    <div className="w-screen max-w-[40vw] h-screen max-h-[50vh] rounded-2xl overflow-hidden shadow-lg bg-white p-5 relative">
      <button
        className="outline-none border-none absolute top-5 right-5 text-white bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded-full w-[50px] h-[50px] flex items-center justify-center"
        onClick={onEdit}
      >
        <FaEdit />
      </button>
      <div className="flex items-center justify-center w-full h-full flex-col gap-10">
        <h3 className="font-bold text-4xl mb-2 text-center text-purple-500">
          Prontuário Médico
        </h3>

        <div className="flex justify-center gap-10 w-full ">
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaBirthdayCake className="inline mr-2" />
            Idade: <span className="text-black font-normal ml-2">{idade} anos</span>
          </p>
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaTint className="inline mr-2" />
            Tipo Sanguíneo:{" "}
            <span className="text-black font-normal ml-2">{tipoSanguineo}</span>
          </p>
        </div>
        <div className="flex justify-center gap-10 w-full ">
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaRulerVertical className="inline mr-2" />
            Altura: <span className="text-black font-normal ml-2">{altura} cm</span>
          </p>
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaWeight className="inline mr-2" />
            Peso: <span className="text-black font-normal ml-2">{peso} kg</span>
          </p>
        </div>
        <div className="flex justify-center gap-10 w-full ">
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaThermometerHalf className="inline mr-2" />
            Temperatura:{" "}
            <span className="text-black font-normal ml-2">{temperatura} °C</span>
          </p>
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-[320px] flex items-center font-bold">
            <FaHeartbeat className="inline mr-2" />
            Pressão: <span className="text-black font-normal ml-2">{pressao}</span>
          </p>
        </div>

        <div className="flex justify-center gap-10 w-full ">
          <p className="text-purple-500 text-xl bg-gray-200 p-2 rounded-xl shadow-xl w-full max-w-[93%] flex items-center font-bold">
            <FaUser className="inline mr-2" />
            Descrição:{" "}
            <span className="text-black font-normal ml-2">{descricao}</span>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordCard;

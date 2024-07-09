import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="h-screen">
      <form className="flex items-center flex-col justify-around gap-2 border border-gray-300 h-screen">
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="w-[600px]"
        />

        <div className="flex gap-10">
          <div className="flex flex-col items-center">
            <label htmlFor="nome" className="flex flex-col ">
              Nome
              <input
                type="text"
                id="nome"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
            <label htmlFor="sobrenome" className="flex flex-col ">
              Sobrenome
              <input
                type="text"
                id="sobrenome"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
            <label htmlFor="email" className="flex flex-col ">
              Email
              <input
                type="text"
                id="email"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="birthdate" className="flex flex-col ">
              Data de nascimento
              <input
                type="date"
                id="birthdate"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
          </div>
          {/* segunda coluna de dados */}

          <div className="flex flex-col items-center">
            <label htmlFor="gender" className="flex flex-col ">
              Sexo
              <select
                name="gender"
                id="gender"
                className="p-3 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              >
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
              </select>
            </label>
            <label htmlFor="phone" className="flex flex-col">
              Telefone
              <input
                type="tel"
                id="phone"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="password" className="flex flex-col">
              Senha
              <input
                type="password"
                id="password"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="usertype" className="flex flex-col ">
              Tipo de usuário
              <select
                name="usertype"
                id="usertype"
                className="p-3 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              >
                <option value="feminino">Paciente</option>
                <option value="masculino">Médico</option>
              </select>
            </label>
          </div>
        </div>

        <Link to="/cadastro-endereco">
          <button className="p-3 rounded-2xl outline-none border-none bg-purple-400 hover:bg-purple-500 transition-all duration-300 w-[20vw] font-semibold text-xl text-white">
            Próximo
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Signup;

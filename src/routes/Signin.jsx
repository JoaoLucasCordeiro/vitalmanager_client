import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <section className="h-screen">
      <form className="flex flex-col items-center justify-center gap-4 border border-gray-300 h-screen">
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="w-[600px]"
        />
        <label htmlFor="email" className="flex flex-col ">
          Email
          <input
            type="text"
            id="email"
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
        <Link to="/inicio">
          <button className="mt-5 p-3 rounded-2xl outline-none border-none bg-purple  hover:bg-purple-500 transition-all duration-300 w-[20vw] font-semibold text-xl text-white">
            Entrar
          </button>
        </Link>

        <span className="text-black font-semibold text-base">
          Não possui uma conta?
        </span>
        <Link to="/cadastro">
          <button className="p-3 rounded-2xl outline-none border-none bg-purple  hover:bg-purple-500 transition-all duration-300 w-[20vw] font-semibold text-xl text-white">
            Cadastre-se
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Signin;

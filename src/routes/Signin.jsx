import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const isDoctor = false;

  return (
    <section className="h-screen flex justify-center items-center">
      <form className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-md">
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="w-full max-w-[550px] mb-4"
        />
        <label htmlFor="email" className="flex flex-col w-full">
          Email
          <input
            type="text"
            id="email"
            className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px] min-h-[50px]"
          />
        </label>
        <label htmlFor="password" className="flex flex-col w-full">
          Senha
          <input
            type="password"
            id="password"
            className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px] min-h-[50px]"
          />
        </label>

        <Link to={isDoctor ? "/inicio-medico" : "inicio"}>
          <button className="mt-5 p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]">
            Entrar
          </button>
        </Link>

        <span className="text-black font-semibold text-base">
          Não possui uma conta?
        </span>
        <Link to="/cadastro">
          <button className="p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]">
            Cadastre-se
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Signin;
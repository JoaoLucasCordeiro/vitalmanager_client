import React from "react";

const SignupAdress = () => {
  return (
    <section className="h-screen">
      <form className="flex items-center flex-col justify-around gap-2 border border-gray-300 h-screen">
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="w-[600px]"
        />

        <div className="flex  gap-10">
          <div className="flex flex-col ">
            <label htmlFor="cep" className="flex flex-col ">
              CEP
              <input
                type="text"
                id="cep"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
            <label htmlFor="rua" className="flex flex-col ">
              Rua
              <input
                type="text"
                id="rua"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
            <label htmlFor="bairro" className="flex flex-col ">
              Bairro
              <input
                type="text"
                id="bairro"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="cidade" className="flex flex-col ">
              Cidade
              <input
                type="text"
                id="cidade"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label htmlFor="estado" className="flex flex-col ">
              Estado
              <input
                type="text"
                id="estado"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="pais" className="flex flex-col ">
              Páis
              <input
                type="text"
                id="pais"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

            <label htmlFor="numero" className="flex flex-col ">
              Número
              <input
                type="number"
                id="numero"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-[20vw]"
              />
            </label>

        
          </div>
        </div>

        <button className="p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-[20vw] font-semibold text-xl text-white">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default SignupAdress;

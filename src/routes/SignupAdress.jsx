import React from "react";

const SignupAdress = () => {
  return (
    <section className="h-screen">
      <form className="flex flex-col items-center justify-around gap-2 border border-gray-300 h-screen px-4">
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
         className="max-w-full h-auto md:w-[600px] w-[800px]"
        />

        <div className="flex flex-col sm:flex-row md:gap-10 gap-0 w-full md:justify-center justify-normal">
          <div className="flex flex-col items-center w-full max-w-[450px]">
            <label htmlFor="cep" className="flex flex-col">
              CEP
              <input
                type="text"
                id="cep"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="rua" className="flex flex-col">
              Rua
              <input
                type="text"
                id="rua"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="bairro" className="flex flex-col">
              Bairro
              <input
                type="text"
                id="bairro"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>

            <label htmlFor="cidade" className="flex flex-col">
              Cidade
              <input
                type="text"
                id="cidade"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>

          <div className="flex flex-col items-center w-full max-w-[450px]">
            <label htmlFor="estado" className="flex flex-col">
              Estado
              <input
                type="text"
                id="estado"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>

            <label htmlFor="pais" className="flex flex-col">
              Páis
              <input
                type="text"
                id="pais"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>

            <label htmlFor="numero" className="flex flex-col">
              Número
              <input
                type="number"
                id="numero"
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>
        </div>

        <button className="p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full sm:w-[390px] font-semibold text-xl text-white">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default SignupAdress;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedSignup = () => {
  const [salario, setSalario] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [CRM, setCRM] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Aqui a gente recupera o id do usuário e o token do localStorage
    const idUsuario = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const formData = {
      idUsuario: idUsuario, 
      salario: Number(salario),
      especialidade,
      CRM,
    };

    console.log("Enviando dados:", formData); // Log antes da requisição só pra confirmar
    console.log("Token de autenticação:", token); // O mesmo aqui

    const apiUrl = "https://vital-manager-eyk4.onrender.com/medicos/";

    console.log("URL da API:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseBody = await response.text(); // Vendo o corpo da resposta
        console.error("Erro na resposta:", response.status, responseBody); // Status da resposta
        throw new Error(`Falha ao enviar o formulário: ${response.status}`);
      }

      // Tratamento de sucesso
      navigate("/");
      console.log("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro no envio do formulário:", error); // Tratamento de erro
    }
  };

  return (
    <section className="h-screen">
      <form
        className="flex items-center flex-col justify-center gap-10 border border-gray-300 h-screen"
        onSubmit={handleSubmit}
      >
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="max-w-full h-auto md:w-[600px] w-[800px]"
        />

        <div className="flex flex-col sm:flex-row  md:gap-10 gap-0 w-full md:justify-center justify-normal">
          <div className="flex flex-col items-center w-full max-w-[450px]">
            <label htmlFor="salario" className="flex flex-col ">
              Salário
              <input
                type="number"
                id="salario"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="especialidade" className="flex flex-col ">
              Especialidade
              <input
                type="text"
                id="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="CRM" className="flex flex-col ">
              CRM
              <input
                type="text"
                id="CRM"
                value={CRM}
                onChange={(e) => setCRM(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>
        </div>

        <span className="text-xl text-purple-500 font-bold">
          Por favor, insira os dados do profissional.
        </span>

        <button
          type="submit"
          className="p-3 rounded-2xl outline-none border-none bg-purple-400 hover:bg-purple-500 transition-all duration-300 w-[390px] font-semibold text-xl text-white"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default MedSignup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; // Importar react-toastify

// Componente Spinner simples para indicar carregamento
const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ border: '4px solid #BD7DFB', borderTop: '4px solid #BD7DFB', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 2s linear infinite' }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão vazios
    if (!email.trim() || !senha.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    localStorage.clear(); // Limpa o localStorage antes da requisição

    try {
      console.log("Enviando dados de login:", { email, senha });

      const response = await fetch("https://vital-manager-eyk4.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      console.log("Status da resposta:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Dados recebidos:", data);

        localStorage.setItem("tipo", data.tipo);
        localStorage.setItem("id", data.id.toString());
        localStorage.setItem("token", data.token);

        setIsLoading(false); // Desativa o estado de loading após receber a resposta

        navigate(data.tipo === "M" ? "/inicio-medico" : "/inicio");
      } else {
        const errorResponse = await response.text();
        console.error("Resposta de erro:", errorResponse);
        setIsLoading(false);
        toast.error("Email ou senha incorretos."); // Mostra erro se email ou senha estiverem errados
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setIsLoading(false);
      toast.error("Erro ao tentar fazer login."); // Mostra erro genérico para exceções
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <form className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-md" onSubmit={handleSubmit}>
          <img
            src="/vitalmanagerlogo.svg"
            alt="Logo da plataforma VitalManager"
            className="max-w-full h-auto md:w-[600px] w-[800px]"
          />
          <label htmlFor="email" className="flex flex-col w-full">
            Email
            <input
            required
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px] min-h-[50px]"
            />
          </label>
          <label htmlFor="password" className="flex flex-col w-full">
            Senha
            <input
            required
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px] min-h-[50px]"
            />
          </label>

          <button type="submit" className="mt-5 p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]">
            Entrar
          </button>

          <span className="text-black font-semibold text-base">
            Não possui uma conta?
          </span>
          <Link to="/cadastro" className="flex items-center justify-center p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]">
            <button>
              Cadastre-se
            </button>
          </Link>
        </form>
      )}
    </section>
  );
};

export default Signin;
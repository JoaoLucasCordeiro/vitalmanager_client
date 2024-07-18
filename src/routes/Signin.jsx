import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Importar react-toastify
import { ClipLoader } from "react-spinners";

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

      const response = await fetch(
        "https://vital-manager-eyk4.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        }
      );

      console.log("Status da resposta:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Dados recebidos:", data);

        localStorage.setItem("tipo", data.tipo);
        localStorage.setItem("id", data.id.toString());
        localStorage.setItem("token", data.token);
        localStorage.setItem("id_fk", data.id_fk);
        localStorage.setItem("prontuario_id", data.prontuario_id);

        console.log("O id_fk é:", data.id_fk);
        console.log("O prontuario_id é:", data.prontuario_id);

        setIsLoading(false); // Desativa o estado de loading após receber a resposta

        navigate(data.tipo === "M" ? "/inicio-medico" : "/inicio");
      } else {
        const errorResponse = await response.text();
        console.error("Resposta de erro:", errorResponse);
        setIsLoading(false);
        if (errorResponse === "Email not found") {
          toast.error("Email incorreto ou não cadastrado, por favor tente um email válido.");
        } else if (errorResponse === "Invalid password") {
          toast.error("Senha incorreta, tente novamente.");
        }
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
        <ClipLoader color="#BD7DFB" size={120} />
      ) : (
        <form
          className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
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

          <button
            type="submit"
            className="mt-5 p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]"
          >
            Entrar
          </button>

          <span className="text-black font-semibold text-base">
            Não possui uma conta?
          </span>
          <Link
            to="/cadastro"
            className="flex items-center justify-center p-3 rounded-2xl outline-none border-none bg-purple hover:bg-purple-500 transition-all duration-300 w-full font-semibold text-xl text-white min-w-[390px] min-h-[50px]"
          >
            <button>Cadastre-se</button>
          </Link>
        </form>
      )}
    </section>
  );
};

export default Signin;

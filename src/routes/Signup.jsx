import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("MASCULINO");
  const [tipo, setTipo] = useState("P");
  const navigate = useNavigate();

  const formatarDataParaBackend = (dataNascimento) => {
    const partes = dataNascimento.split('/');
    if (partes.length === 3) {
      return `${partes[2]}-${partes[1].padStart(2, '0')}-${partes[0].padStart(2, '0')}`;
    }
    return dataNascimento;
  };

  const handleDataNascimentoChange = (e) => {
    setDataNascimento(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit chamado");
    console.log({
      nome,
      sobrenome,
      CPF,
      email,
      senha,
      dataNascimento,
      sexo,
      tipo,
    });

    const userData = {
      nome,
      sobrenome,
      CPF,
      email,
      senha,
      dataNascimento: formatarDataParaBackend(dataNascimento),
      sexo,
      tipo,
    };

    try {
      const response = await fetch(
        "https://vital-manager-eyk4.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      console.log("Status da Resposta:", response.status);
      console.log("Corpo da Resposta:", data);

      if (!response.ok) {
        throw new Error(data.message || "Falha ao registrar");
      }

      localStorage.setItem("tipo", data.tipo);
      localStorage.setItem("id", data.id.toString());
      localStorage.setItem("token", data.token);

      if (data.tipo === "P") {
        const pacienteData = {
          idUsuario: data.id,
          numeroProntuario: null,
        };

        const pacienteResponse = await fetch(
          "https://vital-manager-eyk4.onrender.com/pacientes/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${data.token}`,
            },
            body: JSON.stringify(pacienteData),
          }
        );
      

        if (!pacienteResponse.ok) {
          const pacienteDataError = await pacienteResponse.json();
          throw new Error(pacienteDataError.message || "Falha ao criar paciente");
        }

        const pacienteDataResponse = await pacienteResponse.json();
        console.log("Paciente criado com sucesso:", pacienteDataResponse);
      }

      tipo === "P" ? navigate("/") : navigate("/cadastro-medico");
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <section className="h-screen">
      <form
        className="flex items-center flex-col justify-around gap-2 border border-gray-300 h-screen"
        onSubmit={handleSubmit}
      >
        {/* Logo and input fields */}
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="max-w-full h-auto md:w-[600px] w-[800px]"
        />

        <div className="flex flex-col sm:flex-row  md:gap-0 gap-0 w-full md:justify-center justify-normal">
          {/* First column of inputs */}
          <div className="flex flex-col items-center w-full max-w-[450px]">
            {/* Nome input */}
            <label htmlFor="nome" className="flex flex-col ">
              Nome
              <input
                required
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            {/* Sobrenome input */}
            <label htmlFor="sobrenome" className="flex flex-col ">
              Sobrenome
              <input
                required
                type="text"
                id="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            {/* CPF input */}
            <label htmlFor="CPF" className="flex flex-col ">
              CPF
              <input
                required
                type="text"
                id="CPF"
                value={CPF}
                onChange={(e) => setCPF(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            {/* Email input */}
            <label htmlFor="email" className="flex flex-col ">
              Email
              <input
                required
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>

          {/* Second column of inputs */}
          <div className="flex flex-col items-center w-full max-w-[450px]">
            {/* Senha input */}
            <label htmlFor="senha" className="flex flex-col ">
              Senha
              <input
                required
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            {/* Data de nascimento input */}
            <label htmlFor="birthdate" className="flex flex-col ">
              Data de nascimento
              <input
                required
                type="text"
                id="birthdate"
                value={dataNascimento}
                onChange={handleDataNascimentoChange}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
                placeholder="DD/MM/AAAA"
              />
            </label>
            {/* Sexo select */}
            <label htmlFor="gender" className="flex flex-col ">
              Sexo
              <select
                required
                name="gender"
                id="gender"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                className="p-3 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              >
                <option value="FEMININO">Feminino</option>
                <option value="MASCULINO">Masculino</option>
              </select>
            </label>
            {/* Tipo de usuário select */}
            <label htmlFor="usertype" className="flex flex-col ">
              Tipo de usuário
              <select
                required
                name="usertype"
                id="usertype"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="p-3 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              >
                <option value="P">Paciente</option>
                <option value="M">Médico</option>
              </select>
            </label>
          </div>
        </div>

        {/* Submit button */}
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

export default Signup;
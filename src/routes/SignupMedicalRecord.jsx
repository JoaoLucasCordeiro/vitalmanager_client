import React from "react";

const SignupMedicalRecord = () => {
  const [tipoSanguineo, setTipoSanguineo] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [pressao, setPressao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit chamado");
    console.log({
      tipoSanguineo,
      altura,
      peso,
      temperatura,
      pressao,
      descricao,
    });

    const userData = {
      tipoSanguineo,
      altura,
      peso,
      temperatura,
      pressao,
      descricao,
    };

    try {
      const response = await fetch(
        "https://vital-manager-eyk4.onrender.com/prontuarios/",
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
        throw new Error(data.message || "Falha ao registrar prontuário");
      }

      // Redirecionamento baseado no tipo de usuário
      navigate("/");
    } catch (error) {
      console.error("Erro ao registrar prontuário:", error);
    }
  };

  return (
    <section className="h-screen">
      <form
        className="flex items-center flex-col justify-around gap-2 border border-gray-300 h-screen"
        onSubmit={handleSubmit}
      >
        <img
          src="/vitalmanagerlogo.svg"
          alt="Logo da plataforma VitalManager"
          className="max-w-full h-auto md:w-[600px] w-[800px]"
        />

        <div className="flex flex-col sm:flex-row  md:gap-0 gap-0 w-full md:justify-center justify-normal">
          <div className="flex flex-col items-center w-full max-w-[450px]">
            <label htmlFor="tipoSanguineo" className="flex flex-col ">
              Tipo Sanguíneo
              <input
                required
                type="text"
                id="tipoSanguineo"
                onChange={(e) => setTipoSanguineo(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="altura" className="flex flex-col ">
              Altura
              <input
                required
                type="text"
                id="altura"
                onChange={(e) => setAltura(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="peso" className="flex flex-col ">
              Peso
              <input
                required
                type="text"
                id="peso"
                onChange={(e) => setPeso(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
            <label htmlFor="temperatura" className="flex flex-col ">
              Temperatura
              <input
                required
                type="text"
                id="temperatura"
                onChange={(e) => setTemperatura(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>

          <div className="flex flex-col items-center w-full max-w-[450px]">
            <label htmlFor="pressao" className="flex flex-col ">
              Pressão
              <input
                required
                type="password"
                id="pressao"
                onChange={(e) => setPressao(e.target.value)}
                className="p-2 outline-none rounded-lg border bg-transparent border-gray-300 w-full min-w-[390px]"
              />
            </label>
          </div>
        </div>

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

export default SignupMedicalRecord;

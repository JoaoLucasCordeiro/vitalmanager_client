import MedCard from "../components/MedCard";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";

const Home = () => {
  return (
  
    <section className="flex flex-col sm:justify-normal justify-center md:items-baseline items-center h-screen p-4 md:ml-[12%] ml-0">
      <div>
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl text-center md:text-left py-5">Marque sua consulta</h2>

        <div className="flex flex-col items-center md:justify-normal justify-center sm:mt-10 mt-5 md:space-x-4 space-x-0 sm:flex-row sm:gap-0 gap-4">
          <Searcher
          placeholder="Procurar por um médico"
          />
          <SelectDocType />
        </div>
        <div className="flex items-center flex-wrap gap-3 py-5">
          <MedCard nome="João" sobrenome="Silva" especialidade="Cardiologia" />
          <MedCard
            nome="Maria"
            sobrenome="Fernandes"
            especialidade="Dermatologia"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
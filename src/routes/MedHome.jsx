import MedCard from "../components/MedCard";
import Searcher from "../components/Searcher";
import SelectDocType from "../components/SelectDocType";

const MedHome = () => {
  return (
    <section className="h-screen">
      <div className="p-10">
        <img src="/loggedlogo.png" alt="VitalManager Logo" />
        <h2 className="text-purple-400 font-bold text-3xl ml-5 py-5">Consultas marcadas</h2>

        <div className="flex items-center mt-10 space-x-4">
          <Searcher
          placeholder="Procurar por um paciente"
          />
        </div>
        <div className="ml-5 flex items-center flex-wrap gap-3 py-5">
        
        </div>
      </div>
    </section>
  );
};

export default MedHome;

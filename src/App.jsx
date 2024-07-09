import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando os componentes para cada rota
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Scheduling from "./routes/Scheduling";
import MedSignup from "./routes/MedSignup";
import Home from "./routes/Home";
import SignupAdress from "./routes/SignupAdress";
import PrivateRoutes from "./utils/PrivateRoutes";
import MedicalRecords from "./routes/MedicalRecords";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/cadastro-endereco" element={<SignupAdress />} />
        <Route path="/cadastro-medico" element={<MedSignup />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/agenda" element={<Scheduling />} />
          <Route path="/prontuarios" element={<MedicalRecords />} />
        </Route>

        <Route path="/agendamentos" element={<Scheduling />} />
      </Routes>
    </Router>
  );
};

export default App;

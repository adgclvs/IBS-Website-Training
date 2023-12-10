import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actualite_page from "./Pages/Actualite_page";
import Admission_page from "./Pages/Admission_page";
import Blockchain_page from "./Pages/Blockchain_page";
import Bootcamp_page from "./Pages/Bootcamp_page";
import Campus_page from "./Pages/Campus_page";
import Diplomes_page from "./Pages/Diplomes_page";
import Home_page from "./Pages/Home_page";
import Recrutement_page from "./Pages/Recrutement_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/blockchain" element={<Blockchain_page />} />
        <Route path="/diplomes" element={<Diplomes_page />} />
        <Route path="/bootcamp" element={<Bootcamp_page />} />
        <Route path="/campus" element={<Campus_page />} />
        <Route path="/admission" element={<Admission_page />} />
        <Route path="/actualite" element={<Actualite_page />} />
        <Route path="/recrutement" element={<Recrutement_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

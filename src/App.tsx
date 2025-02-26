import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ColaboradorLista from "./components/colaboradores/colaboradoreslista/ColaboradoresLista";
import Sobre from "./pages/sobre/Sobre";
import ColaboradoresForm from "./components/colaboradores/colaboradoresform/ColaboradoresForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colaboradores" element={<ColaboradorLista />} />
            <Route path="/colaboradores/store" element={<ColaboradoresForm />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

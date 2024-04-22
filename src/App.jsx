import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Sobre from "./pages/sobre/Sobre";
import Projetos from "./pages/projetos/Projetos";
import { GlobalStyled } from "./components/header/styled";


export default function App() {
  return (
    <>
    <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/projetos" element={<Projetos/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

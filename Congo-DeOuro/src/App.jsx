import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMaster from "./Layouts/LayoutMaster"; 
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Cozinha from "./pages/Cozinha";
import Gerente from "./pages/Gerente";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
{/* ----------------------------------------LAYOUT PRINCIPALLLLL-------------------------------------- */}
        <Route path="/" element={<LayoutMaster />}>
          <Route index element={<Menu />} />
          <Route path="login" element={<Login />} />
          <Route path="cozinha" element={<Cozinha />} />
          <Route path="gerente" element={<Gerente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
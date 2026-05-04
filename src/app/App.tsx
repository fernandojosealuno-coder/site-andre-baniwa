import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Compras from "./pages/Compras";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comprar" element={<Compras />} />
    </Routes>
  );
}
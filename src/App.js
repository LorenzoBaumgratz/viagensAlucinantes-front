import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import StartPage from "./pages/StartPage";
import DetalhesPassagem from "./pages/DetalhesPassagem";
import Hospedagens from "./pages/Hospedagens";
import DetalhesHospedagem from "./pages/DetalhesHospedagem";

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/home" element={<StartPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home" element={<DetalhesPassagem />} />
            <Route path="/home" element={<Hospedagens />} />
            <Route path="/" element={<DetalhesHospedagem />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import StartPage from "./pages/StartPage";
import DetalhesPassagem from "./pages/DetalhesPassagem";
import Hospedagens from "./pages/Hospedagens";
import DetalhesHospedagem from "./pages/DetalhesHospedagem";
import { ContextProvider } from "./contexts/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/passagens" element={<HomePage />} />
            <Route path="/passagens/:idTicket" element={<DetalhesPassagem />} />
            <Route path="/hospedagens" element={<Hospedagens />} />
            <Route path="/hospedagens/:idHospedagem" element={<DetalhesHospedagem />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>

    </>
  );
}

export default App;

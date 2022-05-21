import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Menu from "./Menu";
const Home = lazy(() => import("./pages/home/Home"));
const ColaboradorCon = lazy(() => import("./pages/colaborador/ColaboradorCon"));

const RequisicaoCon = lazy(() => import("./pages/requisicao/RequisicaoCon"));

const SolicitanteCon = lazy(() => import("./pages/solicitante/SolicitanteCon"));
const TipoRequisicaoCon = lazy(() =>
  import("./pages/tipoRequisicao/TipoRequisicaoCon")
);

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando ... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaboradores" element={<ColaboradorCon />} />
          <Route path="/requisicao" element={<RequisicaoCon />} />
          <Route path="/tipoRequisicao" element={<TipoRequisicaoCon />} />
          <Route path="/solicitantes" element={<SolicitanteCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;

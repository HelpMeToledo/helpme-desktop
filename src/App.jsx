import './css/style.css';
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import React,{ useState }  from "react";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro"
import Header from './components/Header';
import Footer from "./components/Footer";
import Chamado from "./pages/Chamado";
import Perfil from "./pages/Perfil";
import Ativos from "./pages/Ativos";
import Login from './pages/Login';
import Protected from './components/Protected';

function App() {

  return (
    <>

      <HashRouter>

        <Routes>

          <Route path="/" element={<Protected><Header /></Protected>} >

            <Route path="novo" element={<Protected><Chamado /></Protected>} />

          </Route>

          <Route path="cadastro" element={<Cadastro />} />
          <Route path="login" element={<Login />} />

        </Routes>

      </HashRouter>

    </>

  );
}

export default App

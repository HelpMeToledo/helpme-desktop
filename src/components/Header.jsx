import React, { useLayoutEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/style.css';
import api from "../services/api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);



function Toggle() {

    return (

        <header className="header" id="header">
            <div className="header_toggle"><i className="bi bi-list" id="header-toggle"></i> </div>
            <div className="row">
                <div className="col-3 mr-2">Help Me</div>
                <div className="header_img col-3"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>
            </div>

        </header>

    );
}

export default function Header() {

    let navigate = useNavigate();

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#ffffff"
    });

    async function Logout(e) {

        e.preventDefault();
    
        try {
            api.post('logout', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(async (res) => {
    
                    localStorage.setItem("token", "");
    
                    if (res.status) {
                        MySwal.fire({
                            position: 'top-right',
                            icon: 'success',
                            title: 'Deslogado com sucesso!',
                            showConfirmButton: false,
                            timer: 3000
                        });
    
                    }
    
                    return navigate("/login", {replace: true});
    
                }).catch(function (error) {
                    if (error.response.status == 401) {

                        localStorage.setItem("token", "");
    
                        MySwal.fire({
                            position: 'top',
                            icon: 'error',
                            title: `Erro ${error.response.status}: Sua sessão já havia terminado. Logue novamente.`,
                            showConfirmButton: false,
                            timer: 3000
                        });
    
                        return navigate("/login", {replace: true});
                    }
    
                });
    
    
        } catch (err) {
    
            console.log(err);
        }
    }

    return (
        <>
            <Toggle />
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div>

                        <NavLink to="/"><img className="img-fluid p-4 my-3" src="img/logo.png" /></NavLink>

                        <div className="nav_list">
                            <NavLink className="nav_link" to="/"><i className="bi bi-house"></i> Home</NavLink>
                            <NavLink className="nav_link" to="/novo"><i className="bi bi-plus-square"></i> Chamado</NavLink>
                            <NavLink className="nav_link" to="/perfil"><i className="bi bi-person-square"></i> Perfil</NavLink>
                            <NavLink className="nav_link" to="/ativos"><i className="bi bi-bookmark-fill"></i> Ativos</NavLink>
                        </div>
                    </div>
                    <button className="nav_link" onClick={Logout}><i className="bi bi-box-arrow-left"></i>Sair</button>
                </nav>
            </div>
        </>

    );
}
import React, { useLayoutEffect, useState } from "react";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function Login() {

    let navigate = useNavigate();

    const [usuario, setUsuario] = useState({});

    function handleChange(e) {
        const nome = e.target.name;
        const valor = (e.target.value).trim();
        setUsuario({ ...usuario, [nome]: valor });
        console.log(usuario);
    }
    
    async function handleSubmit(e) {

        e.preventDefault();

        try {
            api.post('login', usuario)
                .then(async (res) => {

                    localStorage.setItem("token", res.data.token);

                    if (res.status) {
                        MySwal.fire({
                            position: 'top-right',
                            icon: 'success',
                            title: 'Logado com sucesso!',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        return navigate("/", {replace: true});

                    }
                }).catch(function (error) {

                    if (error.response.status = 401){

                        MySwal.fire({
                            position: 'top',
                            icon: 'error',
                            title: `Erro ao logar, por favor, fique atento aos campos:`,
                            text: error.response.data.message,
                            showConfirmButton: false,
                            timer: 3000
                        });

                    }
                    
                });


        } catch (err) {

            console.log(err);
        }

    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#ff7b10"
    });

    return (

        <div>

            <div className="container formulario" style={{ width: "500px" }} >
                <div className="formHeader row">
                    <div className="col-10">
                        <p>LOGIN</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-person-fill"></i> E-mail</label>
                            <input onChange={handleChange} type="email" name="email" className="form-control">
                            </input>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-shield-lock-fill"></i> Senha</label>
                            <input onChange={handleChange} type="password" name="password" className="form-control">
                            </input>
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <input type="submit" className="col-4 btn btn-primary" value="Entrar"></input>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </div>
                </form>

            </div>

        </div>

    )
}
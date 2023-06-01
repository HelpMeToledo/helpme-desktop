import React, { useEffect, useLayoutEffect, useState } from "react";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function Cadastro() {

    let navigate = useNavigate();


    const [usuario, setUsuario] = useState({});

    
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#ff7b10"
    });

    async function handleSubmit(e) {

        e.preventDefault();

        try {
            api.post('usuarios', usuario)
                .then(async (res) => {

                    if (res.status) {
                        MySwal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Cadastrado com sucesso!',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        return navigate("/login", {replace: true});

                    }
                }).catch(function (error) {
                    
                    
                    let resposta = error.response.data.errors;

                    var erros = "";
                    
                    Object.keys(resposta).forEach(function(index){

                        erros += `<p>${resposta[index]}</p>`;

                    });


                    MySwal.fire({
                        position: 'top',
                        icon: 'error',
                        title: `Erro ao cadastrar, fique atento aos seguintes erros:`,
                        html: `${erros}`,
                        showCloseButton: true,
                        // timer: 3000
                    });


                  });


        } catch (err) {

            console.log(usuario);
        }

    }

    function handleChange(e) {
        const nome = e.target.name;
        const valor = (e.target.value).trim();
        setUsuario({...usuario, [nome]: valor});
        console.log(usuario);
    }

    return (

        <div>

            <div className="container formulario">
                <div className="formHeader row">
                    <div className="col-10">
                        <p>CADASTRE-SE</p>
                    </div>
                    <div className="col-2" style={{ textAlign: "end" }}>
                        <Link to="/login"> <i className="bi bi-x"></i></Link>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-person-fill"></i> Nome</label>
                            <input onChange={handleChange} type="text" aria-label="nome" name="nome" className="form-control" maxLength={150}>
                            </input>
                            
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 col-12">
                            <label><i className="bi bi-file-earmark-person"></i> CPF</label>
                            <input onChange={handleChange} type="text" aria-label="cpf" name="cpf" className="form-control" maxLength={11}>
                            </input>
                        </div>

                        <div className="col-md-6 col-12">
                            <label><i className="bi bi-envelope-fill"></i> E-mail</label>
                            <input onChange={handleChange} type="email" aria-label="email" name="email" className="form-control" maxLength={50}>
                            </input>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 col-12">
                            <label for="password"><i className="bi bi-shield-lock-fill"></i> Senha</label>
                            <input id="password" onChange={handleChange} type="password" aria-label="password" name="password" className="form-control">
                            </input>
                        </div>

                        <div className="col-md-6 col-12">
                            <label><i className="bi bi-telephone-fill"></i> Telefone</label>
                            <input onChange={handleChange} type="text" name="telefone" aria-label="telefone" className="form-control" maxLength={11}>
                            </input>
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <input type="submit" aria-label="submit" className="col-4 btn btn-primary" value="Cadastrar"></input>
                    </div>
                </form>

            </div>

        </div>

    );

};
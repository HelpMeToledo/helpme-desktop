import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../css/style.css";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Header from "../components/Header";

const MySwal = withReactContent(Swal);

export default function Chamado() {

    let navigate = useNavigate();

    const [chamados, setChamados] = useState({ativo: 1, idStatus: 1, idDepartamento: 2, idUsuario: parseInt(localStorage.getItem("id_usuario"))});

    async function handleSubmit(e) {

        e.preventDefault();

        const token = localStorage.getItem("token");

        try {

            api.post('chamado', chamados, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(async (res) => {

                    if (res.status) {
                        MySwal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Chamado efetuado com sucesso!',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        return navigate("/", { replace: true });

                    }
                }).catch(function (error) {


                    let resposta = error.response.data.errors;

                    var erros = "";

                    Object.keys(resposta).forEach(function (index) {

                        erros += `<p>${resposta[index]}</p>`;

                    });


                    MySwal.fire({
                        position: 'top',
                        icon: 'error',
                        title: `Erro ao finalizar chamado, fique atento aos seguintes erros:`,
                        html: `${erros}`,
                        showCloseButton: true,
                        // timer: 3000
                    });


                });


        } catch (err) {

            console.log(chamados);
        }

    }

    function handleChange(e) {
        const nome = e.target.name;
        const valor = nome == "anexo" ? (e.target.files[0].name).trim() : (e.target.value).trim();
        setChamados({ ...chamados, [nome]: valor });
        console.log(chamados);
    }

    return (

        <div>

            <Header />

            <div className="container formulario" style={{ width: "700px", marginLeft: "30%", marginTop: "10%" }}>
                <div className="formHeader row">

                    <div className="col" style={{ textAlign: "end" }}>
                        <Link to="/"> <i className="bi bi-x"></i></Link>
                    </div>

                </div>

                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-file-earmark"></i> Titulo</label>
                            <input onChange={handleChange} type="text" name="titulo" className="form-control" maxLength={150}>
                            </input>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-file-earmark-text"></i> Descrição</label>
                            <textarea onChange={handleChange} type="text" name="descricao" className="form-control" maxLength={500}>
                            </textarea>

                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="bi bi-folder-plus"></i> Anexo</label>
                            <input onChange={handleChange} type="file" name="anexo" className="form-control" >
                            </input>

                        </div>

                    </div>

                    <div style={{ textAlign: "end", marginTop: "30px" }}>

                        <input type="button" className="button-red btn-primary" value="Cancelar"  ></input>

                        <input type="submit" className="button-green btn-primary" value="Salvar" ></input>

                    </div>
                </form>

            </div>

        </div>
    );
}
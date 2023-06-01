import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Header from "../components/Header";

const MySwal = withReactContent(Swal);
export default function Home() {

    const [token, setToken] = useState(localStorage.getItem("token"));

    let navigate = useNavigate();
    
    useEffect(() => {
        
        api.get('chamado',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(async (res) => {
                //
            }).catch(function (error) {

                if (error.response.status == 401) {

                    localStorage.setItem("token", "");

                    MySwal.fire({
                        position: 'top-right',
                        icon: 'error',
                        title: 'Sua sessão expirou, logue novamente',
                        showConfirmButton: false,
                        timer: 3000
                    });

                    return navigate("/login", { replace: true });
                }

            })
    });

    return (
        <>
            <Header />
            <section className="conteudo"><p>Você está em home!</p></section>
        </>
    );

}
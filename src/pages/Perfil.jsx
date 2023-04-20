import React, {useLayoutEffect} from "react";
export default function Perfil(){

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#ffffff"
    });
    return (
        <section className="conteudo"><p>Você está em perfil!</p></section>
    );
    
}
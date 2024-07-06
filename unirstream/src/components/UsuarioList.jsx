import React from "react";
import { Usuario } from "./Usuario";
import useShopList from "../hooks/useShopList";

export const UsuarioList = () => {

    const { filmShop, addShop } = useShopList();

    return (
        <div>
            <div>
                <h1>Venta: </h1>
            </div>
            <div className="usuario--cuadricula">
                {filmShop && filmShop.map((usuario, index) => (
                    <Usuario
                        key={index}
                        id={usuario.traId}
                        videoLink={usuario.video}
                        original_title={usuario.originalTitle}
                        poster_path={usuario.posterPath}
                    />
                ))}
            </div>
        </div>
    );
}
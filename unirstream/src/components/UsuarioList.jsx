import React from "react";
import { Usuario } from "./Usuario";
import { useRent } from "../hooks/useRent"
import { useShop } from "../hooks/useShop"

export const UsuarioList = () => {

    const {filmRent, addRent } = useRent();
    const {filmShop, addShop} = useShop();

    return(
        <div>
            <div>
                <h1>Renta: </h1>
            </div>
            <div className="usuario--cuadricula">
                {filmRent && filmRent.map((usuario, index) => (
                    <Usuario
                    key={index}
                    id = {usuario.id}
                    original_title = {usuario.original_title}
                    poster_path = {usuario.poster_path}
                    />
                ))}
            </div>
            <div>
                <h1>Venta: </h1>
            </div>
            <div className="usuario--cuadricula">
                {filmShop && filmShop.map((usuario, index) => (
                    <Usuario
                    key={index}
                    id = {usuario.id}
                    original_title = {usuario.original_title}
                    poster_path = {usuario.poster_path}
                    />
                ))}
            </div>
        </div>
    );

}
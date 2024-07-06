import React from "react";

export const Carrusel = (id, dirImagen) => {

    return(
        <div>
            <li key={id}>
                <img src = {dirImagen} />
            </li>
        </div>
    )

}
import React from "react";

export const Carrusel = ({id, dirImagen}) => {

    return(
        <div>
            <img src={dirImagen} alt={id} />
        </div>
    )

}

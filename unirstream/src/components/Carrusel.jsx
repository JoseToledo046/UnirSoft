import React from "react";

export const Carrusel = ({id, dirImagen}) => {

    return(
        <div className="item-carrusel">
            <img src={dirImagen} alt={id} />
        </div>
    )

}

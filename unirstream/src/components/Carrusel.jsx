import React from "react";

export const Carrusel = ({id, dirImagen}) => {

    return(
        <div className="item-carrusel">
            <Link to = {`/movie/${id}`}><img src={dirImagen} /></Link>
        </div>
    )

}

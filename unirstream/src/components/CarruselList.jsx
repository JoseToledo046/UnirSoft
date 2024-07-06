import { useRef, useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { useCarrusel } from "../hooks/useCarrusel";


export const CarruselList = () => {

    const {carrusel} = useCarrusel();

    return (

        <div>
            {carrusel && carrusel.map((movie, index) => (
                <Carrusel
                key={index}
                id = {movie.idFilm}
                dirImagen = {movie.backdropPath}
                />
            ))}
        </div>

    )

}

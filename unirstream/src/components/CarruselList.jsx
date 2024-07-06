import { useRef, useState } from "react";
import {Carrusel} from "../components/Carrusel";
import {useCarrusel} from "../hooks/useCarrusel";


export const CarruselList = () => {

    const dataCarrusel = useCarrusel();
    console.log(dataCarrusel);

    return(

        <div>
            {
                dataCarrusel&&
                <Carrusel 
                id = {dataCarrusel.idFilm}
                dirImagen = {dataCarrusel.backdropPath}
                />
            }
        </div>

    )

}
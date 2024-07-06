import React from "react";
import { Busqueda} from "./Busqueda";
import { useBusqueda } from '../hooks/useBusqueda'

export const BusquedaList = ({concep}) => {

    const {busqueda} = useBusqueda(concep);

    console.log(concep)
    return(
        <div className="catalogo--cuadricula">
            {busqueda && busqueda.map((movie, index) => (
                <Busqueda
                key={index}
                originalTitle = {movie.originalTitle}
                posterPath = {movie.posterPath}
                overview = {movie.overview}
                voteAverage = {movie.voteAverage}
                idFilm = {movie.idFilm}
                />
            ))}
        </div>
    );

}
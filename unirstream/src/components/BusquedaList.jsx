import React from "react";
import { Busqueda} from "./Busqueda";
import { useBusqueda } from '../hooks/useBusqueda'

export const BusquedaList = ({concep}) => {

    const {busqueda} = useBusqueda(concep);

    return(
        <div className="catalogo--cuadricula">
            {busqueda && busqueda.map((movie, index) => (
                <Busqueda
                key={index}
                original_title = {movie.original_title}
                poster_path = {"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                overview = {movie.overview}
                vote_average = {movie.vote_average}
                id = {movie.id}
                />
            ))}
        </div>
    );

}
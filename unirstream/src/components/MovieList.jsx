import React from "react";
import { Movie} from "./Movie";
import { useCatalogo } from '../hooks/useCatalogo'

export const MovieList = () => {

    const {catalogos} = useCatalogo();

    return(
        <div className="catalogo--cuadricula">
            {catalogos && catalogos.map((movie, index) => (
                <Movie
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
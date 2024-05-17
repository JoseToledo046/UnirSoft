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
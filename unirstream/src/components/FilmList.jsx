import React from "react";
import { Film } from "../components/Film"
import { useFilm } from "../hooks/useFilm";

export const FilmList = ({idfilm}) => {

    const {film} = useFilm(idfilm);
    
    return(
        <div className="pelicula">
            {film && 
            <Film
            idFilm = {film.idFilm}
            originalTitle = {film.originalTitle}
            backdropPath = {film.backdropPath}
            posterPath = {film.posterPath}
            generos = {film.generos}
            budget = {film.budget}
            tagline = {film.tagline}
            overview = {film.overview}
            vote_count = {film.vote_count}
            voteAverage = {film.voteAverage}
            releaseDate = {film.releaseDate}
            revenue  = {film.revenue}
            />
            }
        </div>
    );

}
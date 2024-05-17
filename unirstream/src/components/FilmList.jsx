import React from "react";
import { Film } from "../components/Film"
import { useFilm } from "../hooks/useFilm";

export const FilmList = ({idfilm}) => {

    const {film} = useFilm(idfilm);
    
    return(
        <div className="pelicula">
            {film && 
            <Film
            id = {film.id}
            original_title = {film.original_title}
            backdrop_path = {"https://image.tmdb.org/t/p/original/" + film.backdrop_path}
            poster_path = {"https://image.tmdb.org/t/p/original/" + film.poster_path}
            genres = {film.genres}
            budget = {film.budget}
            tagline = {film.tagline}
            overview = {film.overview}
            vote_count = {film.vote_count}
            vote_average = {film.vote_average}
            release_date = {film.release_date}
            revenue  = {film.revenue}
            />
            }
        </div>
    );

}
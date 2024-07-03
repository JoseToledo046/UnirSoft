import React from "react";
import { Link } from 'react-router-dom';

//export const Movie = ({original_title, poster_path,overview,vote_average,id }) => {
export const Movie = ({originalTitle, posterPath,overview,voteAverage,idFilm }) => {
    const valor = voteAverage * 10;
    return (
        <div className="catalogo">
            <h3 className="catalogo__texto">{originalTitle}</h3>
            <Link to = {`/movie/${idFilm}`}><img src={posterPath} alt={posterPath} className="catalogo__img"/></Link>
            <p className="catalogo__texto--sinop"><b>Sinopsis:</b> {overview}</p>
            <p className="catalogo__texto"><b>Puntuación:</b> {Number(valor.toFixed(2))} % </p>
        </div>
    );
}
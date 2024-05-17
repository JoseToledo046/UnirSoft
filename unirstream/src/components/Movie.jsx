import React from "react";
import { Link } from 'react-router-dom';

export const Movie = ({original_title, poster_path,overview,vote_average,id }) => {
    const valor = vote_average * 10;
    return (
        <div className="catalogo">
            <h3 className="catalogo__texto">{original_title}</h3>
            <Link to = {`/movie/${id}`}><img src={poster_path} alt={poster_path} className="catalogo__img"/></Link>
            <p className="catalogo__texto--sinop"><b>Sinopsis:</b> {overview}</p>
            <p className="catalogo__texto"><b>Puntuación:</b> {Number(valor.toFixed(2))} % </p>
        </div>
    );
}
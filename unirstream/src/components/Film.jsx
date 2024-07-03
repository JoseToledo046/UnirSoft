import React from "react";
import useRent from "../hooks/useRent";
import useShop from "../hooks/useShop";

export const Film = ({ originalTitle, backdropPath, posterPath, generos, budget, tagLine, overview, vote_count, voteAverage, releaseDate, revenue, idFilm }) => {

    const valor = voteAverage * 10;
    console.log(voteAverage);

    const {filmRent, addRent} = useRent();
    const {filmShop, addShop} = useShop();

    const handleAddRent  = () => {
        addRent(id, originalTitle, posterPath);
    }

    const handleAddShop  = () => {
        addShop(id, originalTitle, posterPath);
    }

    return (
        <div className="pelicula__conten">
            <img src={backdropPath} alt={backdropPath} className="pelicula__conten--img" />
            <div className="pelicula__conten__col0">
                <img src={posterPath} alt={posterPath} className="pelicula__conten__poster" />
                <div>
                    <button className="pelicula__conten__col0--bt" onClick={handleAddRent} >Rentar</button>
                    <button className="pelicula__conten__col0--bt" onClick={handleAddShop} >Comprar</button>

                </div>
            </div>
            <div className="pelicula__conten__col">
                <h2 className="pelicula__conten__col--inf">{originalTitle}</h2>
                <p>{tagLine}</p>
                <p><b>Puntuación: </b>{valor} %</p>
                <p><b>Votos: </b>{vote_count}</p>
                <p><b>Acpectaion: </b>{voteAverage}</p>
                <p><b>Presupuesto: </b>{budget}</p>
                <p><b>Ganacia: </b>{revenue}</p>
                <p><b>Fecha estreno: </b>{releaseDate}</p>

                <p><b>Sinopsis: </b>{overview}</p>
            </div>
        </div>
    );
}
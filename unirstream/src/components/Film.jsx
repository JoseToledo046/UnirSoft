import React from "react";
import useRent from "../hooks/useRent";
import useShop from "../hooks/useShop";

export const Film = ({ original_title, backdrop_path, poster_path, genres, budget, tagline, overview, vote_count, vote_average, release_date, revenue, id }) => {

    const valor = vote_average * 10;

    const {filmRent, addRent} = useRent();
    const {filmShop, addShop} = useShop();

    const handleAddRent  = () => {
        addRent(id, original_title, poster_path);
    }

    const handleAddShop  = () => {
        addShop(id, original_title, poster_path);
    }

    return (
        <div className="pelicula__conten">
            <img src={backdrop_path} alt={backdrop_path} className="pelicula__conten--img" />
            <div className="pelicula__conten__col0">
                <img src={poster_path} alt={poster_path} className="pelicula__conten__poster" />
                <div>
                    <button className="pelicula__conten__col0--bt" onClick={handleAddRent} >Rentar</button>
                    <button className="pelicula__conten__col0--bt" onClick={handleAddShop} >Comprar</button>
                    {console.log(filmShop)};
                </div>
            </div>
            <div className="pelicula__conten__col">
                <h2 className="pelicula__conten__col--inf">{original_title}</h2>
                <p>{tagline}</p>
                <p><b>Puntuación: </b>{valor} %</p>
                <p><b>Votos: </b>{vote_count}</p>
                <p><b>Acpectaion: </b>{vote_average}</p>
                <p><b>Presupuesto: </b>{budget}</p>
                <p><b>Ganacia: </b>{revenue}</p>
                <p><b>Fecha estreno: </b>{release_date}</p>

                <p><b>Sinopsis: </b>{overview}</p>
            </div>
        </div>
    );
}
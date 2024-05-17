import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router";
import imagen from "../media/find.jpg"

const SearchBar = () => {

    const [conBusq, setConBusc] = useState();
    const navigate = useNavigate();

    const handleClick = () =>{
        if (conBusq && conBusq.trim() !== '' ){
            const cadenaBusc = conBusq.replace(/ /g, '+');
            navigate(`/find/${cadenaBusc}`);
        }
    }

    return(
        <div className="search">
            <img src={imagen} className="search__img"></img>
            <div>
                <input type="text" placeholder="Pelicula..." value={conBusq} onChange={e => setConBusc(e.target.value)} className="earch__inp"></input>
            <   button type="submit" onClick={handleClick} className="search__boton">Buscar</button>
            </div>
        </div>
    )

}

export default SearchBar;
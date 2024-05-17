import React, { useContext} from "react";
import { useParams } from 'react-router-dom';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { FilmList } from "../components/FilmList";

function Pelicula() {

    const {id} = useParams();

    return (
        <div>
            <NavBar />
            <FilmList idfilm={id} />
            <Footer />
        </div>
    );
};

export default Pelicula;
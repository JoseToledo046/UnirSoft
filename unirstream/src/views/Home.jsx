import React, { useContext} from "react";
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { MovieList } from "../components/MovieList"
import {CarruselList} from "../components/CarruselList";

function Home() {
    const images = [
        'https://static.posters.cz/image/hp/75998.jpg',
        'https://static.posters.cz/image/hp/106363.jpg',
        'https://static.posters.cz/image/hp/65856.jpg',
    ];

    return (
        <div>
            <NavBar />
            <CarruselList images={images}/>
            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
import React, { useContext} from "react";
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { MovieList } from "../components/MovieList"
import {CarruselList} from "../components/CarruselList";

function Home() {

    return (
        <div>
            <NavBar />
            <CarruselList />
            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
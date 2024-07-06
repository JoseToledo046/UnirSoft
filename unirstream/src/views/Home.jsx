import React, { useContext} from "react";
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { MovieList } from "../components/MovieList"
import {CarruselList} from "../components/CarruselList";
import { useCarrusel } from "../hooks/useCarrusel";

function Home() {

    const { carrusel } = useCarrusel();
   console.log(carrusel)

    return (
        <div>
            <NavBar />
            {/* <CarruselList images={carrusel}/> */}

            {carrusel ? (
        <CarruselList images={carrusel} />
      ) : (
        <p>Cargando...</p>
      )}

            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
import React, { useContext} from "react";
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { MovieList } from "../components/MovieList"

function Home() {

    return (
        <div>
            <NavBar />
            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
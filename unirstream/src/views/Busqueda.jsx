import React from 'react';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import SearchBar from '../components/SearchBar'; 

function Busqueda() {
    return (
        <div className='nofound'>
            <NavBar />
            <SearchBar />
            <Footer />
        </div>
    );
}

export default Busqueda;
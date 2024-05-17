import React from 'react';
import { useParams } from 'react-router';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { BusquedaList } from '../components/BusquedaList';


function Find() {

    const {cadenaBusc} = useParams();

    return (
        <div className='nofound'>
            <NavBar />
            <BusquedaList concep={cadenaBusc} />
            <Footer />
        </div>
    );
}

export default Find;

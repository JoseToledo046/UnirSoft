import React from 'react';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import image from '../media/404.jpg';

function NotFound() {
    return (
        <div className='nofound'>
            <NavBar />
            <img src={image} className='nofound__image'></img>
            <h1>404 - Página no encontrada</h1>
            <Footer />
        </div>
    );
}

export default NotFound;

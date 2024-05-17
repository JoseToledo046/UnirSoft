import React from 'react';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import {UsuarioList} from "../components/UsuarioList";

function User() {
    return (
        <div className='nofound'>
            <NavBar />
            <UsuarioList />
            <Footer />
        </div>
    );
}

export default User;

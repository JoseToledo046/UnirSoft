import React from 'react';
import { NavBar } from "../components/Navbar";
import  Footer  from "../components/Footer";
import { SearchFilter } from '../components/SearchFilter';

function Search() {
    return (
        <div className='nofound'>
            <NavBar />
            <SearchFilter />
            <Footer />
        </div>
    );
}

export default Search;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Pelicula from '../views/Pelicula';
import User from '../views/User';
import Busqueda from '../views/Busqueda';
import NotFound from '../views/NotFound';
import Find from '../views/Find';
function GlobalRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" exact element = {<Home />} />
            <Route path = "/movie/:id" exact element = {<Pelicula />} />
            <Route path = "/busqueda" exact element = {<Busqueda />} />
            <Route path = "/find/:cadenaBusc" exact element = {<Find />} />
            <Route path = "/user" exact element = {<User />} />
            <Route path = "*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
};

export default GlobalRouter;